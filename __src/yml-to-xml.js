import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { XMLBuilder } from 'fast-xml-parser';

// Window dimensions
let width = null;
let height = null;

// Parse command-line arguments
const args = process.argv.slice(2);
let inputFile = null;
let outputFile = null;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-w' && args[i + 1] !== undefined) {
        width = parseInt(args[i + 1], 10);
        i++;
    } else if (args[i] === '-h' && args[i + 1] !== undefined) {
        height = parseInt(args[i + 1], 10);
        i++;
    } else if (args[i] === '-o' && args[i + 1] !== undefined) {
        outputFile = path.resolve(args[i + 1]);
        i++;
    } else if (!args[i].startsWith('-')) {
        inputFile = args[i];
    }
}

// Validate required arguments
if (width === null || isNaN(width)) {
    console.error('Error: -w argument is required and must be a number');
    process.exit(1);
}

if (height === null || isNaN(height)) {
    console.error('Error: -h argument is required and must be a number');
    process.exit(1);
}

if (!outputFile) {
    console.error('Error: -o argument is required');
    process.exit(1);
}

if (!inputFile) {
    console.error('Usage: node yml-to-xml.js -w <width> -h <height> -o <output-file.xml> <input-file.yml>');
    process.exit(1);
}
const inputPath = path.resolve(inputFile);

// Check if input file exists
if (!fs.existsSync(inputPath)) {
    console.error(`Error: File "${inputFile}" not found`);
    process.exit(1);
}

try {
    // Read YAML file
    const yamlContent = fs.readFileSync(inputPath, 'utf8');

    // Parse YAML to JavaScript object
    const jsonObj = yaml.load(yamlContent);

    // Configure XML builder
    const builder = new XMLBuilder({
        attributeNamePrefix: '$',
        ignoreAttributes: false,
        format: true,
        indentBy: '    ',
        suppressEmptyNode: true,
        parseAttributeValue: false,
        parseTagValue: false,
        numberParseOptions: { hex: false, leadingZeros: false, eNotation: true },
        trimValues: true,
        attributeGroups: true,
        removeNSPrefix: true,
        allowBooleanAttributes: true,
        tagValueProcessor: (name, val) => {
            if (name !== 'origin') {
                // Fix parseTagValue is ignored and hex values 00000000 are converted to 0
                if (/color/i.test(name) && val === 0) {
                    val = '00000000';
                }
                // Convert numbers into ES-DE coordinates system
                if (typeof val === 'string') {
                    return val.replace(/(\d+) (\d+)/, (_, p1, p2) => {
                        return `${p1 / width} ${p2 / height}`;
                    })
                } else if (typeof val === 'number') {
                    if (/fontSize|Height|(?<!line)Spacing/gi.test(name)) {
                        return val / height;
                    }
                }
            }
            return val;
        }
    });

    // Convert JSON to XML
    const xmlContent = builder.build(jsonObj);

    // Add XML declaration if not present
    let finalXml = xmlContent;
    if (!xmlContent.startsWith('<?xml')) {
        finalXml = '<?xml version="1.0" encoding="UTF-8"?>\n' + xmlContent;
    }

    // Write to output file
    fs.writeFileSync(outputFile, finalXml, 'utf8');

    console.log(`✓ Successfully converted "${inputFile}"`);
    console.log(`  Output: ${outputFile}`);

} catch (error) {
    console.error('Error converting YAML to XML:');
    console.error(error.message);
    process.exit(1);
}

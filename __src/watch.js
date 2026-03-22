import readline from 'node:readline';
import fs from 'node:fs';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import chokidar from 'chokidar';

const watcher = chokidar.watch(await Array.fromAsync(glob('./themes/*.yml')));
watcher
    .on('change', async (filePath) => {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let w = 0;
        let h = 0;

        for await (const line of rl) {
            if (line.includes('@width')) {
                w = parseInt(line.split(' ').pop(), 10);
            }
            if (line.includes('@height')) {
                h = parseInt(line.split(' ').pop(), 10);
                break;
            }
        }

        const outputPath = path.basename(filePath, path.extname(filePath));

        const child = spawn('node', ['yml-to-xml.js', '-w', w, '-h', h, '-o', `../${outputPath}.xml`, filePath]);

        child.stdout.on('data', (data) => {
            console.log(data.toString());
        });
    });
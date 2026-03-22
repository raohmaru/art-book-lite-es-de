# Art Book Lite Theme for ES-DE

A theme for [ES-DE](https://es-de.org/) based on [Art Book Next (ES-DE Edition)](https://github.com/anthonycaccese/art-book-next-es-de) by Anthony Caccese.

Optimized for handheld devices.

## Preview

https://github.com/user-attachments/assets/96240f51-555c-4f3a-b082-4c731764cb38

## Features

Custom Collections, when no grouped, displays the name of the collection in the sytem view and in the game list view.

## Customizations

### Creating your own color scheme

A custom color scheme lets you to modify any of the colors, artwork, logos and fonts used in the theme.

#### Instructions

1) In the theme-customizations folder you will find a file called [customizations.xml](https://github.com/raohmaru/art-book-lite-es-de/blob/main/theme-customizations/customizations.xml)

2) Edit the properites in `customizations.xml` to create your custom color scheme.
    
3) Set the `Theme Color Scheme` in ES-DE's UI Settings menu to `Custom` and your custom color scheme will be applied. If you see an error check that the paths are correct, and that the values you added for each property are correct and well formatted.

### Adding Custom Artwork & Custom Logos

You can also add custom artwork and logos for any custom collections you create, or replace the artwork and logos of existing collections.

> ℹ Make sure you have `Main Menu > Game Collection Settings > Group Custom Collections` set to `Never`.

+ In your `theme-customizations/logos` folder add SVG logos for each custom collection you want to display. They should be named the same as the collection.
+ In your `theme-customizations/artwork` folder add png images for each custom collection you want to display. They should be named the same as the collection.
+ In your `theme-customizations/fonts` folder add TTF font files you want to use.

## Development

Theme files are [YAML](https://yaml.org/) files located in the [__src/themes](https://github.com/raohmaru/art-book-lite-es-de/tree/main/__src/themes) folder. Please do not modify the XML files in the root.

### Setup

You need to have [Node.js](https://nodejs.org/en) installed, minimum version 22.

To setup the development environment, run the following command in the `__src` folder:
```bash
npm install --ignore-scripts
```

### Build

To build the theme, run the following command in the `__src` folder:
```bash
npm run build
```
The theme will be built in the root folder.

### Watcher

To automatically build the theme when you make changes to the YAML files, run the following command in the `__src` folder:
```bash
npm run watch
```

## License

Creative Commons CC-BY-NC-SA - https://creativecommons.org/licenses/by-nc-sa/4.0

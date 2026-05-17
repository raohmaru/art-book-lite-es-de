# Art Book Lite Theme for ES-DE

A theme for [ES-DE](https://es-de.org/) based on [Art Book Next (ES-DE Edition)](https://github.com/anthonycaccese/art-book-next-es-de) by Anthony Caccese.

Optimized for handheld devices.

## Preview

https://github.com/user-attachments/assets/55fef1f4-9c30-4679-9adc-3c48c80b0967

## Features

Custom Collections, when no grouped, displays the name of the collection in the sytem view and in the game list view.

## Customizations

### Creating your own color scheme

A custom color scheme lets you to modify any of the colors, artwork, logos and fonts used in the theme.

#### Instructions

1) In the theme-customizations folder you will find a file called [customizations.xml](https://github.com/raohmaru/art-book-lite-es-de/blob/main/dist/theme-customizations/customizations.xml)

2) Edit the properites in `customizations.xml` to create your custom color scheme.
    
3) Set the `Theme Color Scheme` in ES-DE's UI Settings menu to `Custom` and your custom color scheme will be applied. If you see an error check that the paths are correct, and that the values you added for each property are correct and well formatted.

### Adding Custom Artwork & Custom Logos

You can also add custom artwork and logos for any custom collections you create, or replace the artwork and logos of existing collections.

> ℹ Make sure you have `Main Menu > Game Collection Settings > Group Custom Collections` set to `Never`.

+ In your `theme-customizations/logos` folder add SVG logos for each custom collection you want to display. They should be named the same as the collection.
+ In your `theme-customizations/artwork` folder add png images for each custom collection you want to display. They should be named the same as the collection.
+ In your `theme-customizations/fonts` folder add TTF font files you want to use.

## Development

Theme files are [YAML](https://yaml.org/) files located in the [src/themes](https://github.com/raohmaru/art-book-lite-es-de/tree/main/src/themes) folder.

### Setup

You need to have [Node.js](https://nodejs.org/en) installed, minimum version 22.

To setup the development environment, run the following command in the `src` folder:
```bash
npm install --ignore-scripts
```

### Build

To build the theme, run the following command in the `src` folder:
```bash
npm run build
```
The theme will be built in the `dist/` folder.

### Watcher

To automatically build the theme when you make changes to the YAML files, run the following command in the `src` folder:
```bash
npm run watch
```

## Testing (Windows)

Follow this steps to test (and develop) the theme in Windows OS.

### Requirements

+ [ES-DE](https://es-de.org/) for windows.
+ [RivaTuner Statistics Server](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/) (limits ES-DE fps).

### Setup

+ Start ES-DE with the following arguments: `ES-DE.exe --resolution w h --debug`,  
  where `w` and `h` are the width an height of the ES-DE window.
+ Start RivaTuner Statistics Server, create a new profile for the executable ES-DE.exe and set "Framerate limit" to `60`.

### Testing

+ Copy the contents of the theme dist folder into `<ES-DE installation dir>\ES-DE\themes\art-book-lite-es-de`.
+ Restart ES-DE.

### Development + Watcher

+ Copy the files in [src/dev-win](https://github.com/raohmaru/art-book-lite-es-de/tree/main/src/dev-win) into the installation directory of ES-DE.
+ Modify [ES-DE.bat](https://github.com/raohmaru/art-book-lite-es-de/tree/main/src/dev-win/ES-DE.bat) as needed.
+ Empty the contents of `<ES-DE installation dir>\ES-DE\themes\art-book-lite-es-de`.
+ Create a symbolic link of all the folders and files in the `dist/` folder to `<ES-DE installation dir>\ES-DE\themes\art-book-lite-es-de` (you can use [create_symlinks.bat](https://gist.github.com/raohmaru/3199ef79a4223cd3921d)).
+ Run the [watcher](#Watcher).
+ Execute ES-DE.bat.

Every time a source file is modified, you will need to restart ES-DE or change the theme in the settings in order to see the changes in the UI.

## License

Creative Commons CC-BY-NC-SA - https://creativecommons.org/licenses/by-nc-sa/4.0

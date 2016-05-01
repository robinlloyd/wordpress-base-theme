# Base WordPress theme automation

Using gulp, this helps with compiling Sass, livereload and building theme files into a separate dist folder for upload.

## Installation

* Clone the repository into your WordPress installation's `themes` folder.
* Rename the theme to whatever you want, remember to change this in style.css also.
* Open up terminal at the theme directory and run `gulp` to start watching files.
* Install the chrome livereload plugin, click it so that livereload will work.
* For exporting for upload use `gulp build` which will output the theme files to the `dist` folder.

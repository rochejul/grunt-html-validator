# grunt-html-validator

> Grunt plugin to enable HTML validation (based on the W3C API). Return a checkstyle xml file.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-validator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-validator');
```

## The "html_validator" task

### Overview
In your project's Gruntfile, add a section named `html_validator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'html_validator': {
      'validation': {
          'options': {
              'directories': ['C:\\Dev\\Git\\test']
          }
      }
  }
});
```

### Options

#### options.verbose
Type: `Boolean`
Default value: `false`

#### options.encoding
Type: `String`
Default value: `UTF-8`

#### options.extensions
Type: `Array<String>`
Default value: `[ 'htm', 'html', 'tmpl', 'tpl' ]`
List of extensions to recognize HTML files

#### options.output
Type: `String`
Default value: `report-html-checkstyle.xml`
Where to place your checkstyle report

#### options.directories
Type: `Array<String>`
Default value: `null`
Mandatory ! You have to specify in which folders you want to analyze your HTML files

#### options.subdirectories
Type: `Boolean`
Default value: `false`
Shall we search in sub-directories ?

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

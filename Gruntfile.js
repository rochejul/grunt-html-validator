/*jshint node:true */

/*
 * grunt-html-validator
 * https://github.com/rochejul/grunt-html-validator
 *
 * Copyright (c) 2014 Roche julien
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        'jshint': {
            'all': [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            'options': {
                'jshintrc': '.jshintrc'
            }
        },

        // Unit tests.
        'nodeunit': {
            'tests': ['test/*_test.js']
        }/*,

        // Configuration to be run (and then tested).
        'html_validator': {
            'default_options': {
                'options': {
                    'directories': ['C:\\Dev\\Git\\test']
                }
            }
        }*/
    });

    // Actually load this plugin's task(s).
    //grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run
    grunt.registerTask('test', ['nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};

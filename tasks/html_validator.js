/*
 * grunt-html-validator
 * https://github.com/rochejul/grunt-html-validator
 *
 * Copyright (c) 2014 Roche julien
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html_validator', 'Grunt plugin to enable HTML validation (based on the W3C API). Return a checkstyle xml file.', function () {
        grunt.log.writeln('Launch the html-validator task.');

        // Merge task-specific and/or target-specific options with these defaults.
        grunt.log.writeln('Merging options');
        var options = this.options(
                {
                    'verbose': false,
                    'extensions': [
                        'htm',
                        'html',
                        'tmpl',
                        'tpl'
                    ],
                    'subdirectories': false,
                    'encoding': 'UTF-8',
                    'output': 'report-html-checkstyle.xml',
                    'directories': null
                }
            ),
            done = this.async();

        grunt.log.writeln('Options merged:');
        grunt.log.writeln(JSON.stringify(options, null, '\t'));

        // Check if we have java
        grunt.log.writeln('Check if we have Java');

        grunt.util.spawn(
            {
                'cmd': 'java',
                'args': [
                    '-version'
                ]
            },
            function (error) {
                if (error) {
                    grunt.fail.fatal('Java is not install. Please see http://java.com/getjava‎');
                    done(1);

                } else {
                    if (options.directories === null || options.directories === undefined || options.directories.length <= 0) {
                        grunt.fail.fatal('The directories options are not specified. We stop the task.');
                        done(1);

                    } else {
                        grunt.log.writeln('We check the directories');
                        options.directories.every(function (directory) {
                            if (!grunt.file.isDir(directory)) {
                                grunt.fail.fatal('The following path is not a directory:' + directory);
                                done(1);
                                return false;
                            }

                            return true;
                        });

                        grunt.log.writeln('Prepare the command arguments');
                        var args = [
                            '-jar',
                            'html-validator-1.1-jar-with-dependencies.jar'
                        ];

                        if (options.verbose) {
                            args.push('--verbose');
                        }

                        if (options.subdirectories) {
                            args.push('--subdirectories');
                        }

                        args.push('--encoding');
                        args.push(options.encoding);

                        args.push('--extensions');
                        args = args.concat(options.extensions);

                        args.push('--output');
                        args.push(options.output);

                        args.push('--directories');
                        args = args.concat(options.directories);

                        grunt.log.writeln('We can launch the command with the arguments:');
                        grunt.log.writeln(JSON.stringify(args, null, '\t'));
                        grunt.util.spawn(
                            {
                                'cmd': 'java',
                                'args': args
                            },
                            function (error) {
                                if (error) {
                                    grunt.fail.fatal('An error occured: ‎' + error);
                                    done(1);

                                } else {
                                    grunt.log.writeln('The report was generated.');
                                    done();
                                }
                            }
                        );
                    }
                }
            }
        );
    });

};

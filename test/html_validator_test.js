'use strict';

var grunt = require('grunt');

exports.html_validator = {
    'setUp': function (done) {
        // setup here if necessary
        done();
    },

    'simple': function (test) {
        test.expect(1);
        test.equal('a', 'a', 'simple test');
        test.done();
    },

    'grunt': function (test) {
        // Check if the grunt lib is loaded
        test.expect(1);
        test.ok(!!grunt, 'Grunt is loaded');
        test.done();
    },

    'java': function (test) {
        // Check if java is installed
        test.expect(1);

        grunt.util.spawn(
            {
                'cmd': 'java',
                'args': ['-version']
            },
            function (error) {
                test.ok(error === null || error === undefined, 'Java is not installed. Please see http://java.com/getjava');
                test.done();
            }
        );
    }
};

'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },
        scsslint: {
            allFiles: [
                'src/**/*.scss'
            ],
            options: {
                bundleExec: false,
                config: '.scss-lint.yml'
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/reports/results.txt',
                    require: 'babel-register'
                },
                src: ['test/**/*.test.js']
            }
        }
    });
    grunt.registerTask('test', ['eslint', 'scsslint', 'mochaTest']);
};

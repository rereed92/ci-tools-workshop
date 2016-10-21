'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

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
        sasslint: {
            allFiles: [
                'src/**/*.scss'
            ],
            options: {
                bundleExec: false,
                config: '.sass-lint.yml'
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
        },
        mocha_istanbul: {
            coverage: {
                src: 'test/**/*.test.js',
                options: {
                    coverageFolder: 'test/coverage',
                    require: ['babel-register']
                }
            }
        }
    });

    grunt.registerTask('test', ['eslint', 'sasslint', 'mochaTest', 'mocha_istanbul']);
};

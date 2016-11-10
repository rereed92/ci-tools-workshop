'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-php');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/index.js',
                'src/utils.js'
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
        },
        browserify: {
            development: {
                src: ['src/utils.js'],
                dest: 'src/app.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [['babelify', { 'presets': ['es2015'] }]]
                }
            }
        },
        php: {
            dist: {
                options: {
                    hostname: '127.0.0.1',
                    port: 9000,
                    base: 'public',
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('test', ['eslint', 'sasslint', 'mocha_istanbul', 'browserify']);
    grunt.registerTask('serve', ['php:dist']);
};

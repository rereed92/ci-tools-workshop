'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-scss-lint');

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
        }
    });
    grunt.registerTask('test', ['eslint', 'scsslint']);
};

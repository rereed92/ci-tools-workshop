'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');

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
        }
    });
    grunt.registerTask('test', ['eslint']);
};

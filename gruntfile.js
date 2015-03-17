/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        browserify: {
            js: {
                src: ['app.js','templates/*.hbs'],
                dest: 'bundle.js'
            },
            options: {
                transform: ['hbsfy']
            }
        },
        uglify:{
            dist: {
                files: {
                    'bundle.js': ['bundle.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserify', 'uglify']);
};
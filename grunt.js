module.exports = function(grunt) {
    grunt.registerTask('default', 'coffee');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffeelint');

    grunt.loadNpmTasks('grunt-jasmine-node');

    // grunt.registerTask('default', 'jasmine_node');
    grunt.initConfig({
        coffee: {
            compile: {
                files: {
                    'lib/*.js': ['lib/*.coffee'],
                    'spec/*.js': ['spec/*.coffee']
                }
            }
        },

        watch: {
            files: ['lib/*.coffee', 'spec/*.coffee'],
            tasks: 'coffee'
        },

        clean: ['lib/*.js', 'spec/*.js'],

        coffeelint: {
            app: ['lib/*.coffee', 'spec/*.coffee']
        },

        jasmine_node: {
            spec: "./spec",
            projectRoot: ".",
            requirejs: false,
            forceExit: true
        }
    });
};
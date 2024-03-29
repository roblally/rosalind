module.exports = function(grunt) {
    grunt.registerTask('default', 'coffee');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffeelint');

    grunt.loadNpmTasks('grunt-mocha-test');

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
            compile: {
                files: ['lib/*.coffee', 'spec/*.coffee'],
                tasks: 'coffee'
            },
            specs: {
                files: ['lib/*.js', 'spec/*.js'],
                tasks: 'mochaTest'
            }
        },

        clean: ['lib/*.js', 'spec/*.js'],

        coffeelint: {
            app: ['lib/*.coffee', 'spec/*.coffee']
        },
        mochaTest: {
            files: ['spec/*.spec.js']
        },
        mochaTestConfig: {
            options: {
                reporter: 'spec'
            }
        }
    });
};
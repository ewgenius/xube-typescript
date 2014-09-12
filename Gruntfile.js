module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build/xube.js',
                options: {
                    module: 'amd'
                }
            },
            test: {
                src: ['examples/test/src/**/*.ts'],
                dest: 'examples/test/js/game.js',
                options: {
                    module: 'amd'
                }
            }
        },

        watch: {
            scripts: {
                files: 'src/**/*.ts',
                tasks: ['typescript']
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var target = grunt.option('target') || 'base';

    grunt.registerTask('default', ['typescript:' + target]);

    grunt.registerTask('testing', ['typescript:base', 'typescript:test']);

};

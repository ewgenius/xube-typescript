module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'js/game.js',
                options: {
                    module: 'amd'
                }
            },
            xube: {
                src: ['src/xube/**/*.ts'],
                dest: 'js/xube.js',
                options: {
                    module: 'amd'
                }
            },
            dudetest: {
                src: ['src/dudetest/**/*.ts'],
                dest: 'js/dudetest.js',
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

    grunt.registerTask('testing', ['typescript:xube', 'typescript:dudetest']);

};

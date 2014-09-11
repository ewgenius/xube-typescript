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

    grunt.registerTask('default', ['typescript']);

};

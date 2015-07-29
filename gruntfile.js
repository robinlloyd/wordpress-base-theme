module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // =====================================================
        // watch our project for changes
        // =====================================================
        watch: {
            compass: {
                files: [
                    'assets/scss/**/*.scss'
                ],
                tasks: ['compass']
            },
            js: {
                files: [
                    'assets/javascripts/**.*.js'
                ],
                tasks: ['jshint']
            },
            options: {
              livereload: true
            },
            others: {
                files: [
                    '*.html',
                    '*.php',
                    'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['watch']
            }
        },

        // =====================================================
        // style (Sass) compilation via Compass
        // =====================================================
        compass: {
            dist: {
                options: {
                    sassDir: 'assets/scss',
                    cssDir: 'assets/css',
                    noLineComments: true
                }
            }
        },

        // =====================================================
        // let us know if our JS is sound
        // =====================================================
        jshint: {
            options: {
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "eqnull": true,
                "es5": false,
                "esnext": true,
                "immed": true,
                "jquery": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "alert": true
                }
            },
            all: [
                'Gruntfile.js',
                'assets/javascripts/**/*.js'
            ]
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'jshint',
        'compass',
        'watch'
    ]);

};

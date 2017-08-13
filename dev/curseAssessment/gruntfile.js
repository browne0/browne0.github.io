module.exports = function(grunt) {

	// Project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['js/*.js', '!gruntfile.js'],
			options: {
				"curly" : true,
				'eqnull': true,
				'eqeqeq': true,
				'undef': false,
				'globals': {
					'jQuery': true
				}
			}
		},
		// compile multiple sass modules into one style.css file
		sass: {
			dist: {
				options: {
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: 'sass',
					src: ['**/*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		// add missing vendor prefixes and minify css
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				]
			},
			dist: {
				src: 'css/style.css'
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			build: {
				src: ['js/*.js'],
				dest: 'js/script.min.js'
			}
		},
		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				}
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'postcss', 'cssmin'],
				options: {
					livereload: true,
				}
			},
			html: {
				files: ['index.html'],
				options: {
					livereload: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default tasks
	grunt.registerTask('default', ['watch']);
}
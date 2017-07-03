module.exports = function(grunt){

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
        		dest: 'build/<%= pkg.name %>.min.js'
			}
		},

		//Sass CSS precompiler
		sass: {
			dist: {
				files: {
					'main.css': 'main.scss'
				}
			}
		}

	});

	// Load the plugins that provide the various task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);
};
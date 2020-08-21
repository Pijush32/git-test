'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

   grunt.initconfig({
   	sass: {
   		dist: {
   			files: {
   				'css/styles.css': 'css/styles.scss'
   			}
   		}
   	},
   	watch: {
   		files: 'css/*.scss',
   		tasks: ['sass']
   	},
   	browsersync: {
   		dev: {
   			bsFiles: {
   				src: [
                     'css/*.css',
                     '*.html',
                     'js/*.js'

   				]

   			},
   			options: {
   				watchTask: true,
   				server: {
   					basedir: './'
   				}
   			}

         }

   	}

});

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browsersync', 'watch']);
};

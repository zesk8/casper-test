'use strict';
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-casper');

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000
				}
			}
		},
		casper: {
			acceptance : {
				options : {
					test : true
				},
				src : ['test/casper.js']
			}
		}
	});

	grunt.registerTask('server', [ 'connect' ]);
	grunt.registerTask('test',['connect','casper']);
	grunt.registerTask('default', ['jshint', 'test']);

};

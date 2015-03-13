'use strict';
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-casper');

	grunt.initConfig({
		express: {
			options: {
				port: 8000
			},
			dev: {
				options: {
					script: 'server.js'
				}
			},
			prod: {
				options: {
					script: 'server.js',
					node_env: 'production'
				}
			},
			test: {
				options: {
					script: 'server.js'
				}
			}
		},
		casper: {
			acceptance : {
				options : {
					test : true,
				},
				files : {
					'app/example.html' : ['test/casper.js']
				}
			}
		}
	});

	grunt.registerTask('server', [ 'express:dev' ]);
	grunt.registerTask('test',['express:dev','casper']);
	grunt.registerTask('default', ['jshint', 'test']);

};

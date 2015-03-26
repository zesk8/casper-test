// Set viewport
casper.options.viewportSize = {width: 300, height: 60};

casper.test.begin('Show HTTP image', 1, function(test){
	casper.start();
	casper.setHttpAuth('httpwatch', 'demoaccount');

	casper.thenOpen('http://www.httpwatch.com/httpgallery/authentication/authenticatedimage/default.aspx?0.47394057270139456', function(){
		test.assertHttpStatus(200, 'Login accepted');
		this.capture('img/auth.png');
	});

	casper.run(function(){
		test.done();
	});
});

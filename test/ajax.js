// Set useragent
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

casper.test.begin('Search a city', 1, function (test){
	casper.start('http://localhost:8000/app/example.html', function(){
		this.sendKeys('input#searchedlocation', 'barcelona');
		this.click('button#search');
	});

	casper.waitForSelector('div.success', function () {
		test.assertTextExists('Barcelona (Catalonia)', 'Barcelona (Catalonia) has been found');
	});

	casper.run(function () {
		test.done();
	});
});

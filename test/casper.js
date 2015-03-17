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

casper.test.begin('Test recover password', function (test) {
	casper.start('http://fiestainn.vincoorbisdev.com/recover.html', function (){
		this.sendKeys('input.c-gray','example@example.com');
		this.click('button.form-send');
	});

	casper.wait(3000, function () {
		test.assertVisible('.recovery-success', 'Send Message');
	});

	casper.run(function () {
		test.done();
	});
});

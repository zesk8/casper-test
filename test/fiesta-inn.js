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
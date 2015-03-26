// Require mouse module
var mouse = require("mouse").create(casper);
// Set viewport
casper.options.viewportSize = {width: 1280, height: 800};

casper.test.begin('Test modal', function (test) {
	casper.start('http://aeromexico.com/es/mx/', function (){
		this.mouse.click('form#flight input.b-orange');
	});

	casper.waitForSelector('#m-serv', function () {
		this.echo('see the modal!');
    this.capture('img/modal.png');
	});

	casper.run(function () {
		test.done();
	});
});

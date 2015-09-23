exports.config = {

	onPrepare: function() {

	   var SpecReporter = require('jasmine-spec-reporter');

	   var JReporter = require('jasmine-reporters');

	   // add jasmine spec reporter
	   jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

	   var now = new Date();
	   var dte = now.toString().split(' ');
	   var dteStr = [].concat(dte[3],("0"+now.getMonth()).slice(-2),dte[2],dte[4].replace(/\:/g,'-')).join('-');
	   

       jasmine.getEnv().addReporter(new JReporter.JUnitXmlReporter({savePath:'results', filePrefix: dteStr, consolidateAll:true}));

	},
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['sk-spec.js'],
	framework: 'jasmine2'
};
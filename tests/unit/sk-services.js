"use strict";

// I tried testing the service itself using "done" but it didn't work
// I think that this had more to do with the fact that I have to use "songkick.com" as a host in order to get CORS to work.

describe("SERVICE - Ensure Single Artist works as expected", function () {
	
	var skService;

	beforeEach(module("skApp"));

	beforeEach(inject(function (_artistsFact_) {

		skService = _artistsFact_;

	}));

	describe('Tests that Methods are present', function() {

	  it('Returns true if "artistGet" is defined.', function() {

	  	expect(skService.artistGet).toBeDefined();

	  });

	  it('Returns true if "artistSearch" is defined.', function() {

	  	expect(skService.artistSearch).toBeDefined();

	  });

	});

});

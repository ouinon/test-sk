// RELEVANT ELEMENTS
var getSelectors = function(){

  by.addLocator('tde',function(hook){

    var selector = '[data-tdd=\'' + hook + '\']';

    return  document.querySelectorAll(selector);

  });

  return {
    form: by.tde("asf-form"),
    input: by.tde("asf-input"),
    submit: by.tde("asf-submit"),
    res: by.tde("asf-res"),
    res_0: by.tde("asf-res-0"),
    msg_begin: by.tde("asf-msg-begin"),
    msg_0: by.tde("asf-msg-0")
  };
};

var run = function(){

  // describe('SERVICE - Returns Single Artist',function(){});

  // describe('Protractor Demo App', function() {
  //   it('should have a title', function() {

  //     browser.get('http://songkick.com/#/artists/kings');

  //     expect(browser.getTitle()).toEqual('Super Calculator');

  //   });
  // });

  var obz = getSelectors();

  describe('SEARCH-IN-URL - Should return expected elements', function() {

    var search = 'kings';


    it('"' + search + '" Should return results', function() {
      
      browser.get('http://songkick.com/#/artists/' + search);

      expect(element.all(obz.res).first().getText()).toMatch(new RegExp(search,'i'));

      expect(element.all(obz.res).count()).toBeGreaterThan(0);

    });

    it('"' + search + '" Should a result with matching text', function() {

      browser.get('http://songkick.com/#/artists/' + search);

      expect(element.all(obz.res).first().getText()).toMatch(new RegExp(search,'i'));

    });


  });

  // describe('SEARCH-IN-URL - Populates elements',function(){

  //   browser.get('http://songkick.com/#/artists/kings');

  //   // var sels = getSelectors();

  //   console.log(element(by.tde("asf-form")));

  //   expect(browser.getTitle()).toEqual('Super Calculator');
  //   // expect('true').toBe(true);
  //   // expect(element.all(by.tde("asf-form").isPresent())).toBe(true);

  // });

  // describe('SEARCH - Won\'t Run Empty',function(){


  // });
  // describe('SEARCH - Populates elements',function(){


  // });

  // describe('SEARCH - Provides Error when Empty',function(){


  // });

  // describe('ARTIST - Provides Error when Empty',function(){


  // });

};

// --------------------


var appName = 'skApp';

run();
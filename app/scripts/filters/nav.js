angular.module("skApp").filter("nav",['$window',function($window) {
	// body...

	var pre = '#';

	var urlObj = {

		'search' : function(search){

			search = search || '';

			return pre + '/artists/' + search;

		},

		'artist' : function(artist){

			var url = pre + '/artist/';

			if(artist.identifier && artist.identifier[0] !== undefined){

				url = url + artist.identifier[0].mbid;

			}

			return url;

		},

		'ex_artist' :function(artist) {

			return artist.uri;

		}
	};

	return function(input,scope){
		

		var toPassArr = Array.prototype.slice.call(arguments,1,arguments.length);

		if(urlObj[input]){

			var result = urlObj[input].apply(urlObj[input],toPassArr);

			return result;

		}

		return 'URL_NOT_FOUND';
	};


}]);
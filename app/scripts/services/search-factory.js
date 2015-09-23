angular.module('skApp')
.factory('artistsFact',['$filter','$resource','$cacheFactory','apiKey',function($filter,$resource,$cacheFactory,key){
	
	'use strict';

	var $artistCache = $cacheFactory('artists');

	// http://api.songkick.com/api/3.0/search/artists.json?query=happy&apikey=jhevSy2yQF6HFzmb
	var artists = $resource('http://api.songkick.com/api/3.0/search/artists.json',{apikey:key},{'get':{cache:$artistCache}});
	
	var single_artist = $resource('http://api.songkick.com/api/3.0/artists/mbid\::mbid.json',{apikey:key});
	// var artists = $resource('sk/artists.json');

	return {
		'artistSearch': artists,
		'artistGet': single_artist,
		'artistCache': $artistCache
	};

}]);
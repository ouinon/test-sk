'use strict';

angular.module('skApp')
.controller('ArtistCtrl',['$scope','$location','$routeParams','artistsFact',function ($scope, $location, params, artist) {

    // $scope.namesFilter = namesFilter;

    $scope.search = {};
    
	$scope.artist = artist.artistGet.get({'mbid':params.mbid},function(result){

		// displayName

	    $scope.artist = result.resultsPage.results.artist;
		
	});

    // contacts.


    var init = (function(){

        // $scope.contacts = contacts.getConcactAll();

    })();

}]);
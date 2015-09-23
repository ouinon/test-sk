'use strict';

angular.module('skApp')
.controller('SearchCtrl',['$scope','$location','$routeParams','artistsFact',function ($scope, $location, $routeParams, searchFact) {

    $scope.artistInput = 'happy';

    $scope.newContact = false;
    // query=happy&apikey=jhevSy2yQF6HFzmb

    $scope.getResults = function(search){
        
        search = search.toLowerCase();

        searchFact.artistSearch.get({query:search},function(result) {

            if($scope.search !== search){

                $location.url('artists/' + search);

                $scope.search = search;

            }

            $scope.artists = result.resultsPage.results.artist;

        });

    };


    var init = (function(){

        $scope.artistInput = $scope.search = $routeParams.search;

        if($scope.search){

            $scope.getResults($scope.search);

        }
        

    })();

}]);
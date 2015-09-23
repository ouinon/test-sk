'use strict';

/**
 * @ngdoc overview
 * @name affixalllApp
 * @description
 * # affixalllApp
 *
 * Main module of the application.
 */
angular
  .module('skApp', [
    'ngAnimate',
    'ngRoute',
    'ngResource'
  ])
  .config(['$routeProvider',function ($routeProvider) {

    $routeProvider
      .when('/artists/:search?', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/artist/:mbid', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .otherwise({
        redirectTo: '/artists'
      });

  }]).value({'apiKey':'jhevSy2yQF6HFzmb'});
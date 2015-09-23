angular.module('skApp').directive('utBackButton', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {

            	console.log('back button click');

                $window.history.back();
            });
        }
    };
}]);
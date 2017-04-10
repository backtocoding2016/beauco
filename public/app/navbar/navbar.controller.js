(function () {

	'use strict';
	var app;

	app = angular.module('imbeau');
	app.controller('navbarCtrl', ['$scope', '$state', function navbarCtrl($scope, $state){

		console.log("navbarCtrl activated");

		$scope.changePage = function (pageIndex) {
			switch (pageIndex) {
				case 0:
					$state.go('home');
					break;
				case 1:
					$state.go('products');
					break;
				case 2:
					$state.go('add');
					break;
				case 3:
					$state.go('skiniq');
					break;
				case 4:
					$state.go('search');
					break;
			}
		}

	}]);
}());
var app = angular.module('MyFirstModule', []);

app.controller('FirstCtrl', ['$scope', function ($scope) {
	$scope.nombre ="Hector";
}])
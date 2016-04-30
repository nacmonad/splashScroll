var myApp = angular.module('splashPage',['ui.bootstrap']);

myApp.controller("MainCtrl", function ($scope) {
	console.log("MainCtrl loaded");
	$scope.msg = "hello world";
	$scope.bang = function () {
		alert($scope.msg);
	}
})
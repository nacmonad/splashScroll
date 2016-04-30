var myApp = angular.module('splashPage',['ui.bootstrap','ui.router']);

myApp.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('main', {
				url: '/main', 
				templateUrl: '/public/templates/main.html', 
				controller: 'MainCtrl'
			})
			.state('one', {
				url: '/one', 
				templateUrl: '/public/templates/one.html' 
			
			}).state('two', {
				url: '/two', 
				templateUrl: '/public/templates/two.html' 
			
			})
			.state('three', {
				url: '/three', 
				templateUrl: '/public/templates/three.html'  
			
			});
	}]);

myApp.controller("MainCtrl", function ($scope) {
	console.log("MainCtrl loaded");
	$scope.msg = "hello world";
	$scope.bang = function () {
		alert($scope.msg);
		}
	})
	.controller('NavCtrl', function ($scope) {
		console.log("NavCtrl loaded");

		$scope.sections = ['Main','One','Two','Three'];
		$scope.searchKey ='';

		$scope.search = function (key) {
			key ? alert("search key " + key) : alert("please enter a search term");
		}
		$scope.activeTab = function (index) {
			console.log("tab" + index);
		}
	})
	.controller('FtrCtrl', function ($scope) {
		console.log("FtrCtrl loaded");
		
	});
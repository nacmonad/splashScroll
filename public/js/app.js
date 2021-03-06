var myApp = angular.module('splashPage',['ui.bootstrap','ui.router','ngAnimate','myDirectives']);

myApp.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('main', {
				url: '/', 
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

myApp.controller("MainCtrl", function ($rootScope, $scope, $document,$window) {
	console.log("MainCtrl loaded");



	})
	.controller('NavCtrl', function ($scope,$timeout) {
		$scope.sections = ['Main','One','Two','Three'];
		$scope.searchKey ='';
		$scope.searchToggle = false;

		$scope.$on('scroll-event', function (event,args) {
			(args.scrollY > 100) ? ($scope.sticky=1, $scope.$apply()) : ($scope.sticky=0,$scope.$apply());
		});

		$scope.search = function (key) {
			key ? alert("search key " + key) : alert("please enter a search term");
		}
		
		$scope.toggleSearchBar =function () {
			$scope.searchToggle ? $scope.searchToggle=false : $scope.searchToggle=true;
		}


	})
	.controller('FtrCtrl', function ($scope) {
		console.log("FtrCtrl loaded");
		
	});
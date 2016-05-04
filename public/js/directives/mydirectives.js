// myScrollable
// consists of the <my-splash-scroll> element, and the <div id="foo" my-scrollable> attr
// scroll elements must have a unique id in addition to being given the my-scrollable attr!!!
// Dependencies: jquery, jquery, bootstrap, smooth scroll, angular
// Instructions: add attribute my-scrollable to your rows.  angular looks up the rows by id
// and so you must also have your rows uniquely identified.  


var myDirectives = angular.module('myDirectives', [])
myDirectives
.directive('mySplashScroll', function() {
	return {
		restrict: 'E',
		scope: '&',
		templateUrl: '/public/js/directives/myScrollable.html',
		controller: ['$rootScope','$scope','$document','$window', function ($rootScope, $scope, $document, $window) {
			
			$scope.rowElems = angular.element($("[my-scrollable]"));  //don't  change the name of the myScrollable directive :)
			$scope.rows = [];

			// these three lines are weak, is there a better way to do this?
			for(var i = 0; i < $scope.rowElems.length;i++) {
				$scope.rows.push($scope.rowElems[i].id);
			}

			$scope.activeRow = $scope.rowElems[0].id;

			$scope.$on('row-active', function (event, args) {
					$scope.activeRow = args.row_id;
				});


			//$window.scrollY doesn't exist for IE, use pageYOffset
			angular.element($window).bind("scroll", function() {
				$rootScope.$broadcast('scroll-event', { scrollY:$window.pageYOffset });
			});
		}],
		link: function(scope,element,attrs) {
				scope.up = function () {
				if ( (scope.rows.indexOf(scope.activeRow)-1) < 0 ) { 
					//console.log ("I canna go up!"); 
					scope.scrollToTop();
				}
				else { 
						//console.log("going to index " + parseInt(scope.rows.indexOf(scope.activeRow)-1) );
						scope.scrollTo(scope.rows[(scope.rows.indexOf(scope.activeRow)-1)]);
					}
			};
			scope.down = function () {
				if ((scope.rows.indexOf(scope.activeRow)+1) > scope.rows.length-1 ) { console.log ("I canna go down any further!");}
				else 
					{
				 		//console.log("going to index " + parseInt(scope.rows.indexOf(scope.activeRow)+1));
				 		scope.scrollTo(scope.rows[(scope.rows.indexOf(scope.activeRow)+1)]);
					}
			};
			scope.scrollTo = function (scrollLocation) {
		        $.smoothScroll({
		          scrollTarget: '#' + scrollLocation,   
		          offset: 1	
		        });
			};
			scope.scrollToTop = function () {
				$.smoothScroll({
					scrollTarget: $('html, body').firstScrollable()
				});
			};
		}
	}
})

.directive('myScrollable', function($window) {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope,element,attrs) {
			scope.top = element[0].getBoundingClientRect().top;  
			scope.bottom = element[0].getBoundingClientRect().bottom;  

			scope.$on('scroll-event', function (event, args) {
				if( args.scrollY < (scope.bottom ) && args.scrollY > scope.top ) {
					scope.$emit('row-active', { row_id : element[0].id});
				}				
 			});
		}
	}
});
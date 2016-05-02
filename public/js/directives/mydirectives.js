var myDirectives = angular.module('myDirectives', [])
myDirectives
.directive('mySplashScroll', function() {
	return {
		restrict: 'E',
		templateUrl: '/public/js/directives/myScrollable.html',
		link: function(scope,element,attrs) {
				scope.up = function () {

				if ( (scope.rows.indexOf(scope.activeRow)-1) < 0 ) { 
					//console.log ("I canna go up!"); 
					scope.scrollToTop();
				}
				else { 
						console.log("going to index " + parseInt(scope.rows.indexOf(scope.activeRow)-1) );
						scope.scrollTo("row" + parseInt(scope.rows.indexOf(scope.activeRow)-1));
					}
			};
			scope.down = function () {

				if ((scope.rows.indexOf(scope.activeRow)+1) > scope.rows.length-1 ) { console.log ("I canna go down any further!");}
				else 
					{
				 		console.log("going to index " + parseInt(scope.rows.indexOf(scope.activeRow)+1));
				 		scope.scrollTo("row" + parseInt(scope.rows.indexOf(scope.activeRow)+1));
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
			scope.bottom =element[0].getBoundingClientRect().bottom;  

			scope.$on('scroll-event', function (event, args) {
				if( args.scrollY < (scope.bottom ) && args.scrollY > scope.top ) {
					scope.$emit('row-active', { row_id : element[0].id});
				}				
 			});
		}
	}
});
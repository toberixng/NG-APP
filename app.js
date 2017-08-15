(function(){

angular.module('MyNewApp', [])

.controller('AppController', ['$scope', '$filter', function($scope, $filter){

$scope.name = "";

		$scope.myFilter = function(){
		var upCase = $filter('uppercase');
		$scope.name = upCase($scope.name);
	};
}]);

// function AppController($scope, $filter){
// 	$scope.name = "";

// 	$scope.myFilter = function(){
// 		var upCase = $filter('uppercase');
// 		$scope.name = upCase($scope.name);
// 	};
// }

})();
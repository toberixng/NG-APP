(function(){

angular.module('MyNewApp', [])

.controller('AppController', AppController)

function AppController($scope, $filter){
	$scope.name = "";

	$scope.myFilter = function(){
		var upCase = $filter('uppercase');
		$scope.name = upCase($scope.name);
	};
}


})();
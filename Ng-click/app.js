(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.feedYaakov = function (){
  	$scope.stateOfBeing = "fed";
  }
  $scope.feedYaakov2 = function (){
  	$scope.stateOfBeing = "hungry";
  }
}

})();

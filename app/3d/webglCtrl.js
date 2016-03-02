(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("WebglCtrl", WebglCtrl);

  WebglCtrl.$inject = ["$scope"];

  function WebglCtrl($scope) {

    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = true;
    $scope.scale = 1;
    $scope.materialType = 'lambert';

  }
}());

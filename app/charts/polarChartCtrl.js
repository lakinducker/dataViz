(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("PolarChartCtrl", PolarChartCtrl);

  PolarChartCtrl.$inject = ["$scope"];

  function PolarChartCtrl($scope) {
    $scope.labels =["Processing", "Searching", "Exporting"];

    $scope.data = [300, 500, 100];

  }
}());

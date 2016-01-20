(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("DonutChartCtrl", DonutChartCtrl);

  DonutChartCtrl.$inject = ["$scope"];

  function DonutChartCtrl($scope) {
    $scope.labels =["Processing", "Searching", "Exporting"];

    $scope.data = [300, 500, 100];

  }
}());

(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RadarChartCtrl", RadarChartCtrl);

  RadarChartCtrl.$inject = ["$scope"];

  function RadarChartCtrl($scope) {

    $scope.labels =["Processing", "Searching", "Exporting", "On Hold", "Archiving", "In Error"];

    $scope.data = [
      [65, 59, 90, 33, 99, 26],
      [28, 48, 40, 48, 59, 37]
    ];

  }
}());

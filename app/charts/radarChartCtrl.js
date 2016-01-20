(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RadarChartCtrl", RadarChartCtrl);

  RadarChartCtrl.$inject = ["$scope"];

  function RadarChartCtrl($scope) {
<<<<<<< HEAD
    $scope.labels =["Processing", "Searching", "Exporting", "On Hold", "Archiving", "In Error"];
=======
    $scope.labels =["Processing", "Searching", "Exporting", "Stalling", "Archiving", "Exploding"];
>>>>>>> e8175dbdbb39b75266fa02934b3587fee93955fe

    $scope.data = [
      [65, 59, 90, 33, 99, 26],
      [28, 48, 40, 48, 59, 37]
    ];

  }
}());

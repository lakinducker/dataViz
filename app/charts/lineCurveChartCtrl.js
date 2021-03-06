(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("LineCurveChartCtrl", LineCurveChartCtrl);

  LineCurveChartCtrl.$inject = ["$scope"];

  function LineCurveChartCtrl($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['ERV, Inc.', 'Bower & Smith'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

  }
}());

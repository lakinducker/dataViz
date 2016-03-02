(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("GaugeChartCtrl", GaugeChartCtrl);

  GaugeChartCtrl.$inject = ["$scope", '$interval'];

  function GaugeChartCtrl($scope, $interval) {

    $scope.chartObject = {};
    $scope.chartObject.type = "Gauge";

    $scope.chartObject.options = {
      width: 400,
      height: 120,
      max: 50
    };

    $scope.chartObject.data = [
      ['Label', 'Value'],
      ['Return', 15],
      ['Volatility', 20]
    ];

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $interval(function() {
      $scope.chartObject.data = [
        ['Label', 'Value'],
        ['Return', getRandomInt(0, 20)],
        ['Volatility', getRandomInt(0, 30)]
      ];
      //console.log(JSON.stringify($scope.chartObject.data));
    }, 1000);

  }
}());

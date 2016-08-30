(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("ObjectiveMasteryChartCtrl", ObjectiveMasteryChartCtrl);

  ObjectiveMasteryChartCtrl.$inject = ["$scope"];

  function ObjectiveMasteryChartCtrl($scope) {

    $scope.data = [
      {
        "rows":1,
        "Not Mastered":25,
        "Mastered":43
      },
      {
        "rows":2,
        "Not Mastered":48,
        "Mastered":16
      },
      {
        "rows":3,
        "Not Mastered":36,
        "Mastered":38
      },
      {
        "rows":4,
        "Not Mastered":38,
        "Mastered":41
      },
      {
        "rows":5,
        "Not Mastered":8,
        "Mastered":15
      },
      {
        "rows":6,
        "Not Mastered":36,
        "Mastered":2
      },
      {
        "rows":7,
        "Not Mastered":38,
        "Mastered":14
      },
      {
        "rows":8,
        "Not Mastered":29,
        "Mastered":29
      },
      {
        "rows":9,
        "Not Mastered":45,
        "Mastered":28
      },
      {
        "rows":10,
        "Not Mastered":6,
        "Mastered":32
      },
      {
        "rows":11,
        "Not Mastered":22,
        "Mastered":11
      },
      {
        "rows":12,
        "Not Mastered":23,
        "Mastered":2
      },
      {
        "rows":13,
        "Not Mastered":24,
        "Mastered":38
      },
      {
        "rows":14,
        "Not Mastered":23,
        "Mastered":2
      },
      {
        "rows":15,
        "Not Mastered":29,
        "Mastered":49
      }
    ];

  }
}());

(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RawFileChartCtrl", RawFileChartCtrl);

  RawFileChartCtrl.$inject = ["$scope"];

  function RawFileChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        transitionDuration: 500,
        labelThreshold: 0.01,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $scope.data = [
      {
        key: ".doc",
        y: getRandomInt(1, 100)
      },
      {
        key: ".dat",
        y: getRandomInt(1, 100)
      },
      {
        key: ".xls",
        y: getRandomInt(1, 100)
      },
      {
        key: ".pst",
        y: getRandomInt(1, 100)
      },
      {
        key: ".htm",
        y: getRandomInt(1, 100)
      },
      {
        key: ".txt",
        y: getRandomInt(1, 100)
      }
    ];

  }
}());

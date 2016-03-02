(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("PieChartCtrl", PieChartCtrl);

  PieChartCtrl.$inject = ["$scope"];

  function PieChartCtrl($scope) {
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
        key: "Jones, Joe",
        y: getRandomInt(1, 40)
      },
      {
        key: "Smith, Ronald",
        y: getRandomInt(1, 40)
      },
      {
        key: "Fitzpatrick, Alice",
        y: getRandomInt(1, 40)
      },
      {
        key: "Garcia, Juan",
        y: getRandomInt(1, 40)
      },
      {
        key: "Johnson, Janice",
        y: getRandomInt(1, 40)
      },
      {
        key: "Morello, Melani",
        y: getRandomInt(1, 40)
      },
      {
        key: "Sorenson, Stewart",
        y: getRandomInt(1, 40)
      }
    ];

    console.log(JSON.stringify($scope.data));

  }
}());

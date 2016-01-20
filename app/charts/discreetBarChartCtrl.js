(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("DiscreetBarChartCtrl", DiscreetBarChartCtrl);

  DiscreetBarChartCtrl.$inject = ["$scope"];

  function DiscreetBarChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'PostSearch Metrics',
          axisLabelDistance: 30
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
        key: "Cumulative Return",
        values: [
          {
            "label" : "HitsCount" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "HitsVolume" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "FamilyCount" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "FamilyVolume" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "UniqueHitsCount" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "UniqueHitsVolume" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "UniqueFamilyCount" ,
            "value" : getRandomInt(0, 300)
          } ,
          {
            "label" : "UniqueFamilyVolume" ,
            "value" : getRandomInt(0, 300)
          }
        ]
      }
    ]

  }
}());

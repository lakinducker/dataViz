(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RealtimeBarChartCtrl", RealtimeBarChartCtrl);

  RealtimeBarChartCtrl.$inject = ["$scope", '$interval'];

  function RealtimeBarChartCtrl($scope, $interval) {
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
          return d3.format(',')(d);
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
            "label" : "Processing" ,
            "value" : getRandomInt(0, 30)
          } ,
          {
            "label" : "Search" ,
            "value" : getRandomInt(0, 30)
          } ,
          {
            "label" : "Export" ,
            "value" : getRandomInt(0, 30)
          }
        ]
      }
    ];


    $interval(function() {

      for (var i = 0; i < $scope.data[0].values.length; i++) {
        var theValue = $scope.data[0].values[i].value;
        if (theValue > 0) {
          theValue = theValue + getRandomInt(-5, 5);
          if (theValue <= 0) {
            theValue = theValue * theValue;
          }
        } else {
          theValue = theValue + getRandomInt(0, 5);
        }
        $scope.data[0].values[i].value = theValue;
      }

    }, 2000);

  }
}());

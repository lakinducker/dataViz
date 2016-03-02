(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("HistogramChartCtrl", HistogramChartCtrl);

  HistogramChartCtrl.$inject = ["$scope"];

  function HistogramChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'historicalBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 50
        },
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.1f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'Batch Size in GB',
          tickFormat: function(d) {
            return d3.format("")(d)
          },
          rotateLabels: 0,
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 35,
          tickFormat: function(d){
            return d3.format(',1f')(d);
          }
        }
      }
    };

    $scope.data = [{
      "key": "Quantity",
      "bar": true,
      "values": generateData(30)
    }];

    console.log(JSON.stringify($scope.data));



    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Generate data
    function generateData(n) {
      var dataArray = [];
      for (var i = 0; i < n; i++) {
        var max = n;
        if (i < n/2) {
          max = i;
        } else {
          max = n - i;
        }
        var dataForNumberArray = [];
        dataForNumberArray.push(i);
        dataForNumberArray.push(getRandomInt(0, max));
        dataArray.push(dataForNumberArray);
      }
      return dataArray;
    }


  }
}());

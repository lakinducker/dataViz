(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("HistoricalBarChartCtrl", HistoricalBarChartCtrl);

  HistoricalBarChartCtrl.$inject = ["$scope"];

  function HistoricalBarChartCtrl($scope) {
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
          axisLabel: 'X Axis',
          tickFormat: function(d) {
            return d3.time.format('%x')(new Date(d))
          },
          rotateLabels: 50,
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 35,
          tickFormat: function(d){
            return d3.format(',.1f')(d);
          }
        }
      }
    };

    $scope.data = [{
      "key": "Quantity",
      "bar": true,
      "values": generateData(90)
    }];

    console.log(JSON.stringify($scope.data));



    // Returns a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Generate data
    function generateData(days) {
      var dataArray = [];
      for (var i = 0; i < days; i++) {
        var todayMinusDays = moment().subtract(days - i, 'day');

        var dataForDateArray = [];
        dataForDateArray.push(todayMinusDays);
        dataForDateArray.push(getRandomArbitrary(20, 50));
        dataArray.push(dataForDateArray);
      }
      return dataArray;
    }

  }
}());

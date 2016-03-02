(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("CumulativeChartCtrl", CumulativeChartCtrl);

  CumulativeChartCtrl.$inject = ["$scope"];

  function CumulativeChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'cumulativeLineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 65
        },
        x: function(d){ return d[0]; },
        y: function(d){ return d[1]/100; },
        average: function(d) { return d.mean/100; },

        color: d3.scale.category10().range(),
        transitionDuration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: '',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          },
          showMaxMin: false,
          staggerLabels: true
        },

        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function(d){
            return d3.format(',.1%')(d);
          },
          axisLabelDistance: 20
        }
      }
    };

    $scope.data = [
      {
        key: "Processing",
        values: generateData(90)
      },
      {
        key: "Search",
        values: generateData(90)
      },
      {
        key: "Export",
        values: generateData(90)
      }
    ];


    // Returns a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Generate data
    function generateData(days) {
      var dataArray = [];
      var changePercentage = 0;
      for (var i = 0; i < days; i++) {
        var todayMinusDays = moment().subtract(days - i, 'day');

        changePercentage += getRandomArbitrary(-5, 5);

        var dataForDateArray = [];
        dataForDateArray.push(todayMinusDays.unix() * 1000);
        dataForDateArray.push(changePercentage);
        dataArray.push(dataForDateArray);
      }
      return dataArray;
    }


  }
}());

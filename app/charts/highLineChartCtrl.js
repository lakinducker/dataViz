(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("HighLineChartCtrl", HighLineChartCtrl);

  HighLineChartCtrl.$inject = ["$scope", '$timeout'];

  function HighLineChartCtrl($scope, $timeout) {

    $scope.chartConfig = {
      options: {
        chart: {
          zoomType: 'x'
        },
        rangeSelector: {
          enabled: true
        },
        navigator: {
          enabled: true
        }
      },
      series: [],
      title: {
        text: 'Line Chart'
      },
      useHighStocks: true
    };

    // Returns a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    // Generate data
    function generateData(days) {
      var dataArray = [];
      var chartValue = getRandomArbitrary(15, 30);
      for (var i = 0; i < days; i++) {
        var todayMinusDays = moment().subtract(days - i, 'day');

        chartValue += getRandomArbitrary(-5, 5);
        if (chartValue <= 0) {
          chartValue = 0;
        }

        var dataForDateArray = [];
        dataForDateArray.push(todayMinusDays.unix() * 1000);
        dataForDateArray.push(chartValue);
        dataArray.push(dataForDateArray);
      }
      return dataArray;
    }

    $scope.chartConfig.series.push({
          id: 1,
          name: 'Processing',
          data: generateData(90)
        },  
        {
          id: 2,
          name: 'Search',
          data: generateData(90)
        },
        {
          id: 3,
          name: 'Export',
          data: generateData(90)
        }
    );

    console.log($scope.chartConfig.series);

  }
}());

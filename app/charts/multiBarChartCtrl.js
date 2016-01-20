(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("MultiBarChartCtrl", MultiBarChartCtrl);

  MultiBarChartCtrl.$inject = ["$scope"];

  function MultiBarChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 45
        },
        clipEdge: true,
        staggerLabels: true,
        transitionDuration: 500,
        stacked: true,
        xAxis: {
          axisLabel: '',
          showMaxMin: false,
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 40,
          tickFormat: function(d){
            return d3.format(',1f')(d);
          }
        }
      }
    };

    $scope.data = generateData();


    // Return a random integer
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateData() {

      var processingJobs = [];
      var searchJobs = [];
      var exportJobs = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 90; i++) {
        var todayMinusDays = moment().subtract(90 - i, 'day');
        processingJobs.push({x: todayMinusDays, y: getRandomInt(20, 33)});
        searchJobs.push({x: todayMinusDays, y: getRandomInt(12, 22)});
        exportJobs.push({x: todayMinusDays, y: getRandomInt(0, 16)});
      }

      return [{"key":"Processing","values": processingJobs},
              {"key":"Search","values": searchJobs},
              {"key":"Export","values": exportJobs }];

    }



    console.log($scope.data);

  }
}());

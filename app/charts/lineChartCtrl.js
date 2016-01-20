(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("LineChartCtrl", LineChartCtrl);

  LineChartCtrl.$inject = ["$scope"];

  function LineChartCtrl($scope) {

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function(e){ console.log("stateChange"); },
          changeState: function(e){ console.log("changeState"); },
          tooltipShow: function(e){ console.log("tooltipShow"); },
          tooltipHide: function(e){ console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: '',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          },
          showMaxMin: false,
          staggerLabels: true
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: 30
        },
        callback: function(chart){
          console.log("!!! lineChart callback !!!");
        }
      },
      title: {
        enable: true,
        text: 'Jobs'
      }
    };

    // Return a random integer
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }


    $scope.data = generateData();

    /*Random Data Generator */
    function generateData() {
      var processingJobs = [], searchJobs = [], exportJobs = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 90; i++) {
        var todayMinusDays = moment().subtract(90 - i, 'day');
        processingJobs.push({x: todayMinusDays, y: getRandomInt(20, 33)});
        searchJobs.push({x: todayMinusDays, y: getRandomInt(12, 22)});
        exportJobs.push({x: todayMinusDays, y: getRandomInt(0, 16)});
      }

      //Line chart data should be sent as an array of series objects.
      return [
        {
          values: processingJobs,      //values - represents the array of {x,y} data points
          key: 'Processing Jobs', //key  - the name of the series.
          color: '#ff7f0e'  //color - optional: choose your own line color.
        },
        {
          values: searchJobs,
          key: 'Search Jobs',
          color: '#2ca02c'
        },
        {
          values: exportJobs,
          key: 'Export Jobs',
          color: '#7777ff'
          //,
          //area: true      //area - set to true if you want this line to turn into a filled area chart.
        }
      ];
    }


  }
}());

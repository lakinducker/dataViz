(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("StackedAreaChartCtrl", StackedAreaChartCtrl);

  StackedAreaChartCtrl.$inject = ["$scope"];

  function StackedAreaChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'stackedAreaChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 40
        },
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        useVoronoi: false,
        clipEdge: true,
        transitionDuration: 500,
        useInteractiveGuideline: true,
        xAxis: {
          showMaxMin: false,
          tickFormat: function(d) {
            return d3.time.format('%x')(new Date(d))
          }
        },
        yAxis: {
          tickFormat: function(d){
            return d3.format(',.2f')(d);
          }
        }
      }
    };

    $scope.data = [
      {
        "key" : "Jones, Joe" ,
        "values" : generateData(90)
      },

      {
        "key" : "Smith, Ronald" ,
        "values" : generateData(90)
      },

      {
        "key" : "Fitzpatrick, Alice" ,
        "values" : generateData(90)
      },

      {
        "key" : "Garcia, Juan" ,
        "values" : generateData(90)
      } ,

      {
        "key" : "Johnson, Janice" ,
        "values" : generateData(90)
      } ,

      {
        "key" : "Morello, Melani" ,
        "values" : generateData(90)
      } ,

      {
        "key" : "Sorenson, Stewart" ,
        "values" : generateData(90)
      }
    ];



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
        dataForDateArray.push(todayMinusDays.unix() * 1000);
        dataForDateArray.push(getRandomArbitrary(20, 50));
        dataArray.push(dataForDateArray);
      }
      return dataArray;
    }


  }
}());

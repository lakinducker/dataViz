(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("LineFocusChartCtrl", LineFocusChartCtrl);

  LineFocusChartCtrl.$inject = ["$scope"];

  function LineFocusChartCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'lineWithFocusChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 40
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'Day',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          }
        },
        x2Axis: {
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function(d){
            return d3.format(',2f')(d);
          },
          rotateYLabel: false
        },
        y2Axis: {
          tickFormat: function(d){
            return d3.format(',2f')(d);
          }
        }

      }
    };



    // Return a random integer
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Generate an array of objects with x and y
    function generateArrayOfObjects(length, min, max) {
      console.log('generateArrayOfObjects called');
      console.log(length);
      var array = [];
      for (var i = 0; i < length; i++) {
        var obj = {};
        obj['x'] = moment().subtract(90 - i, 'day');
        obj['y'] = getRandomInt(min, max);
        array.push(obj);
      }
      return array;
    }

    //$scope.data = generateData();
    $scope.data = [
      {
        "key":"Completed",
        "values": generateArrayOfObjects(90, 0, 70)
      },
      {
        "key":"Failed",
        "values": generateArrayOfObjects(90, 0, 10)
      }
    ];

  }
}());

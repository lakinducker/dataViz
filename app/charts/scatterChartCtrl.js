(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("ScatterChartCtrl", ScatterChartCtrl);

  ScatterChartCtrl.$inject = ["$scope"];

  function ScatterChartCtrl($scope) {

    $scope.options = {
      chart: {
        type: 'scatterChart',
        height: 450,
        color: d3.scale.category10().range(),
        scatter: {
          onlyCircles: false
        },
        showDistX: true,
        showDistY: true,
        tooltipContent: function(key) {
          return '<h3>' + key + '</h3>';
        },
        duration: 350,
        xAxis: {
          axisLabel: 'X Axis',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -5
        },
        zoom: {
          //NOTE: All attributes below are optional
          enabled: false,
          scaleExtent: [1, 10],
          useFixedDomain: false,
          useNiceScale: false,
          horizontalOff: false,
          verticalOff: false,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    };

    $scope.data = generateData(4,40);

    /* Random Data Generator (took from nvd3.org) */
    function generateData(groups, points) {
      var data = [],
          shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
          random = d3.random.normal();

      for (var i = 0; i < groups; i++) {
        data.push({
          key: 'Group ' + i,
          values: []
        });

        for (var j = 0; j < points; j++) {
          data[i].values.push({
            x: random()
            , y: random()
            , size: Math.random()
            , shape: shapes[j % 6]
          });
        }
      }
      return data;
    }

    console.log(JSON.stringify($scope.data));

  }
}());

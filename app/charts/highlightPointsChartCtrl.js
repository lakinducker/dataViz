(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("HighlightPointsChartCtrl", HighlightPointsChartCtrl);

  HighlightPointsChartCtrl.$inject = ["$scope"];

  function HighlightPointsChartCtrl($scope) {

    var chart;

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 65
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        // useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (seconds)'
        },
        yAxis: {
          axisLabel: 'Usage',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: 5
        },
        callback: highlightPoints,
        dispatch: {
          renderEnd: function(){
            highlightPoints(chart)
          }
        }
      }
    };

    $scope.onReady = function(scope, el){
      chart = scope.chart;
    }

    function highlightPoints(chart){
      var data = d3.select('svg').datum();

      d3.select('.nv-groups')
        .selectAll("circle.myPoint")
        .remove();

      var points = d3.select('.nv-groups')
        .selectAll("circle.myPoint")
        .data(data[0].values.filter(function(d) { return d.y > 250; }));

      points.enter().append("circle")
        .attr("class", "myPoint")
        .attr("cx", function(d) { return chart.xAxis.scale()(d.x); })
        .attr("cy", function(d) { return chart.yAxis.scale()(d.y); })
        .attr("r", 5);
    }

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $scope.data = [{
      "values": [],
      "key": "System Usage",
      "color": null
    }];

    for (var i = 0; i < 300; i++) {
      var obj = {
        "x": i,
        "y": getRandomInt(0, 300)
      };
      $scope.data[0].values.push(obj);
    }


  }
}());

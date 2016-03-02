'use strict';

angular.module('dataViz')
    .directive('linearChart', function($parse, $window){
      return{
        restrict:'EA',
        template:"<svg width='850' height='400'></svg>",
        link: function(scope, elem, attrs) {
          var exp = $parse(attrs.chartData);

          var systemDataToPlot = exp(scope);
          var padding = 20;
          var pathClass = "path";
          var xScale, yScale, xAxisGen, yAxisGen, lineFun;

          var d3 = $window.d3;
          var rawSvg = elem.find('svg');
          var svg = d3.select(rawSvg[0]);

          scope.$watchCollection(exp, function(newVal, oldVal){
            systemDataToPlot = newVal;
            redrawLineChart();
          });

          function setChartParameters(){

            xScale = d3.scale.linear()
                .domain([systemDataToPlot[0].second, systemDataToPlot[systemDataToPlot.length-1].second])
                .range([padding + 5, rawSvg.attr("width") - padding]);

            yScale = d3.scale.linear()
              //.domain([0, d3.max(systemDataToPlot, function (d) {
              //  return d.system;
              //})])
                .domain([0, 105])
                .range([rawSvg.attr("height") - padding, 0]);

            xAxisGen = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .ticks(systemDataToPlot.length - 1);

            yAxisGen = d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .ticks(5);

            lineFun = d3.svg.line()
                .x(function (d) {
                  return xScale(d.second);
                })
                .y(function (d) {
                  return yScale(d.system);
                })
                .interpolate("basis");
          }

          function drawLineChart() {

            setChartParameters();

            svg.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0,380)")
                .call(xAxisGen);

            svg.append("svg:g")
                .attr("class", "y axis")
                .attr("transform", "translate(20,0)")
                .call(yAxisGen);

            svg.append("svg:path")
                .attr({
                  d: lineFun(systemDataToPlot),
                  "stroke": "blue",
                  "stroke-width": 3,
                  "fill": "none",
                  "class": pathClass
                });
          }

          function redrawLineChart() {

            setChartParameters();

            svg.selectAll("g.y.axis").call(yAxisGen);

            svg.selectAll("g.x.axis").call(xAxisGen);

            svg.selectAll("."+pathClass)
                .attr({
                  d: lineFun(systemDataToPlot)
                });
          }

          drawLineChart();
        }
      };
    });
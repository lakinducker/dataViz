'use strict';

angular.module('dataViz')
  .directive('performanceBreakdown', function () {
    return {
      template: '<div class="performance-breakdown-area"></div>',
      restrict: 'EA',
      //link: function (scope, element, attrs) {
      //}
      scope: {
        data: '='
      },
      controller: function($scope, $rootScope) {

        console.log('performanceBreakdown', $scope.data, $rootScope.students);

        var data = $scope.data;

        var width = 300,
          height = 300,
          radius = Math.min(width, height) / 2;

        var color = d3.scale.ordinal()
          .range(["#04BE5B", "#F5A623", "#D0021B"]);

        var arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(radius - 70);

        var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d.value; });

        var svg = d3.select(".performance-breakdown-area").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        var g = svg.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
          .attr("class", "arc")
          .on("click", function(d) {
            console.log('click on arc', d.data.key, d.data.value);
            $rootScope.students = [{
              "id": 30,
              "first_name": "Roy",
              "last_name": "Bowman",
              "performance": 57,
              "pace": 88
            }];
            console.log($rootScope.students);

          });

        g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data.key); });

        g.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .text(function(d) { return d.data.key; });

      }
    };
  });

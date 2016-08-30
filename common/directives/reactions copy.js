'use strict';

angular.module('moleculeDirective')
  .directive('reactions', function () {
    return {
      template: '<div class="reactions-area"></div>',
      restrict: 'EA',
      //link: function (scope, element, attrs) {
      //}
      // scope: {
      //   formula: '='
      // },
      controller: function($scope) {

        var graph = {
              "nodes": [
                {"atom": "C", "size": 12, "energy":4},
                {"atom": "N", "size": 14, "energy":3},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "O", "size": 16, "energy":2},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "H", "size": 1,  "energy":1},
                {"atom": "H", "size": 1,  "energy":1}
              ],
              "links": [
              ]
            };


        var width = 500,
          height = 400;

        var color = d3.scale.category10();

        var radius = d3.scale.sqrt()
          .range([0, 6]);

        var svg = d3.select(".reactions-area").append("svg")
          .attr("width", width)
          .attr("height", height);

       svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 20)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px") 
          .style("text-decoration", "underline")  
          .text("Reactions");   

        var force = d3.layout.force()
          .size([width, height])
          .charge(-400)
          .linkDistance(function(d) { return radius(d.source.size) + radius(d.target.size) + 20; });


        force
          .nodes(graph.nodes)
          .links(graph.links)
          .on("tick", tick)
          .start();

        var link = svg.selectAll(".link")
          .data(graph.links)
          .enter().append("g")
          .attr("class", "link");

        link.append("line")
          .style("stroke-width", function(d) { return (d.bond * 2 - 1) * 2 + "px"; });

        link.filter(function(d) { return d.bond > 1; }).append("line")
          .attr("class", "separator");

        var node = svg.selectAll(".node")
          .data(graph.nodes)
          .enter().append("g")
          .attr("class", "node")
          .call(force.drag);

        node.append("circle")
          .attr("r", function(d) { return radius(d.size); })
          .style("fill", function(d) { return color(d.atom); });

        node.append("text")
          .attr("dy", ".35em")
          .attr("text-anchor", "middle")
          .text(function(d) { return d.atom; });

        function tick() {
          link.selectAll("line")
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

          node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        }


      }
    };
  });

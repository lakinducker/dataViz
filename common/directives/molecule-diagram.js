'use strict';

angular.module('dataViz')
  .directive('moleculeDiagram', function () {
    return {
      template: '<div class="molecule-diagram-area"></div>',
      restrict: 'EA',
      //link: function (scope, element, attrs) {
      //}
      scope: {
        formula: '='
      },
      controller: function($scope) {

        // Data of molecules
        var moleculesArray = [
          {
            "moleculeId": 1,
            "moleculeName": "Water",
            "formula": "H2O",
            "structure": {
              "nodes": [
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 2,
            "moleculeName": "Hydrogen Peroxide",
            "formula": "H2O2",
            "structure": {
              "nodes": [
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 2, "target": 3,  "bond": 1},
                {"source": 1, "target": 3,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 3,
            "moleculeName": "Hydrogen Chloride",
            "formula": "HCl",
            "structure": {
              "nodes": [
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 2, "target": 3,  "bond": 1},
                {"source": 1, "target": 3,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 4,
            "moleculeName": "Sulfuric Acid",
            "formula": "H2SO4",
            "structure": {
              "nodes": [
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "S", "size": 16},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 3,  "bond": 1},
                {"source": 3, "target": 2,  "bond": 1},
                {"source": 4, "target": 2,  "bond": 2},
                {"source": 5, "target": 2,  "bond": 2},
                {"source": 6, "target": 2,  "bond": 1},
                {"source": 6, "target": 1,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 5,
            "moleculeName": "Nitric Acid",
            "formula": "HNO3",
            "structure": {
              "nodes": [
                {"atom": "H", "size": 1},
                {"atom": "N", "size": 7},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1},
                {"source": 1, "target": 3,  "bond": 1},
                {"source": 1, "target": 4,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 6,
            "moleculeName": "Acetic Acid",
            "formula": "CH3COOH",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "C", "size": 6},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 0, "target": 3,  "bond": 1},
                {"source": 4, "target": 0,  "bond": 1},
                {"source": 4, "target": 5,  "bond": 2},
                {"source": 4, "target": 6,  "bond": 1},
                {"source": 6, "target": 7,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 7,
            "moleculeName": "Ammonia",
            "formula": "NH3",
            "structure": {
              "nodes": [
                {"atom": "N", "size": 7},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 0, "target": 3,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 8,
            "moleculeName": "Sulfur Dioxide",
            "formula": "SO2",
            "structure": {
              "nodes": [
                {"atom": "S", "size": 16},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 2},
                {"source": 0, "target": 2,  "bond": 2}
              ]
            }
          },
          {
            "moleculeId": 9,
            "moleculeName": "Sulfur Trioxide",
            "formula": "SO3",
            "structure": {
              "nodes": [
                {"atom": "S", "size": 16},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 2},
                {"source": 0, "target": 2,  "bond": 2},
                {"source": 0, "target": 3,  "bond": 2}
              ]
            }
          },
          {
            "moleculeId": 10,
            "moleculeName": "Carbon Monoxide",
            "formula": "CO",
            "structure": {
              "nodes": [
                {"atom": "O", "size": 8},
                {"atom": "C", "size": 6}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 3}
              ]
            }
          },
          {
            "moleculeId": 11,
            "moleculeName": "Carbon Dioxide",
            "formula": "CO2",
            "structure": {
              "nodes": [
                {"atom": "O", "size": 8},
                {"atom": "O", "size": 8},
                {"atom": "C", "size": 6}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 2},
                {"source": 1, "target": 2,  "bond": 2}
              ]
            }
          },
          {
            "moleculeId": 12,
            "moleculeName": "Methane",
            "formula": "CH4",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 0, "target": 3,  "bond": 1},
                {"source": 0, "target": 4,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 13,
            "moleculeName": "Ethane",
            "formula": "C2H6",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 2,  "bond": 1},
                {"source": 0, "target": 3,  "bond": 1},
                {"source": 0, "target": 4,  "bond": 1},
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 1, "target": 5,  "bond": 1},
                {"source": 1, "target": 6,  "bond": 1},
                {"source": 1, "target": 7,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 14,
            "moleculeName": "Propane",
            "formula": "C3H8",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 3,  "bond": 1},
                {"source": 0, "target": 4,  "bond": 1},
                {"source": 0, "target": 5,  "bond": 1},
                {"source": 1, "target": 6,  "bond": 1},
                {"source": 1, "target": 7,  "bond": 1},
                {"source": 2, "target": 8,  "bond": 1},
                {"source": 2, "target": 9,  "bond": 1},
                {"source": 2, "target": 10,  "bond": 1},
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 14,
            "moleculeName": "Butane",
            "formula": "C4H10",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1},
                {"source": 2, "target": 3,  "bond": 1},
                {"source": 4, "target": 0,  "bond": 1},
                {"source": 5, "target": 0,  "bond": 1},
                {"source": 6, "target": 0,  "bond": 1},
                {"source": 7, "target": 1,  "bond": 1},
                {"source": 8, "target": 1,  "bond": 1},
                {"source": 9, "target": 2,  "bond": 1},
                {"source": 10, "target": 2,  "bond": 1},
                {"source": 11, "target": 3,  "bond": 1},
                {"source": 12, "target": 3,  "bond": 1},
                {"source": 13, "target": 3,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 15,
            "moleculeName": "Pentane",
            "formula": "C5H12",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1},
                {"source": 2, "target": 3,  "bond": 1},
                {"source": 3, "target": 4,  "bond": 1},
                {"source": 0, "target": 5,  "bond": 1},
                {"source": 0, "target": 6,  "bond": 1},
                {"source": 0, "target": 7,  "bond": 1},
                {"source": 1, "target": 8,  "bond": 1},
                {"source": 1, "target": 9,  "bond": 1},
                {"source": 2, "target": 10,  "bond": 1},
                {"source": 2, "target": 11,  "bond": 1},
                {"source": 3, "target": 12,  "bond": 1},
                {"source": 3, "target": 13,  "bond": 1},
                {"source": 4, "target": 14,  "bond": 1},
                {"source": 4, "target": 15,  "bond": 1},
                {"source": 4, "target": 16,  "bond": 1}
              ]
            }
          },
          {
            "moleculeId": 16,
            "moleculeName": "Benzene",
            "formula": "C6H6",
            "structure": {
              "nodes": [
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "C", "size": 6},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1},
                {"atom": "H", "size": 1}
              ],
              "links": [
                {"source": 0, "target": 1,  "bond": 1},
                {"source": 1, "target": 2,  "bond": 1},
                {"source": 2, "target": 3,  "bond": 1},
                {"source": 3, "target": 4,  "bond": 1},
                {"source": 4, "target": 5,  "bond": 1},
                {"source": 5, "target": 0,  "bond": 1},
                {"source": 0, "target": 6,  "bond": 1},
                {"source": 1, "target": 7,  "bond": 1},
                {"source": 2, "target": 8,  "bond": 1},
                {"source": 3, "target": 9,  "bond": 1},
                {"source": 4, "target": 10,  "bond": 1},
                {"source": 5, "target": 11,  "bond": 1}
              ]
            }
          }
        ];

        var moleculeTitle = '';
        var graph = {"nodes": [], "links": []};

        // Find the molecule that matches the structure property
        for (var i = 0; i < moleculesArray.length; i++) {
          if (moleculesArray[i].formula === $scope.formula) {
            moleculeTitle = moleculesArray[i].moleculeName + ' (' + moleculesArray[i].formula + ')';
            graph = moleculesArray[i].structure;
          }
        }

        var width = 500,
          height = 400;

        var color = d3.scale.category10();

        var radius = d3.scale.sqrt()
          .range([0, 6]);

        var svg = d3.select(".molecule-diagram-area").append("svg")
          .attr("width", width)
          .attr("height", height);

       svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 20)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px") 
          .style("text-decoration", "underline")  
          .text(moleculeTitle);   

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

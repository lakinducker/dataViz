(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("DataMapWorldCtrl", DataMapWorldCtrl);

  DataMapWorldCtrl.$inject = ["$scope"];

  function DataMapWorldCtrl($scope) {

    $scope.message = 'test';

    $scope.plugins = {
      customLegend: function(layer, data, options) {
        var html = ['<ul class="list-inline">'],
            label = '';
        for (var fillKey in this.options.fills) {
          html.push('<li class="key" ',
              'style="border-top: 10px solid ' + this.options.fills[fillKey] + '">',
              (fillKey === 'defaultFill' ? 'N/A' : fillKey),
              '</li>');
        }
        html.push('</ul>');
        d3.select(this.options.element).append('div')
            .attr('class', 'datamaps-legend')
            .style('position', 'absolute')
            .style('bottom', 0)
            .html(html.join(''));
      }
    };

    // Returns a random number between 0 (inclusive) and 1 (exclusive)
    function getRandom() {
      return Math.random();
    }

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateSalesNum() {
      var sales = getRandomInt(1, 100) * getRandom();
      return sales.toFixed(2);
    }
    
    function generateRandomProfitability() {
      var options = ['Highly Profitable', 'Profitable', 'Slightly Profitable', 
                     'Slightly Unprofitable', 'Unprofitable', 'Highly Unprofitable'];
      var selection = getRandomInt(0, options.length);
      return options[selection];
    }

    function generateDetails() {
      var sales = generateSalesNum() * 1;
      var expenses = generateSalesNum() * 0.70;
      var margin = ((sales - expenses) / sales) * 100;
      var fillKey = 'defaultFill';

      if (margin >= 50) {
        fillKey = 'Highly Profitable';
      } else if (margin >= 25 && margin < 50) {
        fillKey = 'Profitable';
      } else if (margin > 0 && margin < 25) {
        fillKey = 'Slightly Profitable';
      } else if (margin <= 0 && margin > -25) {
        fillKey = 'Slightly Unprofitable';
      } else if (margin <= -25 && margin > -50) {
        fillKey = 'Unprofitable';
      } else if (margin <= -50) {
        fillKey = 'Highly Unprofitable';
      }

      return {
        "sales": sales.toFixed(2),
        "expenses": expenses.toFixed(2),
        "margin": margin.toFixed(2),
        "fillKey": fillKey
      }
    }

    //console.log(generateDetails());



    $scope.map = {
      scope: "world",
      projection: "mercator",
      responsive: true,
      options: {
        staticGeoData: true
      },
      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo">' +
              geography.properties.name + '<br>' +
              ' Sales: $' +
              (data.sales || '0') + ' million <br>' +
              ' Expenses: $' +
              (data.expenses || '0') + ' million <br>' +
              ' Margin: ' +
              (data.margin || '0') + '% <br>' +
              ' (' + data.fillKey + ')' +
              '</div>';
        },
        highlightBorderWidth: 3
      },
      fills: {
        'Highly Profitable': '#1f5810',
        'Profitable': '#2e8a19',
        'Slightly Profitable': '#C5E3BF',
        'Slightly Unprofitable': '#ffcccc',
        'Unprofitable': '#CC4731',
        'Highly Unprofitable': '#7f0000',
        defaultFill: '#b9b9b9'
      },
      data: {
        "USA": generateDetails(),
        "CAN": generateDetails(),
        "IRL": generateDetails(),
        "RUS": generateDetails(),
        "JPN": generateDetails(),
        "ITA": generateDetails(),
        "CRI": generateDetails(),
        "KOR": generateDetails(),
        "DEU": generateDetails(),
        "FRA": generateDetails(),
        "MEX": generateDetails(),
        "BRA": generateDetails(),
        "BEL": generateDetails(),
        "NLD": generateDetails(),
        "GBR": generateDetails(),
        "CHN": generateDetails()
      }
    };



  }
}());

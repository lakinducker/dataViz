(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RiskReturnChartCtrl", RiskReturnChartCtrl);

  RiskReturnChartCtrl.$inject = ["$scope"];

  function RiskReturnChartCtrl($scope) {


    //Range slider config
    $scope.sliderOptions = {
      minValue: 0,
      maxValue: 0,
      options: {
        floor: 0,
        ceil: 100,
        step: 1
      }
    };


    $scope.riskReturnData = [];



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
          axisLabel: 'Volatility',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Return',
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




    $scope.data = [
      {
        "key": "Fund 1",
        "values": [
          {
            "name" : "Fund 1",
            "x": 3,
            "y": 6,
            "size": 2,
            "shape": "circle"
          }
        ]
      },
      {
        "key": "Fund 2",
        "values": [
          {
            "name" : "Fund 2",
            "x": 6,
            "y": 10,
            "size": 3,
            "shape": "circle"
          }
        ]
      },
      {
        "key": "Fund 3",
        "values": [
          {
            "name" : "Fund 3",
            "x": 10,
            "y": 15,
            "size": 2.2,
            "shape": "circle"
          }
        ]
      }
    ];





    $scope.weightChartOptions = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'PostSearch Metrics',
          axisLabelDistance: 30
        }
      }
    };



    $scope.barData = [
      {
        key: "Size of Investment",
        values: [
          {
            "label" : "HitsCount" ,
            "value" : 1
          } ,
          {
            "label" : "HitsVolume" ,
            "value" : 1
          } ,
          {
            "label" : "FamilyCount" ,
            "value" : 1
          }
        ]
      }
    ];



    $scope.$watch('data', function () {
      console.log('changed');
      for (var i = 0; i < $scope.data.length; i++) {
        console.log($scope.data[i].key);
        console.log($scope.data[i].values[0].size);
        var numberValue = parseFloat($scope.data[i].values[0].size);
        console.log('typeof: ' + typeof(numberValue));
        console.log(numberValue);
        if (typeof(numberValue) === "number") {
          $scope.barData[0].values[i].label = $scope.data[i].key;
          $scope.barData[0].values[i].value = numberValue;
        }
        console.log($scope.barData);
      }
    }, true);


  }
}());

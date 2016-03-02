(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("CandlestickChartCtrl", CandlestickChartCtrl);

  CandlestickChartCtrl.$inject = ["$scope"];

  function CandlestickChartCtrl($scope) {

    $scope.options = {
      chart: {
        type: 'candlestickBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 66,
          left: 60
        },
        x: function(d){ return d['date']; },
        y: function(d){ return d['close']; },
        duration: 100,

        xAxis: {
          axisLabel: 'Dates',
          tickFormat: function(d) {
            //return d3.time.format('%x')(new Date(new Date() - (20000 * 86400000) + (d * 86400000)));
            return d3.time.format("%m/%d/%Y")(new Date(d));
          },
          showMaxMin: false
        },

        yAxis: {
          axisLabel: 'Stock Price',
          tickFormat: function(d){
            return '$' + d3.format(',.1f')(d);
          },
          showMaxMin: false
        },
        zoom: {
          enabled: true,
          scaleExtent: [1, 10],
          useFixedDomain: false,
          useNiceScale: false,
          horizontalOff: false,
          verticalOff: true,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    };




    // Returns a random number between 0 (inclusive) and 1 (exclusive)
    function getRandom() {
      return Math.random();
    }

    // Returns a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Generate an array of objects with x and y
    function generateArrayOfObjects(length, min, max) {
      console.log('generateArrayOfObjects called');
      console.log(length);
      var array = [];

      var openStart = getRandomArbitrary(min, max);

      for (var i = 0; i < length; i++) {
        var maxVaration = 4;
        var open = openStart;
        var high = open + getRandomArbitrary(0, maxVaration);
        var low = open - getRandomArbitrary(0, maxVaration);
        var close = getRandomArbitrary(low, high);
        var volume = getRandomInt(60000000, 70000000);
        var adjusted = close;

        var obj = {};
        //var date = moment().subtract(90 - i, 'day').unix();
        //obj['date'] = Math.round(date * 0.00001);
        obj['date'] = moment().subtract(90 - i, 'day');
        obj['open'] = open.toFixed(2);
        obj['high'] = high.toFixed(2);
        obj['low'] = low.toFixed(2);
        obj['close'] = close.toFixed(2);
        obj['close'] = close.toFixed(2);
        obj['volume'] = volume;
        obj['adjusted'] = (adjusted + getRandomArbitrary(-1, 1)).toFixed(2);
        array.push(obj);

        openStart = close;
      }
      return array;
    }



    $scope.data = [{values: generateArrayOfObjects(90, 150, 170)}];


  }
}());

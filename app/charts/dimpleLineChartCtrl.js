(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("DimpleLineChartCtrl", DimpleLineChartCtrl);

  DimpleLineChartCtrl.$inject = ["$scope"];

  function DimpleLineChartCtrl($scope) {

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var day = new Date(2011, 9, 16);

    function generateData(months, stores) {
      var dataArray = [];
      for (var j = 0; j < stores; j++) {
        var previousMonthSales = getRandomInt(0, 20);
        for (var i = 0; i < months; i++) {
          // get the month
          var todayMinusMonths = moment().subtract(months - i, 'months');

          // get sales for the month
          var salesForMonth = previousMonthSales + getRandomInt(-5, 5);

          // correct for negative numbers
          if (salesForMonth <= 0) {
            salesForMonth = (salesForMonth * salesForMonth) / 2;
          }

          // set previousMonthSales to current
          previousMonthSales = salesForMonth;
          dataArray.push(
            {
              "Month": todayMinusMonths.format('MMM-YY'),
              "storeId": j + 1,
              "Sales": salesForMonth
            }
          );
        }
      }
      return dataArray
    }

    $scope.graphData = generateData(12, 3);

  }
}());

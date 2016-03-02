(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RealtimeDonutChartCtrl", RealtimeDonutChartCtrl);

  RealtimeDonutChartCtrl.$inject = ["$scope", '$http', '$interval'];

  function RealtimeDonutChartCtrl($scope, $http, $interval) {

    $scope.donutData = [73, 34, 42, 89, 66, 75];

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $interval(function(){
      //$http.get('donut-data-api.json').then(function(response){
      //  // your API would presumably be sending new data, not the same
      //  // data each time!
      //  var data = response.data.map(function(d){ return d * ( 1 - Math.random() / 10) });
      //  $scope.donutData = data;
      //}, function(err){
      //  throw err;
      //});

      var newArray = [];
      for (var i = 0; i < $scope.donutData.length; i++) {
        newArray.push(getRandomInt(0,100));
      }
      $scope.donutData = newArray;
    }, 1000);
  }
}());

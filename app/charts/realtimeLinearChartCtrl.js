(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("RealtimeLinearChartCtrl", RealtimeLinearChartCtrl);

  RealtimeLinearChartCtrl.$inject = ['$scope', '$interval'];

  function RealtimeLinearChartCtrl($scope, $interval) {

    $scope.systemData=[];

    for (var i = 0; i < 30; i++) {
      $scope.systemData.push({second: i + 1,system: Math.round(Math.random() * 100)});
    }

    var currentSecond = 30;

    $interval(function(){
      currentSecond += 1;
      console.log(currentSecond);
      var system = Math.round(Math.random() * 100);
      $scope.systemData.push({second: currentSecond, system:system});
      $scope.systemData.shift();
    }, 1000, 100);

  }
}());

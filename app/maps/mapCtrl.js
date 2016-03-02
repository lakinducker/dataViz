(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("MapCtrl", MapCtrl);

  MapCtrl.$inject = ["$scope", '$interval'];

  function MapCtrl($scope, $interval) {

    $scope.recentJobs = [];
    var markers = [];

    var loopCounter = 0;
    for (var i = 0; i < 10; i++) {
      var jobType = getJobType();
      var dateTime = moment()
                      .subtract(loopCounter, 'm')
                      .subtract(getRandomInt(0, 59), 's')
                      .format('MM/DD/YYYY, h:mm:ss a');
      var marker = {
        lat: getRandomArbitrary(33, 48),
        lng: getRandomArbitrary(-116, -82),
        focus: false,
        message: jobType + ' Job: ' + dateTime,
        draggable: false,
        jobType: jobType,
        dateTime: dateTime
      };
      markers.push(marker);
      $scope.recentJobs.push(marker);
      loopCounter++;
    }


    angular.extend($scope, {
      mapCenter: {
        lat: 38.6530169,
        lng: -90.3835484,
        zoom: 4
      },
      markers: {
        marker0: angular.copy(markers[0]),
        marker1: angular.copy(markers[1]),
        marker2: angular.copy(markers[2]),
        marker3: angular.copy(markers[3]),
        marker4: angular.copy(markers[4]),
        marker5: angular.copy(markers[5]),
        marker6: angular.copy(markers[6]),
        marker7: angular.copy(markers[7]),
        marker8: angular.copy(markers[8]),
        marker9: angular.copy(markers[9])
      },
      position: {
        lat: 38.6530169,
        lng: -90.3835484
      }
    });


    // Returns a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function getJobType() {
      var jobTypes = ['Processing', 'Search', 'Export'];
      var randomInt = getRandomInt(0, 3);
      return jobTypes[randomInt];
    }

    var counter = 0;

    $interval(function(){

      $scope.markers.marker0.focus = false;
      $scope.markers.marker1.focus = false;
      $scope.markers.marker2.focus = false;
      $scope.markers.marker3.focus = false;
      $scope.markers.marker4.focus = false;
      $scope.markers.marker5.focus = false;
      $scope.markers.marker6.focus = false;
      $scope.markers.marker7.focus = false;
      $scope.markers.marker8.focus = false;
      $scope.markers.marker9.focus = false;

      var jobType = getJobType();
      var dateTime = moment().format('MM/DD/YYYY, h:mm:ss a');
      var newMarker = {
        lat: getRandomArbitrary(33, 48),
        lng: getRandomArbitrary(-116, -82),
        focus: true,
        message: jobType + ' Job: ' + dateTime,
        draggable: false,
        jobType: jobType,
        dateTime: dateTime
      };

      switch (counter) {
        case 0:
          $scope.markers.marker0 = newMarker;
          break;
        case 1:
          $scope.markers.marker1 = newMarker;
          break;
        case 2:
          $scope.markers.marker2 = newMarker;
          break;
        case 3:
          $scope.markers.marker3 = newMarker;
          break;
        case 4:
          $scope.markers.marker4 = newMarker;
          break;
        case 5:
          $scope.markers.marker5 = newMarker;
          break;
        case 6:
          $scope.markers.marker6 = newMarker;
          break;
        case 7:
          $scope.markers.marker7 = newMarker;
          break;
        case 8:
          $scope.markers.marker8 = newMarker;
          break;
        case 9:
          $scope.markers.marker9 = newMarker;
          break;
        default:
          $scope.markers.marker0 = newMarker;
      }

      $scope.recentJobs.unshift(newMarker);

      if (counter < 10) {
        counter++;
      } else {
        counter = 0;
      }


    }, 5000);

  }
}());

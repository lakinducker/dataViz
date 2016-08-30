(function () {
  "use strict";
  angular
    .module('dataViz')
    .controller("PerformanceCtrl", PerformanceCtrl);

  PerformanceCtrl.$inject = ["$scope", "$rootScope"];

  function PerformanceCtrl($scope, $rootScope) {

    var ctrl = this;

    console.log('test PerformanceCtrl');

    $scope.data = [
      {
        "key": "Passing",
        "value": 50
      },
      {
        "key": "At Risk",
        "value": 30
      },
      {
        "key": "Failing",
        "value": 20
      }
    ];

    $rootScope.students = [{
      "id": 1,
      "first_name": "Randy",
      "last_name": "Riley",
      "performance": 87,
      "pace": 67
    }, {
      "id": 2,
      "first_name": "Bruce",
      "last_name": "Hughes",
      "performance": 19,
      "pace": 26
    }, {
      "id": 3,
      "first_name": "Timothy",
      "last_name": "Wood",
      "performance": 30,
      "pace": 86
    }, {
      "id": 4,
      "first_name": "Ryan",
      "last_name": "Mason",
      "performance": 9,
      "pace": 17
    }, {
      "id": 5,
      "first_name": "Arthur",
      "last_name": "Mills",
      "performance": 1,
      "pace": 70
    }, {
      "id": 6,
      "first_name": "Jonathan",
      "last_name": "Price",
      "performance": 2,
      "pace": 32
    }, {
      "id": 7,
      "first_name": "Doris",
      "last_name": "Rice",
      "performance": 85,
      "pace": 96
    }, {
      "id": 8,
      "first_name": "Edward",
      "last_name": "Rodriguez",
      "performance": 42,
      "pace": 98
    }, {
      "id": 9,
      "first_name": "Tina",
      "last_name": "Nichols",
      "performance": 34,
      "pace": 43
    }, {
      "id": 10,
      "first_name": "Richard",
      "last_name": "Boyd",
      "performance": 66,
      "pace": 66
    }, {
      "id": 11,
      "first_name": "Matthew",
      "last_name": "Romero",
      "performance": 87,
      "pace": 50
    }, {
      "id": 12,
      "first_name": "Elizabeth",
      "last_name": "Elliott",
      "performance": 80,
      "pace": 87
    }, {
      "id": 13,
      "first_name": "Kathleen",
      "last_name": "Richardson",
      "performance": 45,
      "pace": 47
    }, {
      "id": 14,
      "first_name": "Jimmy",
      "last_name": "Dixon",
      "performance": 86,
      "pace": 39
    }, {
      "id": 15,
      "first_name": "Albert",
      "last_name": "Henry",
      "performance": 33,
      "pace": 34
    }, {
      "id": 16,
      "first_name": "Kathy",
      "last_name": "Fernandez",
      "performance": 46,
      "pace": 8
    }, {
      "id": 17,
      "first_name": "Lawrence",
      "last_name": "Brooks",
      "performance": 70,
      "pace": 18
    }, {
      "id": 18,
      "first_name": "Paula",
      "last_name": "Carpenter",
      "performance": 40,
      "pace": 81
    }, {
      "id": 19,
      "first_name": "Gary",
      "last_name": "Kim",
      "performance": 25,
      "pace": 46
    }, {
      "id": 20,
      "first_name": "Christopher",
      "last_name": "White",
      "performance": 12,
      "pace": 96
    }, {
      "id": 21,
      "first_name": "Scott",
      "last_name": "Hansen",
      "performance": 98,
      "pace": 31
    }, {
      "id": 22,
      "first_name": "David",
      "last_name": "Arnold",
      "performance": 21,
      "pace": 30
    }, {
      "id": 23,
      "first_name": "Joseph",
      "last_name": "Russell",
      "performance": 100,
      "pace": 20
    }, {
      "id": 24,
      "first_name": "Dennis",
      "last_name": "Sanchez",
      "performance": 85,
      "pace": 4
    }, {
      "id": 25,
      "first_name": "Kathleen",
      "last_name": "Harrison",
      "performance": 79,
      "pace": 40
    }, {
      "id": 26,
      "first_name": "Denise",
      "last_name": "Stewart",
      "performance": 52,
      "pace": 68
    }, {
      "id": 27,
      "first_name": "Steve",
      "last_name": "Banks",
      "performance": 21,
      "pace": 38
    }, {
      "id": 28,
      "first_name": "Nicholas",
      "last_name": "Fuller",
      "performance": 59,
      "pace": 49
    }, {
      "id": 29,
      "first_name": "Carol",
      "last_name": "Peterson",
      "performance": 79,
      "pace": 70
    }, {
      "id": 30,
      "first_name": "Roy",
      "last_name": "Bowman",
      "performance": 57,
      "pace": 88
    }];


  }
}());

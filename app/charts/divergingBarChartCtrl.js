(function () {
  "use strict";
  angular
      .module('dataViz')
      .controller("DivergingBarChartCtrl", DivergingBarChartCtrl);

  DivergingBarChartCtrl.$inject = ["$scope"];

  function DivergingBarChartCtrl($scope) {

    $scope.data = [
      {
        "rows": "row 1",
        "Not at all": 396,
        "Strongly disagree": 430,
        "Disagree": 482,
        "Agree": 583,
        "Strongly agree": 720,
        "Absolutely": 400
      },
      {
        "rows": "row 2",
        "Not at all": 169,
        "Strongly disagree": 73,
        "Disagree": 299,
        "Agree": 836,
        "Strongly agree": 309,
        "Absolutely": 824
      },
      {
        "rows": "row 3",
        "Not at all": 435,
        "Strongly disagree": 188,
        "Disagree": 435,
        "Agree": 601,
        "Strongly agree": 619,
        "Absolutely": 615
      },
      {
        "rows": "row 4",
        "Not at all": 2,
        "Strongly disagree": 543,
        "Disagree": 165,
        "Agree": 252,
        "Strongly agree": 994,
        "Absolutely": 787
      },
      {
        "rows": "row 5",
        "Not at all": 970,
        "Strongly disagree": 396,
        "Disagree": 14,
        "Agree": 540,
        "Strongly agree": 794,
        "Absolutely": 391
      },
      {
        "rows": "row 6",
        "Not at all": 616,
        "Strongly disagree": 115,
        "Disagree": 792,
        "Agree": 947,
        "Strongly agree": 735,
        "Absolutely": 441
      },
      {
        "rows": "row 7",
        "Not at all": 339,
        "Strongly disagree": 389,
        "Disagree": 294,
        "Agree": 557,
        "Strongly agree": 494,
        "Absolutely": 278
      },
      {
        "rows": "row 8",
        "Not at all": 378,
        "Strongly disagree": 203,
        "Disagree": 319,
        "Agree": 842,
        "Strongly agree": 314,
        "Absolutely": 105
      },
      {
        "rows": "row 9",
        "Not at all": 789,
        "Strongly disagree": 686,
        "Disagree": 487,
        "Agree": 54,
        "Strongly agree": 396,
        "Absolutely": 456
      },
      {
        "rows": "row 10",
        "Not at all": 81,
        "Strongly disagree": 176,
        "Disagree": 536,
        "Agree": 392,
        "Strongly agree": 91,
        "Absolutely": 943
      },
      {
        "rows": "row 11",
        "Not at all": 201,
        "Strongly disagree": 402,
        "Disagree": 524,
        "Agree": 730,
        "Strongly agree": 965,
        "Absolutely": 519
      }
    ];

  }
}());

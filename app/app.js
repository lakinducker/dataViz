
(function () {
    'use strict';
    var app = angular.module('dataViz',
        [
            'ui.date',
            'chart.js',
            'ui.router',
            'ui.bootstrap',
            'ngMessages',
            'nvd3'
        ]);

    app.config(['$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            console.log('test');

            $stateProvider

                // Charts
                // Home
                //.state("charts", {
                //    url: "/",
                //    templateUrl: "app/charts/listOfCharts.html"
                //})
                .state("systemCharts", {
                    url: "/system-charts",
                    templateUrl: "app/charts/systemCharts.html"
                })
                // Project Charts
                .state('projectCharts', {
                    url: '/projects/charts/:id',
                    templateUrl: 'app/charts/projectCharts.html',
                    controller: 'ProjectChartsCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        projectResource: 'projectResource',

                        project: function (projectResource, $stateParams) {
                            var id = $stateParams.id;
                            return projectResource.get({ id: id }).$promise;
                        }

                    }
                })
                // Batch Charts
                .state('batchCharts', {
                    url: '/batches/charts/:id',
                    templateUrl: 'app/charts/batchCharts.html',
                    controller: 'BatchChartsCtrl',
                    controllerAs: 'vm',
                    resolve: {

                        batchResource: 'batchResource',

                        batch: function (batchResource, $stateParams) {
                            var id = $stateParams.id;
                            return batchResource.get({id: id}).$promise;
                        }
                    }
                })
                // Line Chart
                .state("lineChart", {
                    url: "/line",
                    templateUrl: "app/charts/lineChart.html",
                    controller: "LineChartCtrl",
                    controllerAs: 'vm'
                })
                // Cumulative Line Chart
                .state("cumulativeChart", {
                    url: "/",
                    templateUrl: "app/charts/cumulativeChart.html",
                    controller: "CumulativeChartCtrl",
                    controllerAs: 'vm'
                })
                // Mulit Bar Chart
                .state("multiBarChart", {
                    url: "/multi-bar",
                    templateUrl: "app/charts/multiBarChart.html",
                    controller: "MultiBarChartCtrl",
                    controllerAs: 'vm'
                })
                // Mulit Bar Chart
                .state("stackedAreaChart", {
                    url: "/stacked-area",
                    templateUrl: "app/charts/stackedAreaChart.html",
                    controller: "StackedAreaChartCtrl",
                    controllerAs: 'vm'
                })
                // Mulit Bar Chart
                .state("historicalBarChart", {
                    url: "/historical-bar",
                    templateUrl: "app/charts/historicalBarChart.html",
                    controller: "HistoricalBarChartCtrl",
                    controllerAs: 'vm'
                })
                // Line Focus Chart
                .state("lineFocusChart", {
                    url: "/line-focus",
                    templateUrl: "app/charts/lineFocusChart.html",
                    controller: "LineFocusChartCtrl",
                    controllerAs: 'vm'
                })
                // Discreet Bat Chart
                .state("discreetBarChart", {
                    url: "/discreet-bar",
                    templateUrl: "app/charts/discreetBarChart.html",
                    controller: "DiscreetBarChartCtrl",
                    controllerAs: 'vm'
                })
                // Pie Chart
                .state("pieChart", {
                    url: "/pie",
                    templateUrl: "app/charts/pieChart.html",
                    controller: "PieChartCtrl",
                    controllerAs: 'vm'
                })
                // Box Plot Chart
                .state("boxPlotChart", {
                    url: "/box-plot",
                    templateUrl: "app/charts/boxPlotChart.html",
                    controller: "BoxPlotChartCtrl",
                    controllerAs: 'vm'
                })
                // Raw File Pie Chart
                .state("rawFileChart", {
                    url: "/raw-file",
                    templateUrl: "app/charts/rawFileChart.html",
                    controller: "RawFileChartCtrl",
                    controllerAs: 'vm'
                })
                // Histogram Chart
                .state("histogramChart", {
                    url: "/histogram",
                    templateUrl: "app/charts/histogramChart.html",
                    controller: "HistogramChartCtrl",
                    controllerAs: 'vm'
                })
                // Radar Chart
                .state("radarChart", {
                    url: "/radar",
                    templateUrl: "app/charts/radarChart.html",
                    controller: "RadarChartCtrl",
                    controllerAs: 'vm'
                })
                // Line Curve Chart
                .state("lineCurveChart", {
                    url: "/line-curve",
                    templateUrl: "app/charts/lineCurveChart.html",
                    controller: "LineCurveChartCtrl",
                    controllerAs: 'vm'
                })
<<<<<<< HEAD
                // Donut Chart
                .state("donutChart", {
                    url: "/donut",
                    templateUrl: "app/charts/donutChart.html",
                    controller: "DonutChartCtrl",
                    controllerAs: 'vm'
                })
                // Polar Chart
                .state("polarChart", {
                    url: "/polar",
                    templateUrl: "app/charts/polarChart.html",
                    controller: "PolarChartCtrl",
                    controllerAs: 'vm'
                })
=======
>>>>>>> e8175dbdbb39b75266fa02934b3587fee93955fe
        }]
    );

}());

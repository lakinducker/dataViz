
(function () {
    'use strict';
    var app = angular.module('dataViz',
        [
            'ui.date',
            'chart.js',
            'ui.router',
            'ui.bootstrap',
            'ngMessages',
            'nvd3',
            'ui-leaflet',
            'highcharts-ng',
            'datamaps',
            'rzModule',
            'googlechart',
            'angular-dimple'
        ]);

    app.config(['$stateProvider',
            '$urlRouterProvider',
            'highchartsNGProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

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



                // High Line Chart
                .state("highLineChart", {
                    url: "/",
                    templateUrl: "app/charts/highLineChart.html",
                    controller: "HighLineChartCtrl",
                    controllerAs: 'vm'
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
                    url: "/cumulative",
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

                // Side Bar Chart
                .state("sideBarChart", {
                    url: "/sideBar",
                    templateUrl: "app/charts/sideBarChart.html",
                    controller: "SideBarChartCtrl",
                    controllerAs: 'vm'
                })

                // Realtime Linear Chart
                .state("realtimeLinearChart", {
                    url: "/realtime-linear",
                    templateUrl: "app/charts/realtimeLinearChart.html",
                    controller: "RealtimeLinearChartCtrl",
                    controllerAs: 'vm'
                })

                // Realtime Donut Chart
                .state("realtimeDonutChart", {
                    url: "/realtime-donut",
                    templateUrl: "app/charts/realtimeDonutChart.html",
                    controller: "RealtimeDonutChartCtrl",
                    controllerAs: 'vm'
                })

                // Scatter Chart
                .state("scatterChart", {
                    url: "/scatter",
                    templateUrl: "app/charts/scatterChart.html",
                    controller: "ScatterChartCtrl",
                    controllerAs: 'vm'
                })

                // Scatter Chart
                .state("scatterLineChart", {
                  url: "/scatter-line",
                  templateUrl: "app/charts/scatterLineChart.html",
                  controller: "ScatterLineChartCtrl",
                  controllerAs: 'vm'
                })

                // Risk and Return Chart
                .state("riskReturn", {
                  url: "/risk-return",
                  templateUrl: "app/charts/riskReturnChart.html",
                  controller: "RiskReturnChartCtrl",
                  controllerAs: 'vm'
                })

                // Candlestick Chart
                .state("candlestick", {
                  url: "/candlestick",
                  templateUrl: "app/charts/candlestickChart.html",
                  controller: "CandlestickChartCtrl",
                  controllerAs: 'vm'
                })

                // Realtime Bar Chart
                .state("realtimeBar", {
                  url: "/realtime-bar",
                  templateUrl: "app/charts/realtimeBarChart.html",
                  controller: "RealtimeBarChartCtrl",
                  controllerAs: 'vm'
                })

                // Highlight Points Chart
                .state("highlightPoints", {
                  url: "/highlight-points",
                  templateUrl: "app/charts/highlightPointsChart.html",
                  controller: "HighlightPointsChartCtrl",
                  controllerAs: 'vm'
                })

                // High Scatter Chart
                .state("highScatter", {
                  url: "/high-scatter",
                  templateUrl: "app/charts/highScatterChart.html",
                  controller: "HighScatterChartCtrl",
                  controllerAs: 'vm'
                })

                // Gauge Chart
                .state("gauge", {
                  url: "/gauge",
                  templateUrl: "app/charts/gaugeChart.html",
                  controller: "GaugeChartCtrl",
                  controllerAs: 'vm'
                })

                // Dimple Line Chart
                .state("dimpleLine", {
                  url: "/dimple-line",
                  templateUrl: "app/charts/dimpleLineChart.html",
                  controller: "DimpleLineChartCtrl",
                  controllerAs: 'vm'
                })

                // Diverging Bar Chart
                .state("divergingBar", {
                  url: "/diverging-bar",
                  templateUrl: "app/charts/divergingBarChart.html",
                  controller: "DivergingBarChartCtrl",
                  controllerAs: 'vm'
                })

                // Objective Mastery Chart
                .state("objectiveMastery", {
                  url: "/objective-mastery",
                  templateUrl: "app/charts/objectiveMasteryChart.html",
                  controller: "ObjectiveMasteryChartCtrl",
                  controllerAs: 'vm'
                })


                // Map
                .state("map", {
                    url: "/map",
                    templateUrl: "app/maps/map.html",
                    controller: "MapCtrl",
                    controllerAs: 'vm'
                })

                // DataMap
                .state("dataMap", {
                    url: "/data-map",
                    templateUrl: "app/maps/dataMap.html",
                    controller: "DataMapCtrl",
                    controllerAs: 'vm'
                })

                // DataMap
                .state("dataMapWorld", {
                    url: "/data-map-world",
                    templateUrl: "app/maps/dataMapWorld.html",
                    controller: "DataMapWorldCtrl",
                    controllerAs: 'vm'
                })

                // 3D
                .state("3d", {
                  url: "/3d",
                  templateUrl: "app/3d/webgl.html",
                  controller: "WebglCtrl",
                  controllerAs: 'vm'
                })



                // DataMap
                .state("moleculeDiagram", {
                  url: "/molecule-diagram",
                  templateUrl: "app/molecules/moleculeDiagram.html",
                  controller: "MoleculeDiagramCtrl",
                  controllerAs: 'vm'
                })

                .state("reactions", {
                  url: "/reactions",
                  templateUrl: "app/molecules/reactions.html",
                  controller: "ReactionsCtrl",
                  controllerAs: 'vm'
                })


                //  Chart and Table Integration
                .state("performance", {
                  url: "/performance",
                  templateUrl: "app/charts/performance.html",
                  controller: "PerformanceCtrl",
                  controllerAs: 'vm'
                });



        }]
    );

}());

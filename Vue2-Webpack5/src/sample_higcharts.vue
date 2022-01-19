<template>
    <div>
        <div style="min-height: 300px">
            <div id="highcharts_sample"></div>
        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'
    import Highcharts3d from 'highcharts/highcharts-3d'
    import HighchartsMore from 'highcharts/highcharts-more'
    import HighchartsExporting from 'highcharts/modules/exporting'

    Highcharts3d(Highcharts);
    HighchartsMore(Highcharts);
    HighchartsExporting(Highcharts);

    export default {
        async mounted() {
            this.chart_show();
            // this.chart_show_2();
        },

        data() {
            return {
                chart: null,

                chart_data: {
                }
            }
        },

        methods: {
            async chart_show_2() {
                const chart_config = {
                    title: {
                        text: 'Solar Employment Growth by Sector, 2010-2016'
                    },

                    subtitle: {
                        text: 'Source: thesolarfoundation.com'
                    },

                    yAxis: {
                        title: {
                            text: 'Number of Employees'
                        }
                    },

                    xAxis: {
                        accessibility: {
                            rangeDescription: 'Range: 2010 to 2017'
                        }
                    },

                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2010
                        }
                    },

                    series: [{
                        name: 'Installation',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: 'Manufacturing',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, {
                        name: 'Sales & Distribution',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                    }, {
                        name: 'Project Development',
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                    }, {
                        name: 'Other',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }
                }

                this.chart = new Highcharts.chart('highcharts_sample', chart_config);
            },

            async chart_show() {
                const chart_config = {
                    chart: {
                        type: 'scatter3d',
                        animation: false,
                        options3d: {
                            enabled: true,
                            alpha: 10,
                            beta: 30,
                            depth: 250,
                            viewDistance: 5,
                            fitToPlot: false,
                            frame: {
                                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
                            },
                        }
                    },

                    plotOptions: {
                        scatter: {
                            width: 10,
                            height: 10,
                            depth: 10
                        }
                    },
                }

                let chart_config_local = {...chart_config, ...{
                    yAxis: {
                            min: 0,
                            max: 10,
                            title: null
                        },
                        xAxis: {
                            min: 0,
                            max: 10,
                            gridLineWidth: 1
                        },
                        zAxis: {
                            min: 0,
                            max: 10,
                            showFirstLabel: false
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: 'Data',
                            colorByPoint: true,
                            accessibility: {
                                exposeAsGroupOnly: true
                            },
                            data: [
                                [1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6],
                                [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3],
                                [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7],
                                [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9],
                                [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5],
                                [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1],
                                [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3],
                                [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8],
                                [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3],
                                [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0],
                                [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8],
                                [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5],
                                [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9],
                                [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2],
                                [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6],
                                [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5],
                                [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
                        }]
                }}

                this.chart = new Highcharts.chart('highcharts_sample', chart_config_local);
                let chart = this.chart;

                // Add mouse and touch events for rotation
                (function (H) {
                    function dragStart(eStart) {
                        eStart = chart.pointer.normalize(eStart);

                        var posX = eStart.chartX,
                            posY = eStart.chartY,
                            alpha = chart.options.chart.options3d.alpha,
                            beta = chart.options.chart.options3d.beta,
                            sensitivity = 5,  // lower is more sensitive
                            handlers = [];

                        function drag(e) {
                            // Get e.chartX and e.chartY
                            e = chart.pointer.normalize(e);

                            chart.update({
                                chart: {
                                    options3d: {
                                        alpha: alpha + (e.chartY - posY) / sensitivity,
                                        beta: beta + (posX - e.chartX) / sensitivity
                                    }
                                }
                            }, undefined, undefined, false);
                        }

                        function unbindAll() {
                            handlers.forEach(function (unbind) {
                                if (unbind) {
                                    unbind();
                                }
                            });
                            handlers.length = 0;
                        }

                        handlers.push(H.addEvent(document, 'mousemove', drag));
                        handlers.push(H.addEvent(document, 'touchmove', drag));


                        handlers.push(H.addEvent(document, 'mouseup', unbindAll));
                        handlers.push(H.addEvent(document, 'touchend', unbindAll));
                    }
                    H.addEvent(chart.container, 'mousedown', dragStart);
                    H.addEvent(chart.container, 'touchstart', dragStart);
                }(Highcharts));
                
            }
        }
    }
</script>
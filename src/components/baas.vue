<template>
    <div id="baas">
        <div class="content clear">
            <div class="fl content_left">
                <header>
                    <ul class="clear">
                        <li class="fl"><div>电商业</div></li>
                        <li class="fl"><div>医疗业</div></li>
                        <li class="fl"><div>房产业</div></li>
                        <li class="fl"><div>物流业</div></li>
                        <li class="fl"><div>金融业</div></li>
                    </ul>
                    <ol class="clear">
                        <li class="fl"></li>
                        <li class="fl"></li>
                        <li class="fl"></li>
                        <li class="fl"></li>
                        <li class="fl"></li>
                    </ol>
                    <h1></h1>
                </header>
                <section><div ref="node_graph"></div></section>
                <footer>
                    <h1>数据跟踪</h1>
                    <div class="clear">
                        <ul class="fl">
                            <li class="fl">姓名</li>
                            <li class="fl">节点</li>
                            <li class="fl">操作</li>
                            <li class="fl">更新时间</li>
                        </ul>
                        <ul class="fl">
                            <li class="fl">姓名</li>
                            <li class="fl">节点</li>
                            <li class="fl">操作</li>
                            <li class="fl">更新时间</li>
                        </ul>
                    </div>
                    <div class="list">
                        <div class="clear" v-slider="{speed:speed,distance:distance,setSliderData:setSliderData}">
                            <ul class="fl" v-for="i in sliderData">
                                <li class="fl">{{i.name}}</li>
                                <li class="fl">{{i.node}}</li>
                                <li class="fl">{{i.active}}</li>
                                <li class="fl">{{i.date}}</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <Footer></Footer>
            </div>
            <div class="fr content_right">
                <header>监控信息</header>
                <nav>
                    <button type="button" @click="toggleMonitor('physics')" :class="{current : physicsNav}">物理监控</button>
                    <button type="button" @click="toggleMonitor('network')" :class="{current : networkNav}">网络监控</button>
                    <button type="button" @click="toggleMonitor('business')" :class="{current : businessNav}">业务监控</button>
                </nav>
                <section>
                    <div v-show="physicsNav">
                        <ul>
                            <li class="pie"><div ref="physics_pie_one"></div></li>
                            <li class="pie"><div ref="physics_pie_two"></div></li>
                            <li class="line"><div ref="physics_line_three"></div></li>
                        </ul>
                    </div>
                    <div v-show="networkNav">
                        <ul>
                            <li class="line"><div ref="network_line_one"></div></li>
                            <li class="line"><div ref="network_line_two"></div></li>
                        </ul>
                    </div>
                    <div v-show="businessNav">
                        <ul>
                            <li class="line"><div ref="business_line_one"></div></li>
                            <li class="bar"><div ref="business_bar_two"></div></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Footer from './footerComponent'

    export default {
        name: "baas",
        components: {Footer},
        data() {
            return{
                physicsNav : true,
                networkNav : false,
                businessNav : false,
                distance : 54,
                speed : 3000,
                sliderData : [
                    {name:'赵XX',date:'2018-03-01 23:59:59',node:'baas节点1',active:'读取'},
                    {name:'钱XX',date:'2018-03-02 23:59:59',node:'baas节点2',active:'插入'},
                    {name:'孙XX',date:'2018-03-03 23:59:59',node:'baas节点3',active:'读取'},
                    {name:'李XX',date:'2018-03-04 23:59:59',node:'baas节点4',active:'插入'},
                    {name:'周XX',date:'2018-03-05 23:59:59',node:'baas节点5',active:'读取'},
                    {name:'吴XX',date:'2018-03-06 23:59:59',node:'baas节点6',active:'插入'},
                    {name:'郑XX',date:'2018-03-07 23:59:59',node:'baas节点7',active:'读取'},
                    {name:'冯XX',date:'2018-03-08 23:59:59',node:'baas节点8',active:'插入'},
                    {name:'陈XX',date:'2018-03-09 23:59:59',node:'baas节点9',active:'读取'},
                    {name:'褚XX',date:'2018-03-10 23:59:59',node:'baas节点10',active:'插入'},
                    {name:'卫XX',date:'2018-03-11 23:59:59',node:'baas节点11',active:'读取'},
                    {name:'蒋XX',date:'2018-03-12 23:59:59',node:'baas节点12',active:'插入'},
                    {name:'沈XX',date:'2018-03-13 23:59:59',node:'baas节点13',active:'读取'},
                    {name:'韩XX',date:'2018-03-14 23:59:59',node:'baas节点14',active:'插入'},
                    {name:'杨XX',date:'2018-03-15 23:59:59',node:'baas节点15',active:'读取'},
                    {name:'朱XX',date:'2018-03-16 23:59:59',node:'baas节点16',active:'插入'},
                    {name:'秦XX',date:'2018-03-17 23:59:59',node:'baas节点17',active:'读取'},
                    {name:'尤XX',date:'2018-03-18 23:59:59',node:'baas节点18',active:'插入'}
                ]
            }
        },
        methods: {
            setSliderData : function () {
                this.sliderData = this.sliderData.concat(this.sliderData.splice(0,2));
            },
            // 节点图
            node_graph() {
                let option = {
                    title: {
                        text: 'BAAS',
                        top: 20,
                        left: 20,
                        textStyle: {
                            fontSize: '20',
                            color: "#fff",
                            fontWeight: 'normal'
                        }
                    },
                    backgroundColor: 'transparent',
                    grid: {
                        top: 50,
                        bottom: 30
                    },
                    xAxis : {
                        show : false,
                        type : 'value',
                        max : 500
                    },
                    yAxis : {
                        show : false,
                        type : 'value',
                        max : 500
                    },
                    series: [
                        {
                            type: 'lines',
                            zlevel : 1,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0.7,
                                color: '#00c1c8',
                                symbolSize: 3
                            },
                            coordinateSystem: 'cartesian2d',
                            lineStyle : {
                                normal : {
                                    width : 1,
                                    color : '#0e4d7f'
                                }
                            },
                            data:[
                                {coords: [[260, 500], [50, 350]]},
                                {coords: [[260, 500], [150, 350]]},
                                {coords: [[260, 500], [150, 100]]},
                                {coords: [[260, 500], [230, 200]]},
                                {coords: [[260, 500], [330, 300]]},
                                {coords: [[260, 500], [360, 400]]},
                                {coords: [[50, 350], [0, 200]]},
                                {coords: [[50, 350], [100, 200]]},
                                {coords: [[50, 350], [150, 350]]},
                                {coords: [[150, 350], [100, 200]]},
                                {coords: [[150, 350], [150, 100]]},
                                {coords: [[150, 350], [230, 200]]},
                                {coords: [[0, 200], [100, 200]]},
                                {coords: [[0, 200], [150, 100]]},
                                {coords: [[50, 50], [100, 200]]},
                                {coords: [[50, 50], [150, 100]]},
                                {coords: [[150, 100], [300, 100]]},
                                {coords: [[230, 200], [300, 100]]},
                                {coords: [[230, 200], [350, 200]]},
                                {coords: [[300, 100], [330, 300]]},
                                {coords: [[330, 300], [450, 150]]},
                                {coords: [[360, 400], [350, 200]]},
                                {coords: [[360, 400], [390, 270]]},
                                {coords: [[360, 400], [480, 350]]},
                                {coords: [[480, 350], [390, 270]]},
                                {coords: [[480, 350], [450, 150]]},
                                {coords: [[480, 350], [500, 210]]},
                                {coords: [[380, 50], [350, 200]]},
                                {coords: [[380, 50], [480, 50]]}
                            ]
                        },
                        {
                            type: 'effectScatter',
                            zlevel : 2,
                            roam: false,
                            label: {
                                normal: {
                                    show: true,
                                    position : 'top',
                                    textStyle : {
                                        color : '#fff',
                                        fontWeight : 'normal'
                                    },
                                    formatter: '{b}'
                                }
                            },
                            symbolSize : 15,
                            itemStyle : {
                                normal : {
                                    color : '#7dc9ff'
                                }
                            },
                            data: [
                                {
                                    name : 'baas节点1',
                                    value : [260, 500]
                                },
                                {
                                    name : 'baas节点2',
                                    value : [0, 200]
                                },
                                {
                                    name : 'baas节点3',
                                    value : [50, 350]
                                },
                                {
                                    name : 'baas节点4',
                                    value : [100, 200]
                                },
                                {
                                    name : 'bass节点5',
                                    value : [50, 50]
                                },
                                {
                                    name : 'bass节点6',
                                    value : [150, 100]
                                },
                                {
                                    name : 'bass节点7',
                                    value : [150, 350]
                                },
                                {
                                    name : 'bass节点8',
                                    value : [230, 200]
                                },
                                {
                                    name : 'bass节点9',
                                    value : [300, 100]
                                },
                                {
                                    name : 'bass节点10',
                                    value : [330, 300]
                                },
                                {
                                    name : 'bass节点11',
                                    value : [360, 400]
                                },
                                {
                                    name : 'bass节点12',
                                    value : [390, 270]
                                },
                                {
                                    name : 'bass节点13',
                                    value : [350, 200]
                                },
                                {
                                    name : 'bass节点14',
                                    value : [380, 50]
                                },
                                {
                                    name : 'bass节点15',
                                    value : [450, 150]
                                },
                                {
                                    name : 'bass节点16',
                                    value : [480, 350]
                                },
                                {
                                    name : 'bass节点17',
                                    value : [500, 210]
                                },
                                {
                                    name : 'bass节点18',
                                    value : [480, 50]
                                }
                            ]
                        }
                    ]
                };
                let dom = this.$refs.node_graph;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            // 切换监控信息
            toggleMonitor(arg) {
                this.physicsNav = false;
                this.networkNav = false;
                this.businessNav = false;
                switch (arg){
                    case 'physics' : this.physicsNav = true;break;
                    case 'network' : this.networkNav = true;break;
                    case 'business' : this.businessNav = true;break;
                }
            },
            physics_pie_one() {
                let option = {
                    title: {
                        text: 'CPU',
                        textStyle: {
                            fontSize: '20',
                            color: "#bddbe7",
                            fontWeight: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#6d3dce', '#238bfa'],
                    series: [
                        {
                            name: '使用状态',
                            type: 'pie',
                            radius: '75%',
                            center: ['50%', '50%'],
                            data: [{value:35, name:'CPU占有率'}, {value:65, name:'asds'}],
                            itemStyle: {
                                show: false,
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                let dom = this.$refs.physics_pie_one;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            physics_pie_two() {
                let option = {
                    title: {
                        text: 'CPU',
                        textStyle: {
                            fontSize: '20',
                            color: "#bddbe7",
                            fontWeight: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#b0302c', '#d76662'],
                    series: [
                        {
                            name: '使用状态',
                            type: 'pie',
                            radius: '75%',
                            center: ['50%', '50%'],
                            data: [{value:75, name:'CPU占有率'}, {value:25, name:'asds'}],
                            itemStyle: {
                                show: false,
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                let dom = this.$refs.physics_pie_two;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            physics_line_three() {
                let data = {
                    timeline: [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017,
                        2018,
                        2019,
                        2020,
                        2021
                    ],
                    series: [
                        ['66', '55', '35', '75', '35'],
                        ['55', '35', '75', '35', '45'],
                        ['35', '75', '35', '45', '55'],
                        ['75', '35', '45', '55', '65'],
                        ['35', '45', '55', '65', '66'],
                        ['45', '55', '65', '66', '55'],
                        ['55', '65', '66', '55', '35'],
                        ['65', '66', '55', '35', '75'],
                        ['66', '55', '35', '75', '35']
                    ],
                    xAxis: [
                        ['1','2','3','4','5'],
                        ['2','3','4','5','6'],
                        ['3','4','5','6','7'],
                        ['4','5','6','7','8'],
                        ['5','6','7','8','1'],
                        ['6','7','8','1','2'],
                        ['7','8','1','2','3'],
                        ['8','1','2','3','4'],
                        ['1','2','3','4','5']
                    ]
                };
                let option = {
                    baseOption:{
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            left: null,
                            right: 0,
                            top: 20,
                            bottom: 20,
                            width: 55,
                            height: null,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ccc'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#555'
                            },
                            checkpointStyle: {
                                color: '#bbb',
                                borderColor: '#777',
                                borderWidth: 2
                            },
                            controlStyle: {
                                showNextBtn: false,
                                showPrevBtn: false,
                                normal: {
                                    color: '#666',
                                    borderColor: '#666'
                                },
                                emphasis: {
                                    color: '#aaa',
                                    borderColor: '#aaa'
                                }
                            },
                            show : false,
                            data: []
                        },
                        title: {
                            text: '内存',
                            textStyle: {
                                fontSize: '16',
                                color: "#bddbe7",
                                fontWeight: 'normal'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            backgroundColor: 'rgba(255,255,255,1)',
                            padding: [5, 10],
                            textStyle: {
                                color: '#7588E4'
                            },
                            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                        },
                        xAxis: {
                            show : false,
                            data: data.xAxis[0]
                        },
                        yAxis: {
                            max: '100',
                            min: '0',
                            boundaryGap: true,
                            type: 'value',
                            splitLine: {
                                // show:false,
                                // interval:0,
                                lineStyle: {
                                    color: ['#ececec']
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ececec'
                                }
                            },
                            axisLabel: {
                                formatter: '{value}%',
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitArea: {
                                show: false
                            }
                        },
                        series: [{
                            name: '内存使用率',
                            type: 'line',
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            itemStyle: {
                                normal: {
                                    borderWidth: 3,
                                    color: '#ffc74a'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3
                                }
                            },
                            data: data.series[0]
                        }]
                    },
                    options: []
                };
                for (let n = 0; n < data.timeline.length; n++) {
                    option.baseOption.timeline.data.push(data.timeline[n]);
                    option.options.push({
                        series: {data: data.series[n]},
                        xAxis: {data: data.xAxis[n]}
                    })
                }
                let dom = this.$refs.physics_line_three;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },

            network_line_one() {
                let data = {
                    timeline: [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017,
                        2018,
                        2019,
                        2020,
                        2021
                    ],
                    series: [
                        ['75', '60', '25', '15', '44'],
                        ['60', '25', '15', '44', '45'],
                        ['25', '15', '44', '45', '55'],
                        ['15', '44', '45', '55', '65'],
                        ['44', '45', '55', '65', '75'],
                        ['45', '55', '65', '75', '60'],
                        ['55', '65', '75', '60', '25'],
                        ['65', '75', '60', '25', '15'],
                        ['75', '60', '25', '15', '44']
                    ],
                    xAxis: [
                        ['1','2','3','4','5'],
                        ['2','3','4','5','6'],
                        ['3','4','5','6','7'],
                        ['4','5','6','7','8'],
                        ['5','6','7','8','1'],
                        ['6','7','8','1','2'],
                        ['7','8','1','2','3'],
                        ['8','1','2','3','4'],
                        ['1','2','3','4','5']
                    ]
                };
                let option = {
                    baseOption:{
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            left: null,
                            right: 0,
                            top: 20,
                            bottom: 20,
                            width: 55,
                            height: null,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ccc'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#555'
                            },
                            checkpointStyle: {
                                color: '#bbb',
                                borderColor: '#777',
                                borderWidth: 2
                            },
                            controlStyle: {
                                showNextBtn: false,
                                showPrevBtn: false,
                                normal: {
                                    color: '#666',
                                    borderColor: '#666'
                                },
                                emphasis: {
                                    color: '#aaa',
                                    borderColor: '#aaa'
                                }
                            },
                            show : false,
                            data: []
                        },
                        title: {
                            text: '网络时还',
                            textStyle: {
                                fontSize: '16',
                                color: "#bddbe7",
                                fontWeight: 'normal'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            backgroundColor: 'rgba(255,255,255,1)',
                            padding: [5, 10],
                            textStyle: {
                                color: '#7588E4'
                            },
                            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                        },
                        xAxis: {
                            show : false,
                            data: data.xAxis[0]
                        },
                        yAxis: {
                            max: '100',
                            min: '0',
                            boundaryGap: true,
                            type: 'value',
                            splitLine: {
                                // show:false,
                                // interval:0,
                                lineStyle: {
                                    color: ['#ececec']
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ececec'
                                }
                            },
                            axisLabel: {
                                formatter: '{value}%',
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitArea: {
                                show: false
                            }
                        },
                        series: [{
                            name: '内存使用率',
                            type: 'line',
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            itemStyle: {
                                normal: {
                                    borderWidth: 3,
                                    color: '#ffc74a'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3
                                }
                            },
                            data: data.series[0]
                        }]
                    },
                    options: []
                };
                for (let n = 0; n < data.timeline.length; n++) {
                    option.baseOption.timeline.data.push(data.timeline[n]);
                    option.options.push({
                        series: {data: data.series[n]},
                        xAxis: {data: data.xAxis[n]}
                    })
                }
                let dom = this.$refs.network_line_one;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            network_line_two() {
                let data = {
                    timeline: [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017,
                        2018,
                        2019,
                        2020,
                        2021
                    ],
                    series: [
                        ['19', '95', '25', '65', '35'],
                        ['95', '25', '65', '35', '45'],
                        ['25', '65', '35', '45', '55'],
                        ['65', '35', '45', '55', '65'],
                        ['35', '45', '55', '65', '19'],
                        ['45', '55', '65', '19', '95'],
                        ['55', '65', '19', '95', '25'],
                        ['65', '19', '95', '25', '65'],
                        ['19', '95', '25', '65', '35']
                    ],
                    xAxis: [
                        ['1', '2', '3', '4', '5'],
                        ['2', '3', '4', '5', '6'],
                        ['3', '4', '5', '6', '7'],
                        ['4', '5', '6', '7', '8'],
                        ['5', '6', '7', '8', '1'],
                        ['6', '7', '8', '1', '2'],
                        ['7', '8', '1', '2', '3'],
                        ['8', '1', '2', '3', '4'],
                        ['1', '2', '3', '4', '5']
                    ]
                };
                let option = {
                    baseOption: {
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            left: null,
                            right: 0,
                            top: 20,
                            bottom: 20,
                            width: 55,
                            height: null,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ccc'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#555'
                            },
                            checkpointStyle: {
                                color: '#bbb',
                                borderColor: '#777',
                                borderWidth: 2
                            },
                            controlStyle: {
                                showNextBtn: false,
                                showPrevBtn: false,
                                normal: {
                                    color: '#666',
                                    borderColor: '#666'
                                },
                                emphasis: {
                                    color: '#aaa',
                                    borderColor: '#aaa'
                                }
                            },
                            show: false,
                            data: []
                        },
                        title: {
                            text: '网络整体吞吐量',
                            textStyle: {
                                fontSize: '16',
                                color: "#bddbe7",
                                fontWeight: 'normal'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            backgroundColor: 'rgba(255,255,255,1)',
                            padding: [5, 10],
                            textStyle: {
                                color: '#7588E4'
                            },
                            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                        },
                        xAxis: {
                            show: false,
                            data: data.xAxis[0]
                        },
                        yAxis: {
                            max: '100',
                            min: '0',
                            boundaryGap: true,
                            type: 'value',
                            splitLine: {
                                // show:false,
                                // interval:0,
                                lineStyle: {
                                    color: ['#ececec']
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ececec'
                                }
                            },
                            axisLabel: {
                                formatter: '{value}%',
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitArea: {
                                show: false
                            }
                        },
                        series: [{
                            name: '内存使用率',
                            type: 'line',
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            itemStyle: {
                                normal: {
                                    borderWidth: 3,
                                    color: '#486CF5'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3
                                }
                            },
                            data: data.series[0]
                        }]
                    },
                    options: []
                };
                for (let n = 0; n < data.timeline.length; n++) {
                    option.baseOption.timeline.data.push(data.timeline[n]);
                    option.options.push({
                        series: {data: data.series[n]},
                        xAxis: {data: data.xAxis[n]}
                    })
                }
                let dom = this.$refs.network_line_two;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },

            business_line_one() {
                let data = {
                    timeline: [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017,
                        2018,
                        2019,
                        2020,
                        2021
                    ],
                    series: [
                        ['80', '60', '25', '95', '35'],
                        ['60', '25', '95', '35', '45'],
                        ['25', '95', '35', '45', '55'],
                        ['95', '35', '45', '55', '65'],
                        ['35', '45', '55', '65', '80'],
                        ['45', '55', '65', '80', '60'],
                        ['55', '65', '80', '60', '25'],
                        ['65', '80', '60', '25', '95'],
                        ['80', '60', '25', '95', '35']
                    ],
                    xAxis: [
                        ['1','2','3','4','5'],
                        ['2','3','4','5','6'],
                        ['3','4','5','6','7'],
                        ['4','5','6','7','8'],
                        ['5','6','7','8','1'],
                        ['6','7','8','1','2'],
                        ['7','8','1','2','3'],
                        ['8','1','2','3','4'],
                        ['1','2','3','4','5']
                    ]
                };
                let option = {
                    baseOption:{
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            left: null,
                            right: 0,
                            top: 20,
                            bottom: 20,
                            width: 55,
                            height: null,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ccc'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#555'
                            },
                            checkpointStyle: {
                                color: '#bbb',
                                borderColor: '#777',
                                borderWidth: 2
                            },
                            controlStyle: {
                                showNextBtn: false,
                                showPrevBtn: false,
                                normal: {
                                    color: '#666',
                                    borderColor: '#666'
                                },
                                emphasis: {
                                    color: '#aaa',
                                    borderColor: '#aaa'
                                }
                            },
                            show : false,
                            data: []
                        },
                        title: {
                            text: '查询服务平均响应时间',
                            textStyle: {
                                fontSize: '16',
                                color: "#bddbe7",
                                fontWeight: 'normal'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            backgroundColor: 'rgba(255,255,255,1)',
                            padding: [5, 10],
                            textStyle: {
                                color: '#7588E4'
                            },
                            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                        },
                        xAxis: {
                            show : false,
                            data: data.xAxis[0]
                        },
                        yAxis: {
                            max: '100',
                            min: '0',
                            boundaryGap: true,
                            type: 'value',
                            splitLine: {
                                // show:false,
                                // interval:0,
                                lineStyle: {
                                    color: ['#ececec']
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ececec'
                                }
                            },
                            axisLabel: {
                                formatter: '{value}%',
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitArea: {
                                show: false
                            }
                        },
                        series: [{
                            name: '内存使用率',
                            type: 'line',
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            itemStyle: {
                                normal: {
                                    borderWidth: 3,
                                    color: '#ffc74a'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3
                                }
                            },
                            data: data.series[0]
                        }]
                    },
                    options: []
                };
                for (let n = 0; n < data.timeline.length; n++) {
                    option.baseOption.timeline.data.push(data.timeline[n]);
                    option.options.push({
                        series: {data: data.series[n]},
                        xAxis: {data: data.xAxis[n]}
                    })
                }
                let dom = this.$refs.business_line_one;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            business_bar_two() {
                let data = {
                    "timeline": [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017
                    ],
                    "series": [
                        [10, 52, 200, 134, 190, 130, 180],
                        [100, 92, 150, 34, 160, 170, 80],
                        [150, 92, 120, 174, 200, 90, 100],
                        [90, 152, 40, 84, 110, 150, 66],
                        [70, 122, 30, 94, 120, 110, 55],
                    ]
                };
                let option = {
                    baseOption:{
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            left: null,
                            right: 0,
                            top: 20,
                            bottom: 20,
                            width: 55,
                            height: null,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ccc'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#555'
                            },
                            checkpointStyle: {
                                color: '#bbb',
                                borderColor: '#777',
                                borderWidth: 2
                            },
                            controlStyle: {
                                showNextBtn: false,
                                showPrevBtn: false,
                                normal: {
                                    color: '#666',
                                    borderColor: '#666'
                                },
                                emphasis: {
                                    color: '#aaa',
                                    borderColor: '#aaa'
                                }
                            },
                            show : false,
                            data: []
                        },
                        title: {
                            text: '上链服务平均响应时间',
                            textStyle: {
                                fontSize: '16',
                                color: "#bddbe7",
                                fontWeight: 'normal'
                            },
                            left: 10,
                            top: 5
                        },
                        color: ['#3398DB'],
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}"
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                show : false,
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                name: "单位（ms）",
                                max: '200',
                                min: '0',
                                boundaryGap: true,
                                splitLine: {
                                    // show:false,
                                    // interval:0,
                                    lineStyle: {
                                        color: ['#ececec']
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: '#ececec'
                                    }
                                },
                            }
                        ],
                        series : [
                            {
                                type:'bar',
                                barWidth: '60%',
                                data:data.series[0]
                            }
                        ]
                    },
                    options: []
                };
                for (let n = 0; n < data.timeline.length; n++) {
                    option.baseOption.timeline.data.push(data.timeline[n]);
                    option.options.push({
                        series: {data: data.series[n]}
                    });
                }
                let dom = this.$refs.business_bar_two;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            }
        },
        mounted(){
            this.node_graph();
            this.physics_pie_one();
            this.physics_pie_two();
            this.physics_line_three();
            this.network_line_one();
            this.network_line_two();
            this.business_line_one();
            this.business_bar_two();
        }
    }
</script>

<style lang="scss" scoped>
    // 箭头动画
    @keyframes arrowAnimate {
        from {
            background-position-y: -108px;
        }
        to {
            background-position-y: 108px;
        }
    }
    @-moz-keyframes arrowAnimate {
        from {
            background-position-y: -108px;
        }
        to {
            background-position-y: 108px;
        }
    }
    @-webkit-keyframes arrowAnimate {
        from {
            background-position-y: -108px;
        }
        to {
            background-position-y: 108px;
        }
    }
    @-o-keyframes arrowAnimate {
        from {
            background-position-y: -108px;
        }
        to {
            background-position-y: 108px;
        }
    }
    #baas{
        .content_left{
            width: 966px;
            header{
                position: relative;
                margin-top: 36px;
                ul{
                    li{
                        width: 20%;
                        height: 60px;
                        div{
                            width: 78px;
                            height: 60px;
                            line-height: 60px;
                            text-align: center;
                            margin: auto;
                            padding-left: 48px;
                            color: #fff;
                            font-size: 20px;
                        }
                    }
                    li:nth-child(1){
                        background: url('../assets/industry_electricity.png') no-repeat center;
                    }
                    li:nth-child(2){
                        background: url('../assets/industry_medical.png') no-repeat center;
                    }
                    li:nth-child(3){
                        background: url('../assets/industry_estate.png') no-repeat center;
                    }
                    li:nth-child(4){
                        background: url('../assets/industry_logistics.png') no-repeat center;
                    }
                    li:nth-child(5){
                        background: url('../assets/industry_financial.png') no-repeat center;
                    }
                }
                ol{
                    margin: 10px 0;
                    li{
                        width: 20%;
                        height: 108px;
                        background: url('../assets/industry_arrow.png') no-repeat center;
                        animation: arrowAnimate 4s linear 0s infinite normal;
                        -moz-animation: arrowAnimate 4s linear 0s infinite normal;	/* Firefox */
                        -webkit-animation: arrowAnimate 4s linear 0s infinite normal;	/* Safari 和 Chrome */
                        -o-animation: arrowAnimate 4s linear 0s infinite normal;
                    }
                }
                h1{
                    position: absolute;
                    width: 964px;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 94px;
                    margin: auto;
                    background: url('../assets/industry_gateway.png') no-repeat center;
                }
            }
            section{
                height: 374px;
                background: url('../assets/BASS_content_left_section.png') no-repeat center;
                margin-bottom: 20px;
                div{
                    height: 374px;
                }
            }
            footer{
                height: 212px;
                margin-bottom: 20px;
                background: url('../assets/BASS_content_left_footer.png') no-repeat center;
                color: #fff;
                h1{
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    font-size: 16px;
                }
                ul{
                    width: 458px;
                    padding-left:20px;
                    border: 1px solid #0e4d7f;
                    box-shadow: 0 0 30px #0e4d7f inset;
                    margin-bottom: 10px;
                    li{
                        height: 42px;
                        line-height: 44px;
                        width: 23%;
                        font-size: 14px;
                    }
                    li:last-child{
                        width: 31%;
                    }
                }
                .list{
                    height: 98px;
                    overflow: hidden;
                    position: relative;
                    div{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 966px;
                    }
                }
                ul:nth-child(odd){
                    margin-right: 6px;
                }
            }
        }
        .content_right{
            width: 353px;
            height: 938px;
            padding: 0 33px;
            background: url('../assets/BASS_bg.png') no-repeat center;
            header{
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                color: #fff;
            }
            nav{
                button{
                    width: 100px;
                    height: 40px;
                    color: #fff;
                    border: 2px solid #276288;
                    font-size: 16px;
                    background-color: transparent;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: all .2s;
                }
                button:hover,button.current{
                    border: 2px solid #4cc7ff;
                    background-color: #1078b5;
                    color: #4cc7ff;
                }
            }
            section{
                li{
                    height: 278px;
                    margin-top: 20px;
                    border: 2px solid #0e4d7f;
                    box-shadow: 0 0 50px #0e4d7f inset;
                    div{
                        width: 349px;
                        height: 278px;
                    }
                }
                li.pie{
                    height: 211px;
                    div{
                        height: 211px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="platform">
        <div class="content clear">
            <div class="fl content_left">
                <div class="map"><div ref="platform_map"></div></div>
                <Footer></Footer>
            </div>
            <div class="fr content_right">
                <div class="content_right_top">
                    <header>个人账户上链数</header>
                    <ul class="clear">
                        <li class="fl"><span>本周上链数</span></li>
                        <li class="fl"><span>累计上链总数</span></li>
                        <li class="fl"><i>8733</i></li>
                        <li class="fl"><i>8733</i></li>
                    </ul>
                </div>
                <div class="content_right_bottom">
                    <header>个人账户数据链上的记录</header>
                    <section>
                        <ul v-slider="{speed:speed,distance:distance,setSliderData:setSliderData}">
                            <li v-for="i in sliderData">
                                <p>哈希值：<span>{{i.hash}}</span></p>
                                <p>姓名：<span>{{i.name}}</span></p>
                                <p>更新时间：<span>{{i.date}}</span></p>
                                <p>雄安ID：<span>{{i.id}}</span></p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Footer from './footerComponent'

    export default {
        name: "platform",
        components: {Footer},
        data() {
            return{
                distance : 150,
                speed : 3000,
                sliderData : [
                    {name:'赵XX',date:'2018-03-01 23:59:59',id:'XA6521****',hash:'3576a9f3bc69dc1191373cadb2739edd276466dea479e6349d51055d8d5a6a9d'},
                    {name:'钱XX',date:'2018-03-02 23:59:59',id:'XA3624****',hash:'276466dea479e6349d51055d8d5a6a9dfe2e1824d722f48c635b23901ea2baf9'},
                    {name:'孙XX',date:'2018-03-03 23:59:59',id:'XA9851****',hash:'424719420be090c4783af53144a75eca7ab6738c1b84bcb5ac9dc05c076e99d9'},
                    {name:'李XX',date:'2018-03-04 23:59:59',id:'XA3694****',hash:'023aaef6633a2c08f2f00d2f18eb16de067cf3e2b3b4b3860b23763d83c6f168'},
                    {name:'周XX',date:'2018-03-05 23:59:59',id:'XA4563****',hash:'a059ff63a687b48147314c36eb242c4808e13f27efccbbcec9bd5ebb715b59d5'},
                    {name:'吴XX',date:'2018-03-06 23:59:59',id:'XA9864****',hash:'1e58ae497977e24409e1746f7d38240dbe3ceaf23ae05ab3c70f505ebe9c655e'},
                    {name:'郑XX',date:'2018-03-07 23:59:59',id:'XA1325****',hash:'ba753305a8e8f73c417febf61b4b8eca9e153a6b7c6ee61e2ae8d16057b3c6ce'},
                    {name:'王XX',date:'2018-03-08 23:59:59',id:'XA8463****',hash:'2447a40ad157050c8db54f65932485e8dd40948745b93504c825ccaf31400d90'}
                ]
            }
        },
        methods: {
            platform_map() {
                let option = {
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
                            polyline : true,
                            coordinateSystem: 'cartesian2d',
                            effect: {
                                show: true,
                                period: 8,
                                constantSpeed : 50,
                                trailLength: 0.02,
                                symbol: 'arrow',
                                symbolSize: 8
                            },
                            lineStyle : {
                                normal : {
                                    width : 1,
                                    color : '#60be42',
                                    curveness : 0.2
                                }
                            },
                            data:[
                                {coords: [[220, 380], [150, 400], [220, 380]]},
                                {coords: [[220, 380], [170, 375], [220, 380]]},
                                {coords: [[150, 400], [170, 375], [150, 400]]},
                                {coords: [[150, 400], [250, 400], [150, 400]]},
                                {coords: [[220, 380], [400, 350], [220, 380]]},
                                {coords: [[220, 380], [150, 260], [220, 380]]},

                                {coords: [[400, 350], [150, 260], [400, 350]]},
                                {coords: [[400, 350], [370, 320], [400, 350]]},
                                {coords: [[400, 350], [390, 270], [400, 350]]},
                                {coords: [[370, 320], [390, 270], [370, 320]]},
                                {coords: [[390, 270], [360, 290], [390, 270]]},
                                {coords: [[390, 270], [390, 240], [390, 270]]},

                                {coords: [[150, 260], [210, 200], [150, 260]]},
                                {coords: [[210, 200], [220, 270], [210, 200]]},
                                {coords: [[210, 200], [240, 230], [210, 200]]},
                            ]
                        },
                        // {
                        //     type: 'lines',
                        //     zlevel : 1,
                        //     coordinateSystem: 'cartesian2d',
                        //     lineStyle : {
                        //         normal : {
                        //             width : 2,
                        //             color : '#60be42',
                        //             curveness : 0.3
                        //         }
                        //     },
                        //     data:[
                        //         {coords: [[220, 380], [150, 400]]},
                        //         {coords: [[220, 380], [170, 375]]},
                        //         {coords: [[150, 400], [170, 375]]},
                        //         {coords: [[150, 400], [250, 400]]},
                        //         {coords: [[220, 380], [400, 350]]},
                        //         {coords: [[220, 380], [150, 260]]},
                        //
                        //         {coords: [[400, 350], [150, 260]]},
                        //         {coords: [[400, 350], [370, 320]]},
                        //         {coords: [[400, 350], [390, 270]]},
                        //         {coords: [[370, 320], [390, 270]]},
                        //         {coords: [[390, 270], [360, 290]]},
                        //         {coords: [[390, 270], [390, 240]]},
                        //
                        //         {coords: [[150, 260], [210, 200]]},
                        //         {coords: [[210, 200], [220, 270]]},
                        //         {coords: [[210, 200], [240, 230]]},
                        //     ]
                        // },
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
                            symbolSize : 10,
                            data: [
                                {
                                    value : [220, 380],
                                    itemStyle : {
                                        normal : {
                                            color : '#0d5fff'
                                        }
                                    },
                                    symbolSize : 15,
                                },
                                {
                                    value : [150, 400],
                                    itemStyle : {
                                        normal : {
                                            color : '#0d5fff'
                                        }
                                    },
                                },
                                {
                                    value : [170, 375],
                                    itemStyle : {
                                        normal : {
                                            color : '#0d5fff'
                                        }
                                    },
                                },
                                {
                                    value : [250, 400],
                                    itemStyle : {
                                        normal : {
                                            color : '#0d5fff'
                                        }
                                    },
                                },
                                {
                                    value : [275, 300],
                                    itemStyle : {
                                        normal : {
                                            color : '#0d5fff'
                                        }
                                    },
                                },

                                {
                                    value : [400, 350],
                                    itemStyle : {
                                        normal : {
                                            color : '#fa3271'
                                        }
                                    },
                                    symbolSize : 20
                                },
                                {
                                    value : [420, 360],
                                    itemStyle : {
                                        normal : {
                                            color : '#fa3271'
                                        }
                                    }
                                },
                                {
                                    value : [370, 320],
                                    itemStyle : {
                                        normal : {
                                            color : '#fa3271'
                                        }
                                    }
                                },
                                {
                                    value : [360, 290],
                                    itemStyle : {
                                        normal : {
                                            color : '#fa3271'
                                        }
                                    }
                                },
                                {
                                    value : [390, 270],
                                    itemStyle : {
                                        normal : {
                                            color : '#fa3271'
                                        }
                                    }
                                },

                                {
                                    value : [390, 240],
                                    itemStyle : {
                                        normal : {
                                            color : '#01c273'
                                        }
                                    }
                                },
                                {
                                    value : [370, 200],
                                    itemStyle : {
                                        normal : {
                                            color : '#01c273'
                                        }
                                    }
                                },
                                {
                                    value : [310, 170],
                                    itemStyle : {
                                        normal : {
                                            color : '#01c273'
                                        }
                                    }
                                },

                                {
                                    value : [150, 260],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    },
                                    symbolSize : 20
                                },
                                {
                                    value : [220, 270],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                },
                                {
                                    value : [210, 200],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                },
                                {
                                    value : [240, 230],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                },
                                {
                                    value : [160, 180],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                },
                                {
                                    value : [120, 170],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                },
                                {
                                    value : [260, 180],
                                    itemStyle : {
                                        normal : {
                                            color : '#faab42'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };
                let dom = this.$refs.platform_map;
                let myChart = this.$echarts.init(dom);
                myChart.setOption(option);
            },
            setSliderData : function () {
                this.sliderData = this.sliderData.concat(this.sliderData.splice(0,1));
            }
        },
        mounted() {
            this.platform_map();
        }
    }
</script>

<style lang="scss" scoped>
    #platform{
        .content_left{
            width: 1000px;
            .map{
                height: 851px;
                background: url('../assets/platform_map.png') no-repeat center;
                div{
                    height: 851px;
                }
            }
        }
        .content_right{
            width: 419px;
            .content_right_top{
                height: 165px;
                margin-bottom: 18px;
                background: url('../assets/platform_content_right_top.png') no-repeat center;
                padding: 0 20px;
                header{
                    font-size: 20px;
                    color: #4cc7ff;
                    line-height: 70px;
                    height: 70px;
                }
                ul{
                    li{
                        width: 50%;
                        span{
                            color: #4cc7ff;
                            font-size: 18px;
                            line-height: 30px;
                        }
                        i{
                            font-size: 40px;
                            color: #e7d91e;
                            line-height: 50px;
                        }
                    }
                }
            }
            .content_right_bottom{
                height: 756px;
                background: url('../assets/platform_content_right_bottom.png') no-repeat center;
                color: #fff;
                header{
                    height: 56px;
                    line-height: 56px;
                    padding-left: 30px;
                }
                section{
                    font-size: 14px;
                    height: 670px;
                    overflow: hidden;
                    position: relative;
                    ul{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 379px;
                        padding: 0 20px;
                        li{
                            box-shadow: 0 0 30px #0e4d7f inset;
                            line-height: 26px;
                            padding: 0 10px;
                            word-break: break-all;
                        }
                        li:not(:last-child){
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
</style>

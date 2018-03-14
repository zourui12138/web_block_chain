<template>
    <div id="blockChain">
        <div class="content clear">
            <div class="fl content_left">
                <header>数据区块</header>
                <section>
                    <div>
                        <ul v-slider="{speed:speed,distance:distance,setSliderData:setSliderData}">
                            <li v-for="i in sliderData" :style="{backgroundColor:i.color}">{{i.data}}</li>
                        </ul>
                    </div>
                </section>
            </div>
            <div class="fl content_center">
                <header></header>
                <section>
                    <div>
                        <ul>
                            <li>姓名：<span>{{sliderData[0].blockData.name}}</span></li>
                            <li>高度：<span>{{sliderData[0].blockData.height}}</span></li>
                            <li>创建时间：<span>{{sliderData[0].blockData.date}}</span></li>
                            <li>哈希值：<span>{{sliderData[0].blockData.hash}}</span></li>
                            <li>父哈希值：<span>{{sliderData[0].blockData.parentHash}}</span></li>
                            <li>加密方式：<span>{{sliderData[0].blockData.key}}</span></li>
                            <li><p>{{sliderData[0].blockData.msg}}</p></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div class="fl content_right">
                <header>上链信息</header>
                <section>
                    <div>
                        <ul v-slider="{speed:speedRight,distance:distanceRight,setSliderData:setSliderDataRight}">
                            <li class="clear" v-for="i in sliderDataRight">
                                <h1 class="fl">姓名：<span>{{i.name}}</span></h1>
                                <h1 class="fl">时间：<span>{{i.date}}</span></h1>
                                <h2 class="fl">个人信息：<span>{{i.msg}}</span></h2>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './footerComponent'

    export default {
        name: "block-chain",
        components: {Footer},
        data() {
            return{
                distance : 100,
                speed : 3000,
                sliderData : [
                    {
                        data: 'Block1', color: '#fcd349',
                        blockData: {
                            name: '赵XX',
                            height: '456321',
                            date: '2018-03-01 23:59:59',
                            hash: '424719420be090c4783af53144a75eca7ab6738c1b84bcb5ac9dc05c076e99d9',
                            parentHash: '7ab6738c1b84bcb5ac9dc05c076e99d9348038ad8d6eeb43d9b7f6fa229682f6',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330000，“KEY”：cd7360dc75140b9c244c8b75afe9d82f33d780221f27fa4dde30839e246e94ea,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block2', color: '#0092ff', blockData: {
                            name: '钱XX',
                            height: '965482',
                            date: '2018-03-02 23:59:59',
                            hash: '348038ad8d6eeb43d9b7f6fa229682f6cd7360dc75140b9c244c8b75afe9d82f',
                            parentHash: 'cd7360dc75140b9c244c8b75afe9d82f33d780221f27fa4dde30839e246e94ea',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330001，“KEY”：424719420be090c4783af53144a75eca7ab6738c1b84bcb5ac9dc05c076e99d9,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block3', color: '#00c1c8', blockData: {
                            name: '孙XX',
                            height: '123450',
                            date: '2018-03-03 23:59:59',
                            hash: '33d780221f27fa4dde30839e246e94ea65da478434b95e33182611f247418be5',
                            parentHash: '65da478434b95e33182611f247418be5276466dea479e6349d51055d8d5a6a9d',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330002，“KEY”：276466dea479e6349d51055d8d5a6a9dfe2e1824d722f48c635b23901ea2baf9,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block4', color: '#f55c61', blockData: {
                            name: '李XX',
                            height: '965482',
                            date: '2018-03-04 23:59:59',
                            hash: '276466dea479e6349d51055d8d5a6a9dfe2e1824d722f48c635b23901ea2baf9',
                            parentHash: 'fe2e1824d722f48c635b23901ea2baf9a10f13b828eae6e9435bda66ff236aca',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330003，“KEY”：33d780221f27fa4dde30839e246e94ea65da478434b95e33182611f247418be5,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block5', color: '#fcd349', blockData: {
                            name: '周XX',
                            height: '321457',
                            date: '2018-03-05 23:59:59',
                            hash: 'a10f13b828eae6e9435bda66ff236acac15d7f57f881907e12829e9e8835f0a4',
                            parentHash: 'c15d7f57f881907e12829e9e8835f0a4e1c9b5893e7826f2a074f2d6c8090fd2',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330004，“KEY”：37466260a66abbe0aafc993e1fef232c595f3c9994d1addb31b801355ab56880,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block6', color: '#0092ff', blockData: {
                            name: '吴XX',
                            height: '321459',
                            date: '2018-03-06 23:59:59',
                            hash: 'e1c9b5893e7826f2a074f2d6c8090fd237466260a66abbe0aafc993e1fef232c',
                            parentHash: '37466260a66abbe0aafc993e1fef232c595f3c9994d1addb31b801355ab56880',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330005，“KEY”：c15d7f57f881907e12829e9e8835f0a4e1c9b5893e7826f2a074f2d6c8090fd2,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block7', color: '#00c1c8', blockData: {
                            name: '郑XX',
                            height: '658429',
                            date: '2018-03-07 23:59:59',
                            hash: '595f3c9994d1addb31b801355ab568808f9afddfa02620ba9f87e2848f4c39d4',
                            parentHash: '8f9afddfa02620ba9f87e2848f4c39d4c323411266153ee60dd0eb46ea95878d',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330006，“KEY”：f7ae5620f73a7d3dd444ef91eb9cf9a33576a9f3bc69dc1191373cadb2739edd,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    },
                    {
                        data: 'Block8', color: '#f55c61', blockData: {
                            name: '王XX',
                            height: '741235',
                            date: '2018-03-08 23:59:59',
                            hash: 'c323411266153ee60dd0eb46ea95878df7ae5620f73a7d3dd444ef91eb9cf9a3',
                            parentHash: 'f7ae5620f73a7d3dd444ef91eb9cf9a33576a9f3bc69dc1191373cadb2739edd',
                            key: 'SHA256',
                            msg: '数据：{“ID”：XA3564330007，“KEY”：595f3c9994d1addb31b801355ab568808f9afddfa02620ba9f87e2848f4c39d4,"Status"：Normal，"effdate”：2018-1-1，“expdate”：3000-1-1}'
                        }
                    }
                ],
                distanceRight : 131,
                speedRight : 3000,
                sliderDataRight : [
                    {name:'赵XX',date:'2018-03-01 23:59:59',msg:'块数据1 | 秘钥1'},
                    {name:'钱XX',date:'2018-03-02 23:59:59',msg:'块数据2 | 秘钥2'},
                    {name:'孙XX',date:'2018-03-03 23:59:59',msg:'块数据1 | 秘钥1'},
                    {name:'李XX',date:'2018-03-04 23:59:59',msg:'块数据2 | 秘钥2 | 块数据1 | 秘钥1'},
                    {name:'周XX',date:'2018-03-05 23:59:59',msg:'块数据1 | 秘钥1'},
                    {name:'吴XX',date:'2018-03-06 23:59:59',msg:'块数据2 | 秘钥2 | 块数据1 | 秘钥1'},
                    {name:'郑XX',date:'2018-03-07 23:59:59',msg:'块数据1 | 秘钥1'},
                    {name:'王XX',date:'2018-03-08 23:59:59',msg:'块数据2 | 秘钥2 | 块数据1 | 秘钥1'}
                ]
            }
        },
        methods: {
            setSliderData : function () {
                this.sliderData = this.sliderData.concat(this.sliderData.splice(0,1));
            },
            setSliderDataRight : function () {
                this.sliderDataRight = this.sliderDataRight.concat(this.sliderDataRight.splice(0,1));
            }
        }
    }
</script>

<style lang="scss" scoped>
    #blockChain{
        .content{
            height: 826px;
            background: url('../assets/blockChain_bg.png') no-repeat center;
            margin-bottom: 10px;
            margin-top: 24px;
            header{
                height: 40px;
                font-size: 24px;
                text-align: center;
                color: #ccebf8;
                padding-top: 40px;
                line-height: 40px;
            }
            section{
                height: 636px;
                padding-top: 26px;
                padding-bottom: 10px;
            }
            .content_left{
                width: 230px;
                section{
                    div{
                        height: 636px;
                        overflow: hidden;
                        position: relative;
                        ul{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 230px;
                            li{
                                width: 160px;
                                margin: 0 auto 20px;
                                height: 80px;
                                line-height: 80px;
                                text-align: center;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .content_center{
                width: 555px;
                section{
                    background: url('../assets/blockChain_content_center_bg.png') no-repeat center;
                    div{
                        width: 453px;
                        height: 636px;
                        margin: auto;
                        background: url('../assets/blockChain_content_center_border.png') no-repeat center;
                        ul{
                            color: #ccebf8;
                            line-height: 50px;
                            padding: 22px 22px 22px 52px;
                            li{
                                word-break:break-all;
                                p{
                                    height: 192px;
                                    padding: 0 8px;
                                    background-color: #0a283d;
                                }
                            }
                        }
                    }
                }
            }
            .content_right{
                width: 648px;
                section{
                    div{
                        height: 635px;
                        overflow: hidden;
                        position: relative;
                        ul{
                            position: absolute;
                            top: 0;
                            width: 648px;
                            li{
                                width: 500px;
                                margin: 0 auto 20px;
                                height: 72px;
                                line-height: 36px;
                                padding: 18.5px 30px;
                                color: #ccebf8;
                                border: 1px solid #3be5fe;
                                h1{
                                    width: 250px;
                                    font-size: 14px;
                                }
                                h2{
                                    width: 500px;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

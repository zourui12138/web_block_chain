<template>
    <VuePerfectScrollbar v-scroll class="scrollbar">
        <div id="app">
            <header class="header">基于区块链信用城市</header>
            <div class="clear">
                <aside class="aside fl">
                    <ul>
                        <li :class="{current : platformNav}" @click="href('/platform')"><h3>平台展示</h3></li>
                        <li :class="{current : blockChainNav}" @click="href('/blockChain')"><h3>数据区块</h3></li>
                        <li :class="{current : baasNav}" @click="href('/baas')"><h3>BAAS</h3></li>
                    </ul>
                </aside>
                <section class="main fr"><router-view/></section>
            </div>
        </div>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: 'App',
        components: {VuePerfectScrollbar},
        data() {
            return{
                platformNav : false,
                blockChainNav : false,
                baasNav : false,
            }
        },
        methods: {
            href (arg) {
                this.platformNav = false;
                this.blockChainNav = false;
                this.baasNav = false;
                switch (arg){
                    case '/platform' : this.platformNav = true;break;
                    case '/blockChain' : this.blockChainNav = true;break;
                    case '/bass' : this.baasNav = true;break;
                }
                this.$router.push({ path: arg })
            }
        },
        beforeMount() {
            switch (this.$route.name){
                case 'platform' : this.platformNav = true;break;
                case 'blockChain' : this.blockChainNav = true;break;
                case 'baas' : this.baasNav = true;break;
            }
        }
    }
</script>

<style lang="scss">
    html {
        height: 100%;
    }
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        /*字体抗锯齿,使用后字体看起来会更清晰舒服*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        height: calc(100%);
        min-width: 1920px;
    }
    ul, ol, p, h1, h2, h3, h4, h5, h6, button, input {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }
    input, button {
        outline: none;
        border: none;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
</style>

<style lang="scss" scoped>
    .scrollbar{
        height: calc(100%);
        #app{
            height: 1040px;
            padding: 20px 55px;
            background: url('./assets/bg.png') no-repeat center;
            .header{
                height: 92px;
                text-align: center;
                line-height: 67px;
                font-size: 30px;
                color: #fff;
                background: url('./assets/header_bg.png') no-repeat bottom center;
            }
            .aside{
                width: 333px;
                height: 939px;
                background: url('./assets/aside_bg.png') no-repeat center;
                ul{
                    padding-top: 10px;
                    li{
                        width: 306px;
                        height: 107px;
                        margin: 30px auto 0;
                        padding-top: 23px;
                        background: url('./assets/aside_nav.png') no-repeat center;
                        transition: all .2s;
                        h3{
                            text-align: center;
                            font-size: 30px;
                            color: #fff;
                            height: 82px;
                            width: 258px;
                            line-height: 82px;
                            margin-left: 26px;
                            cursor: pointer;
                        }
                    }
                    li.current,li:hover{
                        background: url('./assets/aside_nav_current.png') no-repeat center;
                    }
                }
            }
            .main{
                width: 1433px;
                position: relative;
            }
        }
    }
</style>

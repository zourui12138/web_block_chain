// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// 引入jquery
import $ from 'jquery'
// 滚动条，页面切换滚动到页面顶部
Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

// 轮播
Vue.directive('slider', {
    inserted: function (el,binding) {
        let distance = binding.value.distance;
        let speed = binding.value.speed;
        setInterval(function () {
            $(el).stop().animate({top : -distance+'px'},function () {
                $(this).css('top',0);
                binding.value.setSliderData();
            });
        }, speed);
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});

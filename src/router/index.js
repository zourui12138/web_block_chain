import Vue from 'vue'
import Router from 'vue-router'

import Platform from '~/components/platform'
import BlockChain from '~/components/blockChain'
import Baas from '~/components/baas'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/platform'
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform
        },
        {
            path: '/blockChain',
            name: 'blockChain',
            component: BlockChain
        },
        {
            path: '/baas',
            name: 'baas',
            component: Baas
        }
    ]
});

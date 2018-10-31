import Vue from 'vue'
import Router from 'vue-router'
// 预览界面
import index from '../views/index/index.vue';

// 搜索页面
import search from '../views/searchPage/index/index.vue';

// 小区住宅展示页面
import housingEstate from '../views/housingEstate/index.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/housing-estate',
      name: 'housingEstate',
      component: housingEstate
    }
  ],
  mode: 'history',
})

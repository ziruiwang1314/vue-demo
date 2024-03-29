import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(Vuex)
Vue.use(Router)



const HelloWorld = ()=>import("@/components/HelloWorld");
const home = ()=>import("@/pages/home");
const lazyLoad = ()=>import("@/pages/lazyLoad");
const index = ()=>import("@/pages/index");
const tableTest = ()=>import("@/pages/tableTest");
const fatherToSon = ()=>import("@/pages/father-to-son");
const getFromSon = ()=>import("@/pages/get-from-son");
const brothers =()=>import("@/pages/brothers");
const parentSlots =()=>import("@/pages/parentSlots");
const test =()=>import("@/pages/test");
const bidirectionalDataBinding =()=>import("@/pages/bidirectional-data-binding");
const dynamicComponent =()=>import("@/pages/dynamic-component");
const lazyComponent =()=>import("@/pages/lazy-component");
const vuexTest =()=>import("@/pages/vuexTest");
const vuexTest2 =()=>import("@/pages/vuexTest2");
const vuexTest3 =()=>import("@/pages/vuexTest3");
const directive =()=>import("@/pages/directiveComponent");
const eCharts01 =()=>import("@/pages/echarts01");
const list =()=>import("@/pages/list");
const listDetail =()=>import("@/pages/listDetail");
const notFound =()=>import("@/pages/notFound");


const routes = [
  {
    path:"/",
    redirect:'/index'
  },
  {
    path: '/index',
    component: home,
    children: [
      {
        path: '/',
        component: index,
        meta:[]
      },
      {
        path: '/lazyLoad',
        component: lazyLoad,
        meta: ['导航二','lazyLoad']
      },
      {
        path: '/tableTest',
        component: tableTest,
        meta:['导航二','tableTest']
      },
      {
        path: '/fatherToSon',
        component: fatherToSon,
        meta:['导航二','fatherToSon']
      },
      {
        path: '/getFromSon',
        component: getFromSon,
        meta:['导航二','getFromSon']
      },
      {
        path: '/brothers',
        component: brothers,
        meta:['导航二','brothers']
      },
      {
        path: '/parentSlots',
        component: parentSlots,
        meta:['导航二','parentSlots']
      },
      {
        path: '/test',
        component: test,
        meta:['导航二','test']
      },
      {
        path: '/bidirectionalDataBinding',
        component: bidirectionalDataBinding,
        meta:['导航二','bidirectionalDataBinding']
      },
      {
        path: '/dynamicComponent',
        component: dynamicComponent,
        meta:['导航二','dynamicComponent']
      },{
        path: '/lazyComponent',
        component: lazyComponent,
        meta:['导航二','lazyComponent']
      },{
        path: '/vuexTest',
        component: vuexTest,
        meta:['导航二','vuexTest']
      },{
        path: '/vuexTest2',
        component: vuexTest2,
        meta:['导航二','vuexTest2']
      },{
        path: '/vuexTest3',
        component: vuexTest3,
        meta:['导航二','vuexTest3']
      },{
        path: '/directive',
        component: directive,
        meta:['导航二','directive']
      },{
        path: '/eCharts01',
        component: eCharts01,
        meta:['导航二','eCharts01']
      },
      {
        path: '/list',
        component: list,
        meta:['导航二','list']
      },
      {
        path: '/listDetail/:id',
        component: listDetail,
        meta:['导航二','listDetail']
      }
    ]
  },
  {
    path: '*',
    component: notFound
  }
]

export default new Router({
  routes
  //strict: process.env.NODE_ENV !== 'production',
})

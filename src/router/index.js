import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
import myinfo from '../views/myinfo/index.vue'
import lanhu_shangpinxiangqing from '../views/lanhu_shangpinxiangqing/index.vue'
import lanhu_kuaijiechongzhi from '../views/lanhu_kuaijiechongzhi/index.vue'
import lanhu_kuaijietixian from '../views/lanhu_kuaijietixian/index.vue'
import lanhu_dianpu from '../views/lanhu_dianpu/index.vue'
import lanhu_xingyunzhuanpan from '../views/lanhu_xingyunzhuanpan/index.vue'
import lanhu_shouye from '../views/lanhu_shouye/index.vue'
import lanhu_shangjiatuijianfuli from '../views/lanhu_shangjiatuijianfuli/index.vue'
import lanhu_fenlei from '../views/lanhu_fenlei/index.vue'
import lanhu_denglukaobei from '../views/lanhu_denglukaobei/index.vue'
import lanhu_zhuce from '../views/lanhu_zhuce/index.vue'
import lanhu_goumaishangpin from '../views/lanhu_goumaishangpin/index.vue'
import lanhu_dingdanxiangqing from '../views/lanhu_dingdanxiangqing/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/myinfo',
    name: 'myinfo',
    component: myinfo
  },
  {
    path: '/lanhu_shangpinxiangqing',
    name: 'lanhu_shangpinxiangqing',
    component: lanhu_shangpinxiangqing
  },
  {
    path: '/lanhu_kuaijiechongzhi',
    name: 'lanhu_kuaijiechongzhi',
    component: lanhu_kuaijiechongzhi
  },
  {
    path: '/lanhu_kuaijietixian',
    name: 'lanhu_kuaijietixian',
    component: lanhu_kuaijietixian
  },
  {
    path: '/lanhu_dianpu',
    name: 'lanhu_dianpu',
    component: lanhu_dianpu
  },
  {
    path: '/lanhu_xingyunzhuanpan',
    name: 'lanhu_xingyunzhuanpan',
    component: lanhu_xingyunzhuanpan
  },
  {
    path: '/lanhu_shouye',
    name: 'lanhu_shouye',
    component: lanhu_shouye
  },
  {
    path: '/lanhu_shangjiatuijianfuli',
    name: 'lanhu_shangjiatuijianfuli',
    component: lanhu_shangjiatuijianfuli
  },
  {
    path: '/lanhu_fenlei',
    name: 'lanhu_fenlei',
    component: lanhu_fenlei
  },
  {
    path: '/lanhu_denglukaobei',
    name: 'lanhu_denglukaobei',
    component: lanhu_denglukaobei
  },
  {
    path: '/lanhu_zhuce',
    name: 'lanhu_zhuce',
    component: lanhu_zhuce
  },
  {
    path: '/lanhu_goumaishangpin',
    name: 'lanhu_goumaishangpin',
    component: lanhu_goumaishangpin
  },
  {
    path: '/lanhu_dingdanxiangqing',
    name: 'lanhu_dingdanxiangqing',
    component: lanhu_dingdanxiangqing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

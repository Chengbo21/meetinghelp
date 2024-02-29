import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login' //导入组件（页面）
import index from '@/components/index' 
import menus from '@/components/menus' 
import headers from '@/components/headers' 
Vue.use(Router)


// 路由：配置页面跳转路径
export default new Router({
  routes: [
    {
      path: '/',  //根目录
      name: 'login',
      component: login
    },
    {
      path:"/index",
      redirect:"/index/Homepage" //重定向
    },
    {
      path: '/index',  //首页
      name: 'index',
      component: index,
      children:[
        {
          path:"homepage", 
          name:"首页",

          component:()=>import("../components/Homepage.vue")

        },
        {
          path:"userList", 
          name:"用户列表",

          component:()=>import("../components/user/UserList.vue")

        },
        {
          path:"addUser", 
          name:"新增用户",

          component:()=>import("../components/user/AddUser.vue")

        },
        {
          path:"addMusic", 
          name:"新增歌曲",

          component:()=>import("../components/music/AddMusic.vue")

        },
        {
          path:"musicList", 
          name:"歌曲列表",

          component:()=>import("../components/music/MusicList.vue")

        }
      ]
    },
    {
      path: '/menus',  //菜单栏
      name: 'menus',
      component: menus
    },
    {
      path: '/headers',  //顶部栏
      name: 'headers',
      component: headers
    }
  ]
})

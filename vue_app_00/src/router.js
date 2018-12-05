import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件
import homeContainer from "./components/tabbar/HomeContainer.vue"
import FamilyContainer from "./components/tabbar/FamilyContainer.vue"
import listContainer from "./components/listContainer.vue"
import SortContainer from "./components/tabbar/SortContainer"
import CartContainer from "./components/tabbar/CartContainer"
import MyContainer from "./components/tabbar/MyContainer"
import SearchContainer from "./components/shop/SearchContainer"
import LoginContainer from  "./components/sub/LoginContainer"
import ProductContainer from  "./components/shop/ProductContainer"
Vue.use(Router)
//2:配置访问自定义组件路径
//   {path访问路径 component  组件名称}
export default new Router({
    mode: 'history',
  routes: [
      {path:"/",redirect:"/home"},
      {path:"/home",component:homeContainer,meta:{showBottomNav:true,showTopNav:true}},
      {path:"/home/family",component:FamilyContainer,meta:{showBottomNav:true,showTopNav:true}},
      {path:"/home/list",component:listContainer,meta:{showBottomNav:true,showTopNav:true}},
      {path:"/home/sort",component:SortContainer,meta:{showBottomNav:true,showTopNav:true}},
      {path:"/home/cart",component:CartContainer,meta:{showBottomNav:true,showTopNav:true,auth:true},},
      {path: '/home/my', component: MyContainer, meta:{showBottomNav:false,showTopNav:true}},
      {path:"/home/search",component:SearchContainer,meta:{showBottomNav:false,showTopNav:true}},
      {path:"/home/login",component:LoginContainer,meta:{showBottomNav:false,showTopNav:true}},
      {path:"/home/pro",component:ProductContainer,meta:{showBottomNav:false,showTopNav:false},},
      ],

})




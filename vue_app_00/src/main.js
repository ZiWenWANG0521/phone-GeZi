import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//引入组件mintui库Header
//-引入指定组件
/*import {Header,Swipe,SwipeItem} from "mint-ui";
import {Lazyload} from "mint-ui";
import {Button} from "mint-ui";

//-注册当前项目中 <mt-header>    "tt-header"
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);  //"mt-swipe"
Vue.component(SwipeItem.name,SwipeItem);
Vue.use(Lazyload);*/
import MintUI from "mint-ui"
Vue.use(MintUI)

import VueResource from "vue-resource";
Vue.use(VueResource)
Vue.filter("dateFilter",function(val){
       var data=new Date(val);
       var y=data.getFullYear();
       var m=data.getMonth();
       var d=data.getDay();
      return  `${y}-${m}-${d}`;
})
Vue.filter("datetimeFilter",function(val){
    var data=new Date(val);
    var y=data.getFullYear();
    var m=data.getMonth();
    var d=data.getDay();
    var h=data.getHours()
    var miu=data.getMinutes();
    var se=data.getSeconds();

    return `${y}-${m}-${d}-${h}:${miu}:${se}:`
})
Vue.http.options.root="http://127.0.0.1:3000/";
import Vuex from "vuex"
Vue.use(Vuex);
var store=new Vuex.Store({
    state:{count:0,isLogin:0},//购物车商品数量//登录状态
    mutations:{
        increment(state,c){state.count += c}, //参数为共享数据
        substract(state){state.count--},
        ChangeLogin(state,data){//登录状态
            state.isLogin = data;
        }
    },
    getters:{
        isHide:function(state){
            return state.isLogin
        },
        optCount:function(state){
            return state.count
        }
    }
});
router.beforeEach((to,from,next) => {
    if(to.matched.some( m => m.meta.auth)){
// 对路由进行验证
        if(store.state.isLogin=='1') { // 已经登陆
            next()   // 正常跳转到你设置好的页面
        }
        else{
// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
            next({path:'/home/login',query:{ Rurl: to.fullPath} })
        }
    }else{
        next()
    }
})
new Vue({
  router,
  render: h => h(App),
    store
}).$mount('#app')

<template>
 <div class="app-container">
    <!--顶部搜索框-->
     <header id="header" class="mui-bar mui-bar-transparent" v-show="this.$route.meta.showBottomNav">
            <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="百变造型 释放魅力" v-model="input" @keyup.enter="search">
            </div>
             <span class="mui-icon mui-icon-search" @click="search"></span>
             <span class="mui-icon-extra mui-icon-extra-custom"></span>
     </header>
     <router-view>
     </router-view>
     <!--底部-->
     <nav class="mui-bar mui-bar-tab" v-show="this.$route.meta.showTopNav">
         <router-link class="mui-tab-item mui-active" to="/home">
             <span class="mui-icon mui-icon-home"></span>
             <span class="mui-tab-label">首页</span>
         </router-link>
         <router-link class="mui-tab-item" to="/home/sort">
             <span class="mui-icon-extra mui-icon-extra-class mui-icon"></span>
             <span class="mui-tab-label">分类</span>
         </router-link>
         <router-link class="mui-tab-item" to="/home/family">
             <span class="mui-icon-extra mui-icon-extra-heart mui-icon"></span>
             <span class="mui-tab-label">格子家</span>
         </router-link>
         <router-link class="mui-tab-item" to="/home/cart">
             <span class="mui-icon-extra mui-icon-extra-cart mui-icon"></span>
             <span class="mui-tab-label">购物车</span>
         </router-link>
         <a class="mui-tab-item" @click="my">
             <span class="mui-icon mui-icon-contact mui-icon"></span>
             <span class="mui-tab-label">我的</span>
         </a>
     </nav>
 </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                    input:""
            }
        },
        methods: {
            my() {
                this.$router.push("/home/my");
            },
            search() {
                if(this.input!=""){
                this.$router.push("/home/search?kwords=" + this.input);
                this.input=""

                }
            }
        }

    }
</script>
<style>
    .show{
        display: none;
    }
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }
   #header{
       background:#FFFFFF;
   }
    #header>.mui-input-row>.mui-input-clear{
        width:92%;
        border-radius: 11px;
        position: relative;
    }
   #header>.mui-icon{
       position: absolute;
       top:0;
       left:13px;
       color:#797979;
   }
   #header>.mui-icon-extra{
       position: absolute;
       top:10px;
       right:7px;
       color:#000000;
   }
    .mui-tab-label{
        font-size:12px;
        display:block;
    }

</style>


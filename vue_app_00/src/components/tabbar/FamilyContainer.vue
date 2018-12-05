<template>
    <div class="app-familycontainer">
     <div class="mt-border">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" class="mt-ft-color">大家晒</mt-tab-item>
            <mt-tab-item id="2" class="mt-ft-color">代言人</mt-tab-item>
            <mt-tab-item id="3" class="mt-ft-color">超级导购</mt-tab-item>
        </mt-navbar>
     </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
               <div class="mt-flex-list">
                   <div class="flex-item">
                       <div class="img-item item-1"><span class="mui-icon mui-icon-camera"></span></div>
                       <p class="item-msg">我要晒单</p>
                   </div>
                   <div class="flex-item">
                       <div class="img-item item-2"><span class="mui-icon mui-icon-personadd"></span></div>
                       <p class="item-msg">发现好友</p>
                   </div>
                   <div class="flex-item">
                       <div class="img-item item-3"><span class="mui-icon mui-icon-pengyouquan"></span></div>
                       <p class="item-msg">我的主页</p>
                   </div>
                   <div class="flex-item">
                       <div class="img-item item-4"><span class="mui-icon mui-icon-videocam"></span></div>
                       <p class="item-msg">精彩专辑</p>
                   </div>
               </div>
                <div class="mt-img-swiper">
                    <div class="img-items">
                        <div class="item">
                        <img src="../../img/img/nav/2017092110004117550434.jpg" alt="">
                         </div>
                        <div class="item">
                            <img src="../../img/img/nav/2017062114001634538895.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="../../img/img/nav/2017112010001657815774.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="../../img/img/nav/2017102513002551513698.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="mt-content" id="mt-content" :class="fixed ?'isFixed':''">
                    <mt-navbar v-model="selected_content">
                        <mt-tab-item id="1" class="mt-ft-color">最新</mt-tab-item>
                        <mt-tab-item id="2" class="mt-ft-color">精选</mt-tab-item>
                    </mt-navbar>
                </div>
                <div class="mt-content-item">
                    <mt-tab-container v-model="selected_content">
                        <mt-tab-container-item id="1">
                            <div class="mt-tab-content">
                                <div class="mui-card" v-for="item in list">
                                        <div class="card-item">
                                        <img :src="item.img_url" alt="">
                                        </div>

                                    <div class="mui-card-content">
                                        <div class="mui-card-content-inner">
                                            <p>{{item.msg}}</p>
                                        </div>
                                    </div>
                                    <div class="mui-card-footer">
                                        <a class="mui-card-link">
                                            <div class="card-img">
                                            <img :src="item.user_img" alt="">
                                            </div>
                                            <span>{{item.user_name}}</span>
                                        </a>
                                        <a class="mui-card-link">
                                            <span class="mui-icon-extra mui-icon-extra-heart"></span>
                                            <span class="msg-count">3</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <div class="mt-tab-content">
                            <div class="mui-card" v-for="item in lists">
                                <div class="card-item">
                                    <img :src="item.img_url" alt="">
                                </div>

                                <div class="mui-card-content">
                                    <div class="mui-card-content-inner">
                                        <p>{{item.msg}}</p>
                                    </div>
                                </div>
                                <div class="mui-card-footer">
                                    <a class="mui-card-link">
                                        <div class="card-img">
                                            <img :src="item.user_img" alt="">
                                        </div>
                                        <span>{{item.user_name}}</span>
                                    </a>
                                    <a class="mui-card-link">
                                        <span class="mui-icon-extra mui-icon-extra-heart"></span>
                                        <span class="msg-count">3</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="icon-center">
                <span class="icon">
                    <span class="icon-item" style="background:yellow"></span>
                    <span class="icon-item" style="background:#0aa1ed"></span>
                    <span class="icon-item" style="background:#0D1234"></span>
                    <span class="icon-item"style="background:#36CB98"></span>
                </span>
                <span class="err-inner">已加载全部</span>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="err-msg">
                   视频插件加载失败！
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: "FamilyContainer",
        data(){
            return {
               selected:"1",selected_content:"1",list:[],lists:[],fixed:false
            };
        },
        methods:{
            getMsg(){
                var url="http://127.0.0.1:3000/getmsg";
                this.$http.get(url).then(result=>{
                    this.list=result.body
                    console.log(result.body)
                })
            },
            getMsgs(){
                var url="http://127.0.0.1:3000/getmsgs";
                this.$http.get(url).then(result=>{
                    this.lists=result.body
                })
            },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('#mt-content').offsetTop;
                if (scrollTop > offsetTop) {
                    this.fixed = true
                } else {
                    this.fixed = false
                }
            },
            destroyed() {
                window.removeEventListener('scroll', this.handleScroll);
            }
        },
        created(){
            this.getMsg()
            this.getMsgs()
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .isFixed{
        position: fixed;  top:0;  left:0;  right:0;
        z-index: 999;
    }
  .mint-navbar .mint-tab-item.is-selected {
      border-bottom: 1px solid #9bb26c;
      color: #9bb26c;
      margin-bottom: 10px;
  }
    .mint-navbar .mt-ft-color{
        color:rgba(108,26,13,0.4);
    }
  .mint-navbar .mint-tab-item {
      padding-bottom:5px;
      font-size: 15px;
  }
    .mt-border{
        width:100%;
        border-bottom: 1px solid rgba(0,0,0,.1);
        border-top: 5px solid rgba(0,0,0,.1);
    }
    .mt-flex-list{
        width:100%;
        display: flex;
        justify-content: space-around;
        background:#fff;
        padding:10px 0;
    }
  .mt-flex-list .flex-item{
      text-align: center;
      padding-top: 5px;
  }
  .mt-flex-list .flex-item .img-item{
        width:28px;
        height:28px;
        border-radius: 80%;
        margin: auto;
  }
  .mt-flex-list .flex-item .item-msg{
      color:rgb(26,49,62);
  }
  .mt-flex-list .flex-item .item-1{
      background:rgba(175,121,121,.5)
  }
  .mt-flex-list .flex-item .item-2{
       background:rgba(70,137,167,.5)
   }
  .mt-flex-list .flex-item .item-3{
      background:rgba(70,183,46,.5)
  }
  .mt-flex-list .flex-item .item-4{
      background:rgba(95,173,214,.5)
  }
  .mt-flex-list .flex-item .img-item span{
      width:100%;
      height:100%;
      color:#fff;
      line-height: 28px;
  }
  .mt-img-swiper{
      width:100%;
      background:#fff;
      padding-top:4px;
      border-top:1px solid rgba(0,0,0,.1);
      border-bottom:1px solid rgba(0,0,0,.1);
  }
  .mt-img-swiper .img-items{
      overflow-x:auto;
      white-space: nowrap;
  }
  .mt-img-swiper .img-items:first-child{
      padding-left: 6px;
  }
  .mt-img-swiper .img-items .item{
      display: inline-block;
      margin-right: 4px;
  }
  .mt-img-swiper .img-items .item img{
      width:200px;
      height:100px;
  }
    .mt-content{
        margin-top:7px;
    }
  .mui-card .mui-card-content .mui-card-content-inner p{
      font-size:12px;
      margin-bottom:0;
  }
    .mt-content-item{
        margin-top: 6px;
    }
  .mt-tab-content{
      height:100%;
      overflow: hidden;
  }
  .mui-card{
      float:left;
      width:165px;
  }
  .card-item{
      width:100%;
      height:150px;
  }
   .card-item>img{
        width:100%;
        height:100%;
    }
  .mui-card-footer{
      padding:0;
  }
  .mui-card-footer .mui-card-link{
      margin-left: 2px;
      line-height:10px;
  }
  .mui-card-footer .mui-card-link .card-img{
      display: inline-block;
      width:24px;
      height:24px;
      border-radius: 50%;
  }
    .mui-card-footer .mui-card-link .card-img>img{
            width:100%;
        height:100%;
    }
  .mui-card-footer .mui-card-link span{
      font-size:10px;
      color:rgba(165,54,54,0.5);
      display: inline-block;
      margin-top:6px;
      margin-left:3px;
  }
  .mui-card-footer .mui-card-link .msg-count{
      margin-right: 5px;
  }
  .icon-center{
      margin:0 auto;
      width:100px;
      height:100px;
      margin-top: 10px;
  }
    .icon{
        width:20px;
        height:20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        float:left;
        margin-right: 5px;

    }

   .err-inner{
        float:left;
        color:#9B98AF;
    }
    .icon-item{
        border-radius: 50%;
        display: inline-block;
        background: #0aa1ed;
        width:5px;
        height:5px;
        margin:1px 1px 0 1px;
    }
    .err-msg{
        color:#5a6268;
        width:150px;
        height:100px;
        margin:0 auto;
    }
</style>
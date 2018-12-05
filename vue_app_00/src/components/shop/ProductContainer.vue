<template>
    <div class="pro-container" v-if="img" :style="[note,{backgroundImage:'url('+img+')'}]">
        <div class="pro-top">
            <span class="mui-icon mui-icon-arrowleft" style="float:left;line-height: 40px;" @click="jumplast"></span>
            <span class="mui-icon mui-icon-redo" style="float:right;line-height: 40px;"></span>
        </div>
        <div style="width:100%;height:40px;"></div>
        <div class="pro-body">
            <div class="pro-Img"></div>
            <div class="pro-content">
                <div class="pro-server" v-for="item in pro">
                <p class="pro-content-title">{{item.title}}</p>
                <p class="pro-content-detaile">{{item.title}}</p>
                <p class="pro-content-price">
                    <span>￥{{item.price.toFixed(2)}}</span><br>
                    <span>国内参考价&nbsp;￥{{item.price_old.toFixed(2)}}&nbsp;&nbsp;</span>
                    <span>省￥{{parseInt(item.price_old-item.price)}}</span>
                </p>

                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span id="huodongming">促销</span>
                            <p class="huodong">直降</p>
                            <span style="font-size: 12px; ">商品直降</span>
                        </a>
                    </li>
                </ul>
                <div class="pro-content-country">
                    <p>
                    <img :src="item.img_logo" alt="">
                    </p>

                </div>
                </div>
                <div style="width:100%; height:10px; background:#F5F2F2"></div>
                <div class="pro-content-tab">
                   <ul class="tab-list">
                       <li class="tab-list-item">
                           <a class="item">
                             支持使用花呗分期付款
                               <span class="mui-icon mui-icon-arrowright"></span>
                           </a>
                       </li>
                       <li class="tab-list-item" @click="isShow">
                           <a class="item">
                                <span style="border-right: 1px solid rgba(197,193,199,.3); padding:0 12px 0 5px;">已选</span>
                               <span style="padding:0 5px 0 18px;color:#bbb;">"2罐"</span>
                               <span class="mui-icon mui-icon-arrowright"></span>
                           </a>
                       </li>
                       <li class="tab-list-item">
                           <a class="item">
                               <span>运费:包邮 商品重量:2250.00g</span><br>
                               &nbsp;&nbsp;<span style="display: inline-block;width: 280px;color:#bbb;font-size: 11px;">由宝贝格子德国慕尼黑DGNB仓团队发货,配送时间3-5个工作日</span>
                               <span class="mui-icon mui-icon-arrowright"></span>
                           </a>
                       </li>
                       <li class="tab-list-item">
                           <a class="item">
                               <span>关税</span><br>
                               &nbsp;&nbsp;<span style="color:#bbb;font-size: 11px;">个人邮寄进境物品海关依法征收进口税</span>
                               <span class="mui-icon mui-icon-arrowright"></span>
                           </a>
                       </li>
                       <li class="tab-list-item">
                           <a class="item">
                              宝贝格子保证
                               <span class="mui-icon mui-icon-arrowright"></span>
                           </a>
                       </li>
                   </ul>
                </div>
                <div style="width:100%; height:10px; background:#F5F2F2"></div>
                <div class="pro-content-tab">
                    <ul class="tab-list">
                        <li class="tab-list-item">
                            <a class="item">
                                用户评论 <span>(0)</span>
                                <span class="mui-icon mui-icon-arrowright"></span>
                            </a>
                        </li>
                        <li class="tab-list-item">
                            <a class="item">
                                <span style="color:#bbb;display: block; margin:0 auto; width:200px;">还没有评论,快来抢沙发~</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="width:100%; height:10px; background:#F5F2F2"></div>
        <div style="width: 100%;height:40px;"></div>

        <div class="pro-bottom">
            <div class="pro-bottom-nav">
                <div class="nav-items">

                <router-link :to="'/home/cart?id='+this.$route.query.id">
                    <span class="mui-icon-extra mui-icon-extra-cart" style="position: relative">
                        <span class="mui-badge mui-badge-primary" style="line-height:12px;position: absolute;left:13px;top:8px;padding:0 3px;">{{this.$store.getters.optCount}}</span>
                    </span>
                </router-link>
                <span class="mui-icon-extra mui-icon-extra-custom"></span>
                <span class="mui-icon-extra mui-icon-extra-heart" @click="islogin"></span>
                </div>
                <div class="btn">
                <span style="background:black;display: inline-block;width: 90px;height:100%;color:#fff;text-align: center " @click="addCart">加入购物车</span>
                <span style="background:#933636;display: inline-block;width: 90px;height:100%;color:#fff;text-align: center">立即购买</span>
                </div>
            </div>
            <mt-popup v-model="test" style="width:100%" position="bottom">
                <div class="choose-pro" style="width:100%">
                    <div class="choose-top">
                        <div class="choose-img">
                            <img :src="img">
                        </div>
                        <span>￥{{priceOpt}}</span>
                    </div>
                    <div class="choose-body">
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            质量
                            <span @click="ischeck(1)" :class="isred==1?'isred':''">2罐</span>
                            <span @click="ischeck(2)" :class="isred==2?'isred':''">4罐</span>
                            <span @click="ischeck(3)" :class="isred==3?'isred':''">6罐</span>
                        </p>
                    </div>
                    <div class="choose-bottom">
                        <div style="display:flex;height:60px;margin-top: 25px;">
                            <span style="margin:0 10px;">数量</span>
                            <ul style="width:78px;height:25px; list-style: none; overflow: hidden">
                                <li style="border-right: 1px  solid rgba(0,0,0,.3)" @click="ss">-</li>
                                <li>
                                    <input type="text" v-model="count">
                                </li>
                                <li style="border-left: 1px solid rgba(0,0,0,.3)" @click="add">+</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </mt-popup>
        </div>

    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: "ProductContainer",
        data(){
            return {
                    pro:[],
                    test:false,
                    bacimage:"",
                    isred:1,
                    price:"",
                    count:0,
                    img:"",
                    title:"",
                    note:{
                        backgroundAttachment:'fixed',
                        backgroundRepeat:'no-repeat',
                        backgroundPositionY:'10%',
                        backgroundPositionX:'center',
                        backgroundColor:'#F5F2F2'
                    }

            }
        },
        computed:{
          priceOpt(){
             return parseInt(this.price*this.count)
          }
        },
        methods:{
            islogin(){
                if(this.$store.getters.isHide=="0"){
                    this.$router.push("/home/login")
                }else{
                    Toast("已收藏")
                }
            },
            jumplast(){
                this.$router.go(-1)
            },
            product(){
                var sid=this.$route.query.id;
                var url="http://127.0.0.1:3000/searchpro?sid="+sid;
                this.$http.get(url).then(result=>{
                    this.pro=result.body;
                    this.bacimage=result.body[0].img_url;
                    this.price=result.body[0].price;
                    this.img=result.body[0].img_url;
                    this.title=result.body[0].title;
                })
            },
            ischeck(i){
                this.isred=i
            },
            add(){
                this.count++
            },
            ss(){
                if(this.count>1){
                    this.count--
                }
            },
            isShow(){
                this.test=true
            },
            addCart(){
                      var url="http://127.0.0.1:3000/addCart?id="+this.$route.query.id+"&count="+this.count+"&price="+this.price+"&img_url="+this.img+"&title="+this.title;
                      this.$http.get(url).then(result=>{
                         if(result.body.code==1){
                             this.$store.commit('increment',this.count);
                         }
                      })
            }
        },
        created(){
            this.product()
        },
        mounted(){
            this.add()
            this.ss()

        },

    }
</script>
<style scoped>
    .isred{
        background: red;
        color:#fff;
    }
.pro-container{
    margin-top: -40px;
    margin-bottom: -50px;

}
.pro-container .pro-top{
    width:100%;
    height:40px;
    position: fixed;
    top:0;
    left:0;
    background:#F5F2F2;
    overflow: hidden;
    z-index: 999;
}
.pro-body{
    width:100%;
}
.pro-body .pro-Img{
    margin: 0 auto;
    width:250px;
    height:250px;
}

.pro-body .pro-content{
    background: #FFF;
    width:100%;
}
.pro-body .pro-content .pro-content-title{
    width:100%;
    color:black;
    font-weight: bold;
    font-size: 17px;
    padding-top: 5px;
}
.pro-body .pro-content .pro-content-detaile{
    width:100%;
    color:black;
}
.pro-body .pro-content .pro-content-price{
    width:100%;
    padding: 8px 0;
}
.pro-body .pro-content .pro-content-price span{
    font-size: 11px;
}
.pro-body .pro-content .pro-content-price span:first-child{
    color:red;
    font-weight: bold;
    font-size: 16px;
}
.pro-body .pro-content .mui-table-view{
    width:100%;
}
.pro-body .pro-content .mui-table-view #huodongming{
    color:black;
    font-size:16px;
    width:40px;
    display: inline-block;
    margin-left: -5px;
}
.pro-body .pro-content .mui-table-view .huodong{
    display: inline-block;
    width:50px;
    height:20px;
    text-align: center;
    line-height: 20px;
    margin: 0 10px;
    border:1px solid red;
    border-radius:3px;
}
.pro-body .pro-content .pro-content-country{
    width:100%;
    height:45px;
}
.pro-body .pro-content .pro-content-country p{
    display: inline-block;
    width:30px;
    height:30px;
    margin-top: 7px;
    margin-right:10px;
    margin-left:5px;
}
.pro-body .pro-content .pro-content-country img{
    width:30px;
    height:30px;
    vertical-align: middle;
}
.pro-body .pro-content .pro-content-tab{
    width:100%;
}
.pro-body .pro-content .pro-content-tab .tab-list{
    width:100%;

}
.pro-body .pro-content .pro-content-tab .tab-list .tab-list-item{
    width:100%;
    padding:10px 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
    position: relative;
}
.pro-body .pro-content .pro-content-tab .tab-list .tab-list-item .item{
    color:black;
    margin-left: 8px;
}
.pro-body .pro-content .pro-content-tab .tab-list .tab-list-item .item .mui-icon{
    position: absolute;
    top:35%;
    right:15px;
    color:#bbb;
    font-size: inherit;
}
.pro-bottom{
    width:100%;
    background:#fff;
    position: fixed;
    bottom: 0;
    z-index: 999;
}
.pro-bottom .pro-bottom-nav{
    width:100%;
}
.pro-bottom .pro-bottom-nav .nav-items{
    width:195px;
    display: flex;
    justify-content: space-evenly;
    float: left;
}
.pro-bottom .pro-bottom-nav .btn{
    float: left;

}
.pro-bottom .pro-bottom-nav span{
    line-height: 40px;
}
.choose-pro .choose-top{
    position: relative;
    height:105px;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.choose-pro .choose-top .choose-img{
    width:100px;
    height:100px;
    position:absolute;
    top:-18px;
    left:18px;
    display: inline-block;
}
.choose-pro .choose-top span{
   display: inline;
    position: absolute;
    left:130px;
    top:15px;
    font-size:18px;
    color:red;
}
.choose-pro .choose-top .choose-img img{
    width:100%;
    height:100%;
    vertical-align: middle;
}
.choose-pro .choose-body{
    height:60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.choose-pro .choose-body p{
    color:black;
}
.choose-pro .choose-body p span{
    display: inline-block;
    width:50px;
    height:25px;
    border:1px solid rgba(221,79,67,.6);
    margin: 0 5px;
    line-height: 25px;
    text-align:center;
}
    .choose-pro .choose-bottom{
        height:100px;
    }
    .choose-pro .choose-bottom ul{
        border:1px solid rgba(0,0,0,.3);
    }
    .choose-pro .choose-bottom ul li{
        float: left;
        width:25px;
        height:25px;
        text-align: center;
    }
    .choose-pro .choose-bottom ul li input{
        width:25px;
        height:25px;
        padding:0;
        margin: 0;
        border: none;
        text-align: center;
    }
</style>
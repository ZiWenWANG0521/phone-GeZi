<template>
    <div class="app-cartcontainer">
        <div class="cart-content" v-if="isProOnle" >
            <div class="cart-item">
               <h5>购物车还空着呢</h5>
               <router-link to="/home">
                     <button type="button">去逛逛</button>
                 </router-link>
            </div>
        </div>
        <div class="cart-pro" v-else-if="isProMore">
            <div style="width:100%;background: #F5F2F2; margin-left: 20px; color:#bbb;line-height: 35px; font-size: 11px;font-weight:300">
                单个订单重量凑满5010g更实惠哦 <br>
                若在清关中产生的税费及手续需要收件人缴纳,请知悉
            </div>
            <ul class="mui-table-view" style="width: 100%;">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        宝贝格子负责发货
                    </a>
                </li>
                <!--商品中间信息-->
                <li class="mui-table-view-cell" v-for="item in pro">
                    <span class="mui-icon mui-icon-closeempty" style="color:red;float: right;font-size:28px;" @click="del(item.product_id)"></span>
                    <div class="pro-choose">
                        <input type="checkbox" class="checked">
                    </div>
                    <div class="pro-dat-img">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="pro-body">
                        <p class="pro-title">Aptamil爱他美</p>
                        <p class="pro-dat">{{item.title}}</p>
                        <p class="pro-price">
                            <span>￥{{item.price}}</span>
                        </p>
                        <ul style="list-style: none;height:20px;border: 1px solid black;width:78px;border: 1px solid rgba(0,0,0,.3);border-top-left-radius:10px; border-bottom-left-radius:10px;border: 1px solid rgba(0,0,0,.3);border-top-right-radius:10px; border-bottom-right-radius:10px;  ">
                            <li style="border-right:1px solid rgba(0,0,0,.3) ">-</li>
                            <li>
                                <input type="text" style="border: none;text-align: center" v-model="procount">
                            </li>
                            <li style="border-left:1px solid rgba(0,0,0,.3) ">+</li>
                        </ul>
                    </div>
                </li>
                <!--商品小计-->
                <li class="mui-table-view-cell">
                       <div style="width:100%;height:100%;text-align: center;color:#bbb;font-size: 11px;">
                           小计 <span class="price-count">￥{{sumprice}}</span>  优惠 <span class="price-s">￥0.00</span>
                       </div>
                </li>
            </ul>
        </div>
        <div class="user-like">
            <p class="user-title">猜你喜欢</p>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
            <div class="like-item">
                <img src="../../img/img/search/2016080611002614814644_250x250.jpg" alt="">
                <p class="item-msg">意大利直邮【包邮包税】</p>
                <p class="item-price">￥2673.00</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: "CartContainer",
        data(){
            return {
                      pro:[],
                      procount:this.$store.getters.optCount,
                      isProOnle:false,
                      isProMore:true
                  }
        },
        methods:{
            searchCart(){
                var url="http://127.0.0.1:3000/searchCart";
                this.$http.get(url).then(result=>{
                   this.pro=result.body
                   if(result.body.length==0){
                       this.isProOnle=true;this.isProMore=false;
                   }else{
                       this.isProOnle=false;this.isProMore=true;
                   }
                })
            },
            del(i){
                var url="http://127.0.0.1:3000/del?id="+i;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        Toast("删除成功")
                        location.reload()
                    }else{
                        Toast("宝贝格子出现错误,请稍后")
                    }
                })
            }
        },
        computed:{
            sumprice(){
                var sum=0
                for(var i in this.pro){
                      sum +=this.pro[i].price
                }
                return sum;
            }

        },
        created(){
            this.searchCart()
        }
    }
</script>

<style scoped>
    .proshow{
        display: none;
    }
.cart-content{
    width:375px;
    text-align: center;
}
.cart-content .cart-item{
    margin-top: 35px;
}
.cart-content button{
    width: 80px;
    border-radius:40px;
    background:rgba(239,239,244,0.5);
    color:rgba(252,21,22,0.5);
    border-color:rgba(252,21,22,0.5);
    margin-top: 10px;
}
.user-like{
    width:100%;
    background:#fff;
    margin-top:45px;
    padding-top:5px;
    text-align: center;
}
.user-like:after{
    content:"";
    display: block;
    clear: both;
}
.user-like .user-title{
    width:100%;
    height:25px;
    color:black;
}
.user-like .like-item{
    width:45%;
    float:left;
    margin:0 9px;
}
.user-like .like-item .item-msg{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:black;
}
.user-like .like-item .item-price{
    display: inline-block;
    float: left;
    color:rgba(252,21,22,0.8);
}
.user-like .like-item img{
    width:100%;
}
.mui-table-view .mui-table-view-cell{
    width:100%;
}
.mui-table-view .mui-table-view-cell .pro-dat-img{
    width:120px;
    height:120px;
    float: left;
}

.mui-table-view .mui-table-view-cell .pro-choose{
        width:10px;
        height: 10px;
        float: left;
    margin-top:50px;
}
.mui-table-view .mui-table-view-cell .pro-body{
    float: left;
    width:180px;
    height:100%;
    margin-left:30px;
}
.mui-table-view .mui-table-view-cell .pro-body p{
    margin:5px 0;
}
.mui-table-view .mui-table-view-cell .pro-body .pro-title{
    color:black;
}
.mui-table-view .mui-table-view-cell .pro-body .pro-price{
    margin-top:15px;
    color:#933636;

}
.mui-table-view .mui-table-view-cell .pro-body .pro-price span{
    font-size:16px;
}
.mui-table-view .mui-table-view-cell .pro-body ul{
    width:200px;
    overflow: hidden;
}
.mui-table-view .mui-table-view-cell .pro-body ul li{
    float: left;
    width:25px;
    height:100%;
    text-align: center;
    line-height:18px;
}
.mui-table-view .mui-table-view-cell .pro-body ul li input{
    height:25px;
    width:100%;
    padding:0;
    margin: 0;
}
.mui-table-view .mui-table-view-cell .pro-body .pro-dat{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color:black;
}
.mui-table-view .mui-table-view-cell .pro-dat-img img{
    width:100%;
    margin-left:20px;
}
</style>
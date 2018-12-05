<template>
    <div class="app-homecontainer">
        <div class="home-container">
        <!--轮播图-->
        <mt-swipe  :auto="4000">
            <mt-swipe-item v-for="item in list">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        </div>
        <!--HOT消息-->
        <div class="tab-container">
            <div class="tab-hot">
               <span class="hot-item-icon">HOT</span>
               <span class="mui-icon mui-icon-flag"></span>
               <span class="hot-msg">保费低至5元 疯抢拼手速</span>
           </div>
            <div class="tab-img-item">
                <div class="img-item Img1">
                    <span class="mui-icon-extra mui-icon-extra-new"></span>
                    <p>新品推荐</p>
                </div>
                <div class="img-item Img2">
                    <span class="mui-icon-extra mui-icon-extra-outline"></span>
                    <p>每日秒杀</p>
                </div>
                <div class="img-item Img3">
                    <span class="mui-icon-extra mui-icon-extra-holiday"></span>
                    <p>国家馆</p>
                </div>
                <div class="img-item Img4">
                    <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
                    <p>格子好物</p>
                </div>
            </div>
        </div>
        <!--每日秒杀-->
        <div class="mui-card">
            <div class="mui-card-header">格子好物</div>
            <div class="mui-card-content">
                <p class="mui-msg">海参界革命性产品,全面解读冰冻冰岛红极参</p>
                <img src="../../img/img/rec/201710319000773743525_250x250.jpg" alt="">
                <div class="mui-user">
                    <span class="mui-user-msg">
                        <span class="mui-icon mui-icon-contact"></span>
                        格子酱
                    </span>
                    <span class="mui-icon mui-icon-eye">
                        19873
                    </span>
                </div>
            </div>
            <span class="mui-line"></span>
            <div class="mui-card-content">
                <p class="mui-msg">养娃圈最推崇的宝宝核桃油，你买对了么</p>
                <img src="../../img/img/muying/5b8e2dcf76652.jpg" alt="">
                <div class="mui-user">
                    <span class="mui-user-msg">
                        <span class="mui-icon mui-icon-contact"></span>
                        格子酱
                    </span>
                    <span class="mui-icon mui-icon-eye">
                        19873
                    </span>
                </div>
            </div>
            <span class="mui-line"></span>
            <div class="mui-card-content">
                <p class="mui-msg">冷门面膜！日本曼丹Mandom婴儿肌保湿面膜测评</p>
                <img src="../../img/img/hufu/201608299003543731387_250x250.jpg" alt="">
                <div class="mui-user">
                    <span class="mui-user-msg">
                        <span class="mui-icon mui-icon-contact"></span>
                        格子酱
                    </span>
                    <span class="mui-icon mui-icon-eye">
                        19873
                    </span>
                </div>
            </div>
        </div>
        <!--滑动展示-->
        <div class="img-show-list">
            <h5 class="img-list-title">热门种草</h5>
            <div class="img-list-item">
                <div class="item">
                <img src="../../img/img/nav/2017071815003056225443_250x250.jpg" alt="">
                <h5>拒绝胸部下垂,秒回少女身材</h5>
                <p class="list-msg">最近小可是被《想想办法吧,爸爸》刷屏啦,节目虽然还没有开播,但是收到了很多关注</p>
                </div>
                <div class="item">
                    <img src="../../img/img/search/2017041316000726041146_250x250.jpg" alt="">
                    <h5>贝拉米奶粉|添加益生元,宝宝更容易吸收</h5>
                    <p class="list-msg">目前新西兰和澳大利亚只有贝拉米通过了NASAA有机认证。有机奶源，不含激素，无农药残留,不含转基因</p>
                </div>
                <div class="item">
                    <img src="../../img/img/yingyang/2017123116003612355465_250x250.jpg" alt="">
                    <h5>被美妆届遗忘的小可爱-Swisse 眼霜</h5>
                    <p class="list-msg">swisse的知名度是被瓶瓶罐罐的小药丸打响的,去年入了好几罐,因为断断续续的服用没能坚持下来</p>
                </div>
                <div class="item">
                    <img src="../../img/img/new/5ba30f9acd541.jpg" alt="">
                    <h5>美国白宫都离不开Bad Air</h5>
                    <p class="list-msg">80%美国家庭的选择（包括美国白宫）美国纽约火灾后住房重建使用的产品</p>
                </div>
            </div>
        </div>
        <!--母婴世界-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h4>母婴世界</h4>
                    <div class="mui-msg-content mr" v-for="item in shopmsg">
                        <router-link :to="'/home/pro?id='+item.rid">
                        <img v-lazy="item.img_url" style="width:165px;">
                        <p class="mui-content-title">{{item.title}}</p>
                        <p class="content-msg">{{item.title}}</p>
                        <p class="content-price">
                                 <span class="price">￥{{item.price}}</span>
                                 <span class="price-old">￥{{item.price_old}}</span>
                        </p>
                        </router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeContainer",
        data(){
            return {
                list:[],shopmsg:[]
            };
        },
        methods:{
            getBanner(){
                var url="http://127.0.0.1:3000/imagelist";
                this.$http.get(url).then(result=>{
                    this.list=result.body
                })
            },
            getShopMsg(){
                var url="http://127.0.0.1:3000/getrec";
                this.$http.get(url).then(result=>{
                    this.shopmsg=result.body
                })
            }
        },
        created(){
            this.getBanner();
            this.getShopMsg();
        }
    }
</script>

<style scoped>
    *{
        font-family: "microsoft yahei", 微软雅黑, "Hiragino Sans GB", Helvetica, Tahoma, Arial;
    }
    img{
        vertical-align: middle;
    }
    .mr{
      margin-right: 7px;
    }
    .home-container{
        height:200px;
        width:375px;
    }
    .home-container .mint-swipe img {
        width:100%;
        height:100%;
    }
    .tab-container{
        height:150px;
        width:100%;
        background: #FFFFFF;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    }
    .tab-hot{
        padding:8px;
        border-bottom:rgba(0,0,0,.2) solid 1px;
        position:relative;
    }
    .tab-hot .mui-icon-flag{
        position:absolute;
        top:5px;
        left:45px;
        color:#9bb26c;
    }
    .tab-hot .hot-item-icon{
        display:inline-block;
        width:60px;
        border-right:rgba(0,0,0,.2) solid 1px;
        color:#9bb26c;
    }
    .tab-hot .hot-msg{
        display:inline-block;
        padding:0 15px;
        font-size:13px;
        color:rgba(0,0,0,.7);
    }
    .tab-container .tab-img-item{
        display:flex;
        justify-content:space-around;
        text-align: center;
        height:112px;
    }
    .tab-container .tab-img-item .img-item{
        margin:auto;
    }
    .tab-container .tab-img-item .Img1{
        color:rgba(183,211,46,0.8);
    }
    .tab-container .tab-img-item .Img2{
        color:rgb(28,62,149);
    }
    .tab-container .tab-img-item .Img3{
        color:rgb(183,211,46);
    }
    .tab-container .tab-img-item .Img4{
        color:#F24058;
    }
    .mui-card{
        width:100%;
        margin-left:0;
    }
    .mui-card .mui-card-content{
        width:375px;
        height:300px;
    }
    .mui-card .mui-card-header{
        font-size: 18px;
        font-weight: bold;
    }
    .mui-card .mui-card-content .mui-msg{
        color:black;
        font-size:20px;
        width:300px;
        padding-left: 15px;
    }
    .mui-card .mui-card-content img{
        width:375px;
        height:180px;
    }
    .mui-card .mui-line{
        display:inline-block;
        border-bottom:rgba(0,0,0,.2) solid 1px;
        width:100%;
    }
    .mui-user{
        display:flex;
        justify-content: space-between;
    }
    .mui-user .mui-user-msg,.mui-icon-eye{
            line-height:70px;
    }
    .mui-user .mui-user-msg{
            color:rgba(0,0,0,.4);
            padding-left: 8px;
    }
    .mui-user .mui-user-msg .mui-icon-contact{
        color:lime;
    }
    .mui-user .mui-icon-eye{
            color:rgba(0,0,0,.4);
            font-size:12px;
            padding-right: 8px;
    }
    .img-show-list{
        width:100%;
        height:200px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
       padding-top:10px;
    }
    .img-show-list .img-list-title{
        color:black;
        font-size:17px;
        font-weight: bold;
    }
    .img-show-list .img-list-item{
        width:100%;
        height:180px;
        overflow-x:auto;
        white-space: nowrap;
    }
    .img-show-list .img-list-item .item{
        width:200px;
        height:150px;
        display: inline-block;
        margin-right:10px;
    }
    .img-show-list .img-list-item .item h5{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: bold;
        color:black;
        font-style: normal;
        padding-left: 2px;
    }
    .img-show-list .img-list-item img{
        width:200px;
        height:100px;
    }
    .img-show-list .img-list-item .list-msg{
        white-space: nowrap;
        text-overflow: ellipsis;
        width:200px;
        height:20px;
        overflow: hidden;
        font-weight: normal;
        padding-left: 2px;
    }
    .mui-card-content-inner .mui-msg-content{
        width:165px;
        float:left;
    }
    .mui-card-content-inner .mui-msg-content img[lazy=loading]{
        height:150px;
    }
    .mui-card-content-inner .mui-msg-content .mui-content-title{
        font-size:15px;
        color:black;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    .mui-card-content-inner .mui-msg-content .content-msg{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color:black;
    }
    .mui-card-content-inner .mui-msg-content .content-price .price{
        color:#9bb26c;
        font-size:16px;
    }
    .mui-card-content-inner .mui-msg-content .content-price .price-old{
        font-size: 1px;
        text-decoration: line-through;
        margin-left: 5px;
    }
</style>
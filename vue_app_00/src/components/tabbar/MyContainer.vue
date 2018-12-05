<template>
    <div class="app-myContainer">
        <div class="my-top isFixed" id="my-top">
            <div class="my-option">
                <span class="mui-icon mui-icon-gear"></span>
            </div>
            <div class="my-title">我</div>
            <div class="my-use">
                <span class="mui-icon-extra mui-icon-extra-custom"></span>
                <span class="mui-icon mui-icon-minus"></span>
            </div>
        </div>
        <div class="my-login">
            <div class="login-click">
                <div class="login-img">
                    <span class="mui-icon mui-icon-contact" style="color:#AFAAAA" v-show="userhide"></span>
                    <img src="../../img/img/nav/icon01.png" alt="" v-show="usershow">
                </div>
                <div class="login-text">
                    <span class="login-btn"  v-show="userhide"><span @click="Jumplogin">登录&nbsp;</span>&nbsp;|&nbsp;&nbsp;<span>注册</span></span>
                    <div class="login-inner" v-show="usershow">
                        <p class="login-msg">BG_60538989896</p>
                         <p class="login-iner">见习格粉&gt;</p>
                    </div>
                </div>
            </div>
            <div class="login-center" @click="islog">
                <button type="button">个人中心</button>
            </div>
        </div>
        <div class="my-taber">
            <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                   我的订单
                </a>
            </li>
        </ul>
            <div class="my-taber-list">
                <div class="list-item">
                    <span class="mui-icon-extra mui-icon-extra-card"></span>
                    <p>待付款</p>
                </div>
                <div class="list-item">
                    <span class="mui-icon-extra mui-icon-extra-express"></span>
                    <p>待发货</p>
                </div>
                <div class="list-item">
                    <span class="mui-icon-extra mui-icon-extra-computer"></span>
                    <p>待收货</p>
                </div>
                <div class="list-item">
                    <span class="mui-icon mui-icon-more"></span>
                    <p>待评价</p>
                </div>
                <div class="list-item">
                    <span class="mui-icon-extra mui-icon-extra-prech"></span>
                    <p>退款/售后</p>
                </div>
            </div>
        </div>
        <div class="my-taber">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        我的钱包
                    </a>
                </li>
            </ul>
            <div class="my-taber-list">
                <div class="list-item">
                    <span>0.00</span>
                    <p>账户余额</p>
                </div>
                <div class="list-item">
                    <span>0.00</span>
                    <p>代言费</p>
                </div>
                <div class="list-item">
                    <span>0</span>
                    <p>代言劵</p>
                </div>
                <div class="list-item">
                    <span>0</span>
                    <p>宝豆</p>
                </div>
            </div>
        </div>
        <div class="my-img-list">
            <div class="item-top">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-university" style="color:#7479F2;"></span>
                        <a class="mui-navigate-right">
                            我的代言人
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-gold" style="color:#7174AF"></span>
                        <a class="mui-navigate-right">
                            分享赚钱
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon mui-icon-starhalf" style="color:#C66C52"></span>
                        <a class="mui-navigate-right">
                            超级会员
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-outline"></span>
                        <a class="mui-navigate-right">
                            我的预定
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-custom"></span>
                        <a class="mui-navigate-right">
                            联系客服
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
                        <a class="mui-navigate-right">
                            我的心愿单
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-gift"></span>
                        <a class="mui-navigate-right">
                            喜欢的好物
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-gold"></span>
                        <a class="mui-navigate-right">
                            我的理财
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon mui-icon-location"></span>
                        <a class="mui-navigate-right">
                           收货地址
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="mui-icon-extra mui-icon-extra-people"></span>
                        <a class="mui-navigate-right">
                          身份证信息
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyContainer",
        data(){
            return {
                searchFixed:false,
                usershow:false,
                userhide:true
            }
        },
        methods: {
            Jumplogin(){
                this.$router.push("/home/login")
            },
            logined(){
               if(this.$store.getters.isHide=='1'){
                   this.userhide=false;
                   this.usershow=true
               }
            },
            islog(){
               if(this.$store.getters.isHide=="0"){
                   this.$router.push("/home/login")
               }
            }
        },
        mounted(){
            this.logined()
        }
    }
</script>

<style scoped>
    .isFixed{
        position: fixed;  top: px2rem(110);  left: px2rem(20);  right: px2rem(20);
        z-index: 999;
    }
.my-top{
    margin-top:-40px;
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: #fff;
    padding:7px 0;
    border-bottom:1px solid rgba(0,0,0,.1);
}
.my-top .my-option{
    padding-left: 15px;
}
.my-top .my-use{
    display: flex;
    justify-content: space-between;
    width:65px;
}
.my-top .my-use span{
    margin-right: 5px;
}
.my-login{
        width:100%;
        height:80px;
        background: #fff;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
.my-login .login-click{
    margin-left: 25px;
    color:red;
    font-size:15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-login .login-center{
    margin-right: 15px;
}
.my-login .login-center button{
    border-radius: 50px;
    width:80px;
    height:25px;
    line-height: 10px;
}
.my-login .login-click .login-img{
    display: inline-block;
    width:50px;
    height:50px;
    text-align: center;
    line-height: 50px;
    color:black;
    border-radius: 50px;
    background: rgba(185,180,180,.2);
}
.my-login .login-click .login-text .login-inner{
    margin-left: 12px;
}
.my-login .login-click .login-text .login-inner .login-msg{
    color:#986464;
}
.my-login .login-click .login-text .login-inner .login-iner{
    color:#fff;
    border-radius: 50px;
    height:20px;
    width:80px;
    line-height:20px;
    text-align: center;
    background:#986464;
    font-size:11px;
    margin-top: -5px;
}
.my-login .login-click .login-btn{
   width:100px;
    margin-left: 15px;
}
.my-login .login-click .login-img img{
    width:100%;
    height:100%;
    border-radius: 50px;
}
.my-taber{
    width:100%;
}
.my-taber .mui-table-view{
    width:100%;
    margin-top:10px;
}
.my-taber  .my-taber-list{
    width:100%;
    background:#fff;
    padding:12px 0;
    display: flex;
    justify-content:space-around;
}
.my-taber  .my-taber-list .list-item{
    text-align: center;
    color:#986464;
}
.my-taber  .my-taber-list .list-item p{
    color:#986464;
    font-size:12px;
}
.my-img-list{
    width:100%;
    margin:10px 0;
}
.my-img-list .item-top{
        width:100%;
        margin-bottom:10px;
}
.my-img-list .item-content{
    width:100%;
}
.my-img-list .item-content .mui-table-view{
    width:100%;
}
.my-img-list .item-top .mui-table-view{
    width:100%;
}
    .mui-table-view-cell span{
      float:left;
        color:#C4B9B4;
    }
.mui-table-view-cell a{
    margin-left: 0;
}
</style>
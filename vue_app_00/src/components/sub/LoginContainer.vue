<template>
    <div class="login-container">
        <div class="login-top">
            <span class="mui-icon mui-icon-closeempty" @click="jump"></span>
        </div>
        <div class="login-content">
            <p class="login-content-msg"><span>快速登录</span></p>
            <div class="login-content-body">
                <div>
                     <input type="text" placeholder="请输入您的账号" v-model="uname">
                </div>
                <div>
                     <input type="password" placeholder="请输入密码" v-model="upwd">
                </div>
            </div>
            <div class="login-content-button">
                <button type="submit" @click="islogin">登录</button>
            </div>
        </div>
        <div class="login-bottom">
            <a class="login-qq"><span class="mui-icon mui-icon-qq"></span></a>
            <a class="login-weibo"><span class="mui-icon mui-icon-weibo"></span></a>
            <a class="login-wx"><span class="mui-icon mui-icon-weixin"></span></a>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: "LoginContainer",
        data(){
            return { uname:"", upwd:""}
        },
        methods:{
            islogin(){
                console.log(this.uname,this.upwd)
                var url="http://127.0.0.1:3000/signin";
                this.$http.post(url,{uname:this.uname,upwd:this.upwd},{emulateJSON: true}).then(result=>{
                    console.log(result);
                    if(result.body.ok==1){
                        this.$store.commit('ChangeLogin','1');
                        Toast("登录成功");
                        this.$router.go(-1)
                    }else{
                        Toast("登录失败");
                    }
                })
            },
            jump(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.login-container{
    margin-top: -40px;
    margin-bottom: -50px;
    width:100%;
    background:#fff;

}
.login-top{
    width:100%;
    overflow: hidden;
}
.login-container .login-top .mui-icon-closeempty{
    font-size:45px;
    float: right;
}
.login-container .login-content{
    padding:70px 0;
}
.login-container .login-content .login-content-msg{
    width:100%;
    text-align: center;
    padding:20px 0;
}
.login-container .login-content .login-content-msg span{
    border-bottom: 2px solid black;
    border-color:#D13939;
    color:#D13939;
}
.login-container .login-content .login-content-body{
    width:100%;
    padding:40px 0;
    height:180px;
}
.login-container .login-content .login-content-body div{
    width:280px;
    margin:0 auto;
    border-bottom:1px solid rgba(0,0,0,.2);
    height:47px;
    line-height: 47px;
}
.login-container .login-content .login-content-body div input{
    border:none;
    width:100%;

}
.login-container .login-content .login-content-body div ::-webkit-input-placeholder{
    color:#D1C9C9;
    font-size:12px;
    font-weight: normal;
}
.login-container .login-content .login-content-button{
        width:100%;
        text-align: center;
        padding:20px 0;
}
.login-container .login-content .login-content-button button{
    background:#D13939;
    color:#fff;
    width:250px;
    border-radius: 50px;
    height:38px;

}
.login-container .login-bottom{
    width:100%;
    background: #EFEFF4;
    padding:30px 0;
    display: flex;
    justify-content: space-evenly;
}
.login-container .login-bottom a{
    width:50px;
    height:50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
}
.login-container .login-bottom .login-wx{
      border:1px solid #85DA46;
}
.login-container .login-bottom .login-weibo{
      border:1px solid #E06A6A;
}
.login-container .login-bottom .login-qq{
    border:1px solid #007AFF;
}

</style>
<template>
    <div class="search-container">
        <div class="search-top" id="search-top" :class="topfix ?'top-isfixed':''">
            <div class="search-input">
                <div class="search-input-item1">
                    <div class="search-input-item2">商品</div>
                    <input type="text" @click="clearinput" @keyup.enter="searchag" v-model="searchinput">
                    <div class="search-red" v-show="clear">
                        <span class="search-msg">{{inputmsg}}</span>
                        <span class="mui-icon mui-icon-closeempty" @click="clearinput"></span>
                    </div>
                </div>
                <span class="mui-icon mui-icon-closeempty" @click="jumphome"></span>
            </div>
            <div class="search-nav">
                <ul style="list-style: none">
                    <li>综合</li>
                    <li>价格</li>
                    <li>销量</li>
                    <li>筛选</li>
                </ul>
            </div>
        </div>
        <div style="width:100%;height:99px;"></div>
        <div class="search-list">
            <div class="search-item" v-for="item in list">
                <router-link :to="'/home/pro?id='+item.sid">
                <img :src="item.img_url" alt="">
                <p>{{item.title}}</p>
                <p>{{item.title}}</p>
                <p>
                    <span class="price">￥{{item.price}}</span>
                    <span class="price_old">￥{{item.price_old}}</span>
                </p>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchContainer",
        data() {
            return {
                input: "",//获取APP.VUE传来的参数
                pno: 0,
                pageSize: 39,
                pageCount: 2,
                hasMore: true,
                list: [],
                inputmsg: this.$route.query.kwords, //搜索框中红色的框
                clear: true,//点击搜索栏清楚红色框
                topfix: false,//固定头部
                searchinput: "" //再一次在搜索页面搜索
            }
        },
        methods: {
            getsearch() {
                this.input = this.$route.query.kwords;
                this.pno++;
                this.hasMore = this.pno <= this.pageCount;
                if (!this.hasMore) {
                    return
                }
                var url = "http://127.0.0.1:3000/getsearch?kwords=" + this.input + "&pno=" + this.pno + "&pageSize=" + this.pageSize;
                this.$http.get(url).then(result => {
                    var rows = this.list.concat(result.body);
                    this.list = rows;
                    this.pageCount = result.body.pageCount
                })
            },
            clearinput() {
                this.clear = false
            },
            searchag() {
                var url = "http://127.0.0.1:3000/getsearch?kwords=" + this.searchinput + "&pno=" + this.pno + "&pageSize=" + this.pageSize;
                this.$http.get(url).then(result => {
                    this.list = result.body
                })
                this.inputmsg = this.searchinput
                this.clear = true
                this.searchinput = ""
            },
            jumphome() {
                this.$router.push("/home")
                window.removeEventListener('scroll', this.handleScroll);
            },
            /*handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('#search-top').offsetTop;
                if (scrollTop > offsetTop) {
                    this.topfix = true
                } else {
                    this.topfix = false
                }
            },
            destroyed() {
                window.removeEventListener('scroll', this.handleScroll);
            }
        },*/
        },
        created() {
            this.getsearch()
        },
        mounted() {
            // window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .top-isfixed{
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index: 999;
    }
    #search-top{
        position: fixed;
        top:0;
        left:0;
        right:0;
    }
.search-container{
    margin-top: -40px;
    margin-bottom: -50px;
    width:100%;
    background:#fff;

}
.search-container .search-top{
    width:100%;
    background: #fff;
}
.search-container .search-top .search-input{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:54px;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.search-container .search-top .search-input .search-input-item1{
    width:350px;
    border:1px solid rgba(0,0,0,.2);
    margin-left: 10px;
    position:relative;
}
.search-container .search-top .search-input .search-input-item2{
    width:50px;
    height:35px;
    text-align: center;
    float:left;
    line-height: 40px;
    border-right: 1px solid rgba(0,0,0,.2);
}
.search-container .search-top .search-input .search-input-item1 input{
    width:85%;
    margin:0;
    padding:0;
    float:left;
    border:none;
    height:35px;

}
.search-container .search-top .search-input .search-input-item1 .search-red{
    position:absolute;
    top:5px;
    left:58px;
    height:25px;
    background: red;
    display: flex;
    align-items: center;
}
.search-container .search-top .search-input .search-input-item1 .search-red span{
    color:#fff;
}
.search-container .search-top .search-input .search-input-item1 .search-msg{
        border-right: 1px solid #fff;
        height:100%;
        line-height:25px;
        padding:0 4px;
}
.search-container .search-top .search-input .mui-icon-closeempty{
    font-size:27px;
    font-weight:580;
}
.search-container .search-top .search-nav{
    width:100%;
    height:40px;
    line-height:40px;
}
.search-container .search-top .search-nav ul{
    display: flex;
    justify-content: space-around;
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,.2);
    border-top: 1px solid rgba(0,0,0,.2);
    height:35px;
    margin-top: 5px;
}
.search-container .search-top .search-nav ul li{
    color:rgba(0,0,0,.3);
}
.search-container .search-list{
    width:100%;
    margin-top: 5px;
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;

}
.search-container .search-list  .search-item{
    width:165px;
}
.search-container .search-list  .search-item img{
    width:100%;
}
.search-container .search-list  .search-item p{
    color:black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.search-container .search-list  .search-item .price{
    color:rgb(222,82,70);
    font-weight:550;
    margin-right: 4px;
}
.search-container .search-list  .search-item .price_old{
    color:rgb(229,214,211);
    font-size:10px;
    text-decoration-line: line-through;
}
</style>
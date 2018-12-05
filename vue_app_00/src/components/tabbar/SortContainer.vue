<template>
    <div class="app-sortContainer">
        <div class="left-fixed">
            <ul class="left-ul">
                <li class="item" @click="l_block(1)" :class="isblock==1?'on':''">
                   为你推荐
                </li>
                <li class="item" @click="l_block(2)" :class="isblock==2?'on':''">护肤美妆</li>
                <li class="item" @click="l_block(3)" :class="isblock==3?'on':''">奶粉纸尿裤</li>
                <li class="item" @click="l_block(4)" :class="isblock==4?'on':''">母婴世界</li>
                <li class="item" @click="l_block(5)" :class="isblock==5?'on':''">个人洗护</li>
                <li class="item" @click="l_block(6)" :class="isblock==6?'on':''">环球美食</li>
                <li class="item" @click="l_block(7)" :class="isblock==7?'on':''">营养保健</li>
                <li class="item" @click="l_block(8)" :class="isblock==8?'on':''">数码家电</li>
                <li class="item" @click="l_block(9)" :class="isblock==9?'on':''">时尚家居</li>
                <li class="item" @click="l_block(10)" :class="isblock==10?'on':''">国家馆</li>
                <li class="item" @click="l_block(11)" :class="isblock==11?'on':''">品牌墙</li>
            </ul>
        </div>
        <div class="re" style="position: relative">
        <div class="right-items">
            <ul class="right-item" :class="isblock==1?'show':''" style="list-style: none">
                <li class="item">
                   热门分类
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                           <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==2?'show':''" style="list-style: none">
                <li class="item">
                    面部护肤
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item" :class="isblock==3?'show':''" style="list-style: none">
                <li class="item">
                    宝宝辅食
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==4?'show':''" style="list-style: none">
                <li class="item">
                   洗护喂养
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item" :class="isblock==5?'show':''" style="list-style: none">
                <li class="item">
                   身体个护
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==6?'show':''" style="list-style: none">
                <li class="item">
                    环球美食
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item" :class="isblock==7?'show':''" style="list-style: none">
                <li class="item">
                    营养补充
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==8?'show':''" style="list-style: none">
                <li class="item">
                    生活电器
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item" :class="isblock==9?'show':''" style="list-style: none">
                <li class="item">
                    潮流箱包
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==10?'show':''" style="list-style: none">
                <li class="item">
                    国家馆
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="right-item"  :class="isblock==11?'show':''" style="list-style: none">
                <li class="item">
                    品牌墙
                    <ul class="item_1" style="list-style: none">
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg"alt="">
                            <p>3段</p>
                        </li>
                        <li class="item_1_1">
                            <img src="../../img/img/search/5bd96f1750fea.jpg" alt="">
                            <p>3段</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortContainer",
        data(){
            return {
                isblock:1,
            }
        },
        methods:{
            l_block(i){
                this.isblock=i
            }
        }
    }
</script>

<style scoped>
    .re{
        width:275px;
        float:right;
        background:#fff;
        margin-top:5px;
        height:700px;
    }
    .left-fixed{
        position: fixed;
        width:100px;
        background:#E8E8E8;
        height:100%;
    }
    .left-fixed .left-ul{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    .left-fixed .left-ul:first-child{
        margin-top: 5px;
    }
    .left-fixed .left-ul .item{
        padding:15px 0;
        text-align: center;

    }
    .right-items{
        position: absolute;
        top:15px;
        left:3px;
        width:100%;

    }
    .right-item{
        display:none;
    }
    .show{
        display:block;
    }
    .on{
        width:99px;
        background: #fff;
        border-bottom: 1px solid red;
    }
    .item_1{
        width:274px;
        display: flex;
        justify-content: space-around;
    }
    .item_1 .item_1_1{
        width:50px;
        background: #fff;
    }
    .item_1 .item_1_1 img{
        width:50px;
        height:50px;
        float:left;
    }
    .item_1 .item_1_1 p{
        margin-left: 7px;
        width:100%;
        height:100%;
    }
</style>
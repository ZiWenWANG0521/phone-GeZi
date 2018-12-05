<template>
   <div class="app-list">
     <ul>
         <h1>显示隐藏</h1>
         <li v-for="item in items">
             <h2 @click="showToggle(item)">{{item.name}}</h2>
             <ul v-show="item.isSubShow">
                 <li v-for="subItem in item.subItems">
                     <h3>{{subItem.name}}</h3>
                 </li>
             </ul>
         </li>
     </ul>
   </div>
</template>
<script>
  export default {
    data(){
      return {
        items:[
            {
            name:"家用电器",
            isSubShow:false,
            subItems:[{name:"笔记本电脑"},{name:"台式电脑"},{name:"电视机"}]
            },
            {
                name:"服装",
                isSubShow:false,
                subItems:[{name:"女士服装"},{name:"女生服装"},{name:"青年服装"}]
            }
        ]
      }
    },
      methods:{
        showToggle:function(item){
            item.isSubShow=!item.isSubShow
        }
      }
  }
</script>
<style>
    *{
        padding:0;
        margin:0;
        font-size:14px;
    }
    ul{
        width:200px;
        height:auto;
    }
    h2{
        background:green;
        border:1px solid #fff;
        color:#fff;
        height:30px;
        line-height:30px;
        text-indent: 24px;
    }
    h3{
        background:#999;
        height:24px;
        line-height:24px;
        border:1px solid #fff;
        text-indent:50px;
    }
</style>
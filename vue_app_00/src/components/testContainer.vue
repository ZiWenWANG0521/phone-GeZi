<template>
  <div class="app-testContainer">
     <h1>第一个测试组件</h1>
      <h1>生命周期：</h1>
      <span>当Vue实例创建后,自动触发事件,事件调用一些函数(钩子函数)</span>
      <input type="button" value="修改">
     <p id="p3">{{msg}}</p>
  </div>
</template>
<script>
   export default {    
     data(){
       return {msg:"脚手架"}
     },
   methods:{
       show(){console.log("执行show方法")}
   },
       /*生命周期第一个钩子函数-创建之前*/
       beforeCreate(){
         /*实例创建之前,执行这个函数 data和methods没有初始化*/
       },
       /*生命周期第二个钩子函数-创建后*/
       created(){
           /*实例被创建之后,执行此函数时data,methods初始化成功，最早操作data,methods方法*/
       },
       /*生命周期第三个钩子函数-挂载之前*/
       beforeMount(){
           /*模板在内存中编辑完成,但是尚未把模板渲染到页面,无法做DOM操作,修改页面元素,内容等操作*/
       },
       /*生命周期的第四个钩子函数-挂载*/
       mounted(){
            /*模板在内存中编译完成,渲染到了页面上,可以做DOM操作,操作页面节点*/
       },
       /*生命周期第五个钩子函数*/
       beforeUpdate(){

       },
       updated(){
           
       }
   }
</script>
<style>
</style>
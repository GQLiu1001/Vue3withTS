<script setup lang="ts">
import Person from "@/components/Person.vue"
import type {Persons,PersonInterface} from "@/types";
import {reactive, ref} from "vue";
let personList= reactive<Persons>([
  {name:'a',age:20,id:1},
  {name:'b',age:20,id:2},
  {name:'c',age:20,id:3},
])
//defineProps[] 可以实现传递 如<Person a="a"/> 传递其中a
</script>


<template>
<!--    <Person />-->
<!--    <Person :list="personList"/>-->
  <div class="body">
  <h1>新闻展示</h1>
  </div>
  <div class="nav">
    <RouterLink :to="{name:'zhuye'}" active-class="nav a">首页</RouterLink>
<!--      <a href="/home" class="nav">首页</a>-->
      <RouterLink :to="{path:'/news'}" active-class="nav a">新闻</RouterLink>
<!--      <a href="/news" class="nav">新闻</a>-->
      <RouterLink to="/about" active-class="nav a">关于</RouterLink>
<!--      <a href="/about" class="nav">关于</a>-->
    <RouterLink to="/count" >加减</RouterLink>
  </div>
  <hr>


  <div class="content">
    <RouterView></RouterView>
  </div>


</template>



<style>
/* 基本样式 */
.body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
}

/* 导航栏样式 */
.nav {

  color: #e42828;
  text-align: center;
}

.nav a {
  display: inline-block;
  width: 100px;
  height: 80px;
  line-height: 80px;
  margin: 0 20px;
  text-decoration: none;
  font-weight: bold;
  background-color: #0decec;
  border-radius: 10px;
  text-align: center;
}


/* 内容区域样式 */
/* 内容区域样式 */
.content {
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  background-color: #0decec;
  width: 80%; /* 宽度占父容器的 80% */
  overflow: auto; /* 内容超出时显示滚动条 */
  margin: 0 auto; /* 水平居中 */
}

/* 页脚样式 */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
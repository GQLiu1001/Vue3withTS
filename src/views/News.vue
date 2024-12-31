<script setup lang="ts">
import {reactive} from "vue";
//编程式路由导航 route.push('/')
const newsList =reactive(
    [
      {id:1,title:'好消息',text:'中将了'},
      {id:2,title:'坏消息',text:'票丢了'}
    ]
)
</script>

<template>
  <div class="container">
    <ul class="news-list">
      <li v-for="news in newsList" :key="news.id" class="news-item">
<!--        /news/detail? 这里的？就是代表开始传参数了 如？a=‘haha’&...-->
<!--        <RouterLink :to="`/news/detail?text=${news.text}`">{{ news.title }}</RouterLink>-->
<!--      RouterLink 后面加一个replace 点了就不能后退跳转-->
        <RouterLink :to="`/news/detail/${news.text}`">{{news.title}}</RouterLink>
      </li>
    </ul>
    <div class="display-box">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: flex-start; /* 顶部对齐 */
}

.news-list {
  flex: 1; /* 新闻列表占据剩余空间 */
  margin-right: 20px; /* 新闻列表和展示框之间的间距 */
  list-style: none; /* 移除默认列表样式 */
  padding: 0;
}

.news-item {
  margin-bottom: 10px; /* 每个新闻项之间的间距 */
}

.display-box {
  flex: 8;
  padding: 20px; /* 内边距 */
  background-color: #fff8f8; /* 背景色 */
  border-radius: 8px; /* 圆角 */
  text-align: center; /* 文字居中 */
}
</style>
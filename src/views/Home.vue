<script setup lang="ts">
//首页待3s跳新闻页面
import {onMounted} from "vue";
import router from "@/router";
onMounted(()=>{
  setTimeout(()=>{
    router.push('/news')
  },3000)
})
</script>

<template>
<h1>这是Home</h1>
</template>

<style scoped>

</style>
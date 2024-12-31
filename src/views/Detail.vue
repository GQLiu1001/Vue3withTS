<script setup lang="ts">
import {useRoute} from "vue-router";
//hooks规范
let route = useRoute()
defineProps(['text'])
</script>

<template>

<!--  <h1>text:{{route.query.text}}</h1>-->
  <h1>text: {{ text }}</h1>
</template>

<style scoped>

</style>
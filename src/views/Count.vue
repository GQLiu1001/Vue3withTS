<script setup lang="ts">
import useCountStore from "@/store/count.ts";
import {ref} from "vue";

let countStore = ref(useCountStore())
function doubleCount(){
  countStore.value.count = countStore.value.doubleCount
}
function addSum(){
  countStore.value.sum = countStore.value.sumAddOne
}
function clear(){
  countStore.value.count = 1
  countStore.value.sum = 0
}
</script>

<template>
  <h1>count:{{countStore.count}}</h1>
  <button @click="doubleCount" type="button">Double Count</button>
  <h1>sum:{{countStore.sum}}</h1>
  <button @click="addSum" type="button">Add Sum</button>
  <button @click="clear" type="button">Clear Count</button>
</template>

<style scoped>

</style>
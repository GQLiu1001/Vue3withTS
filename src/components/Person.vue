<script setup lang="ts">
import {computed, reactive, ref, toRefs, watch, watchEffect} from "vue";
import {type PersonInterface} from '@/types'
//复习TS
let personList:Array<PersonInterface> = [
  {name:'里斯',age:100,id=1},
  {name:'王五',age:90,id=2},
  {name:'朝气',age:80,id=3},
]
</script>

<template>
  <div class="person" >
    <h1>姓名:{{p1.name}}</h1>
    <h1>年龄:{{p1.age}}</h1>
    <button @click="showDetail">详细信息</button>
    <button @click="changeAge">增加年龄</button>
    <button @click="changeName">改   名</button>
    <button @click="reset">重置</button>
  </div>
  <div class="person" >
    <h1>姓名:{{name}}</h1>
    <h1>年龄:{{age}}</h1>
    <button @click="showDetail1">详细信息</button>
    <button @click="changeAge1">增加年龄</button>
    <button @click="changeName1">改   名</button>
    <button @click="reset1">重置</button>
  </div>
</template>

<style scoped>
.person{
  text-align: center;
  background-color: #0decec;
  color: #784545;
  border-radius: 10px;
}
</style>
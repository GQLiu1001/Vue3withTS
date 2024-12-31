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
    <Person :list="personList"/>

</template>



<style>
</style>
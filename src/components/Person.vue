<script setup lang="ts">
import {computed, reactive, ref, toRefs, watch, watchEffect,defineProps} from "vue";
import {type PersonInterface, type Persons} from '@/types'
import Person from "@/components/Person.vue";
import axios from "axios";
//接受props不限制类型
// defineProps(['list']);
//接受props限制类型
defineProps<{list:Persons}>();
//接受props限制类型 限制必要性 增加默认值withDefaults
// withDefaults(defineProps<{list?:Persons}>(),
//     {list:[
//         {name:'defa',age:30,id:0}
//     ]})
//hooks 命名规则 useDogs useOrders hooks文件夹
/*let dogList = reactive(
    [
        'https://random.dog/b1e63fd1-1136-4aec-8b21-3d6e60d6134f.jpg'
    ]
)
async function getDog(){
  try{
    let result = await axios.get("https://random.dog/woof.json")
    console.log(result.data)
    dogList.push(result.data.url)
  }catch (err){
    console.log(err)
  }
}*/
//导入后解构 模块化hooks
import useDogs from "@/hooks/useDogs.ts";
const {dogList,getDog} = useDogs();
</script>

<template>
  <div class="person" >
    <ul>
<!--   v-for="xxx in xxxx" xxx.xxxxx 后面加:key="xx"-->
      <li v-for="l in list" :key="l.id">
        {{l.name}}--{{l.age}}--{{l.id}}
        </li>
    </ul>
  </div>
  <div class="dog" >
    <img v-for="(dog,index) in dogList" :src="dog" :key="index"
         style="height: 300px">
    <hr>
    <button @click="getDog">增加小狗</button>
  </div>
</template>

<style scoped>
.person{
  text-align: center;
  background-color: #0decec;
  color: #784545;
  border-radius: 10px;
}
.dog{
  text-align: center;
  background-color: #0decec;
  color: #784545;
  border-radius: 10px;
}
</style>
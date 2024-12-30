<script setup lang="ts">
import {computed, reactive, ref, toRefs, watch} from "vue";
//{{里面不需要.value}} ref定义基本和对象类型数据  最好用ref
//#region
let p1 = ref({
  name: "Person",
  age: 5,
})
//reactive 定义对象类型数据 不用.value
let p2 = reactive({
  name: "Person",
  age: 5,
})
// 解构 reactive -> 很多ref -> 再次用.value
let {name , age} = toRefs(p2)
function showDetail(){
  alert(p1.value.name+p1.value.age)
}
function changeAge(){
  p1.value.age += 1
}
function changeName(){
  p1.value.name = 'Mike'
}
function reset(){
  p1.value.name = ''
  p1.value.age = 0
}
function showDetail1(){
  alert(p2.name+p2.age)
}
function changeAge1(){
  age.value += 1
}
function changeName1(){
  name.value = 'Mike'
}
function reset1(){
  p2.name = ''
  p2.age = 0
}
//#endregion
//#region
//方法没缓存 要用计算属性 computed()
let fullname = computed(()=>{
  return p2.name
})
//#endregion
//vue3 中的 watch 只能监视 ref\reactive定义的数据 函数返回一个值 包含上述的数组
//watch(谁？,回调函数,配置对象（deep,immediate）)
//不能监视p1.value.age 开启deep就不用.value
// watch(p1.value, (newVal, oldVal) => {
// watch(p1, (newVal, oldVal) => {
//   console.log(newVal)
// },{deep:true},{immediate:true})
//停止监视数据
const stopWatch = watch(age, (newVal, oldVal) => {
  console.log('p2的age变成了'+newVal)
  if (newVal>=18) {
    stopWatch()
  }
})
//如果监视里面的reactive 或 ref 里一个 可以箭头函数return  关注细枝末节
//函数式（）=>p1.value 关注整体变化
//监视对象里的某个属性直接搂函数式
//正常写函数式（）=>p1.value 加个deep 推荐
watch(()=>p1.value.age, (newVal, oldVal) => {
  console.log('p1.value.age变成了'+newVal)
},{deep:true})
//watch([()=>p1.value.age,()=>p2.name],...........)
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
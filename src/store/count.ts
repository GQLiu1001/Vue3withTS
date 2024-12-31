import {defineStore} from "pinia";

const useCountStore = defineStore('count',{
    state: () => ({
        //state里定义初始参数
        count: 1,
        sum:1
    }),
    getters:{
        doubleCount:
            (state) => {
            return state.count * 2
            },
        sumAddOne:
            (state) =>{
            return state.sum+1
        }
    }
})
export default useCountStore;
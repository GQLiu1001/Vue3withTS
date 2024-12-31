import {reactive} from "vue";
import axios from "axios";
//前端模块化
export default function(){
//数据
    let dogList = reactive(
        [
            'https://random.dog/b1e63fd1-1136-4aec-8b21-3d6e60d6134f.jpg'
        ]
    )
//方法
    async function getDog(){
        try{
            let result = await axios.get("https://random.dog/woof.json")
            console.log(result.data)
            dogList.push(result.data.url)
        }catch (err){
            console.log(err)
        }
    }
//向外界提供东西 提供一个数据和方法
    return {dogList,getDog}
}

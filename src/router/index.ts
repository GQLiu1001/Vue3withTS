//创建路由器 暴露出去
import About from '@/views/About.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";
import Count from "@/views/Count.vue";

const router = createRouter({
    history: createWebHistory(),//路由器工作模式
    routes: [
        {
            path:'/',
            redirect:'/home',
        },
        {
            name: "zhuye",
            path: '/home',
            component: Home
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/news',
            component: News,
            children:[
                {
                    // 子路由里没斜杠
                    path:'detail/:text',
                    component:Detail,
                    //
                    props:true
                }
            ]
        },
        {
            path:"/count",
            component:Count
        }
    ]
});

export default router;
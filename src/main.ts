//引入createApp用于创建应用
import {createApp} from "vue";
//引入App根组件
import App from "./App.vue";
//挂载
//引入路由器
import router from "./router";
import {createPinia} from "pinia";
//引入pinia
const pinia = createPinia()
createApp(App)
    .use(pinia)
    .use(router)
    .mount("#app");

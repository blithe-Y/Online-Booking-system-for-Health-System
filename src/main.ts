import { createApp } from 'vue'
import App from './App.vue'
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.component('Top', Top)
app.component('Bottom', Bottom)
app.use(ElementPlus)
app.use(router);
app.mount('#app')


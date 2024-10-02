import { createApp } from 'vue'
import App from './App.vue'
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
import Context from "./components/Context.vue"
import router from './router'

const app = createApp(App)

app.component('Top', Top)
app.component('Bottom', Bottom)
// app.component('Context', Context)
app.use(router);
app.mount('#app')


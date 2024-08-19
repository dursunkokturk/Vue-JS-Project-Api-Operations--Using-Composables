import { createApp } from 'vue'
import App from './App.vue'
import Header from '@/components/Fixed/Header.vue'
import Loading from '@/components/Utility/Loading.vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

const app=createApp(App);

app.component('app-header',Header)
app.component('app-loading',Loading)
app.use(ToastPlugin);

app.mount('#app')
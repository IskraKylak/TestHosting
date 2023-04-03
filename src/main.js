import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import message from './utils/message.plugin'

const app = createApp(App)


app.use(message).use(store).use(router).mount('#app')


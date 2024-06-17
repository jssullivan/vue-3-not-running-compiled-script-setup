import { createApp, configureCompat } from 'vue'
import App from './App.vue'
import router from './router'
configureCompat({ MODE: 2, RENDER_FUNCTION: false })

const app = createApp(App)

app.use(router)

app.mount('#app')


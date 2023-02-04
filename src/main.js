import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import auth from './middleware/auth.js'
import './assets/main.css'
import 'maz-ui/css/main.css'
import VueCreditCardValidation from 'vue-credit-card-validation';



const app = createApp(App)

app.use(VueCreditCardValidation)

app.use(router)

app.use(store)

app.mount('#app')

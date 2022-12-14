import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import 'bootstrap'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(store)
  .mixin(mixins)
  .use(router)
  .use(VueSweetalert2)
  .mount('#app')

window.Kakao.init('2139737b0f7a1ac16153d353c1411a67')

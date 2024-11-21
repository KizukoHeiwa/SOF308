import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import './assets/js/vendor/modernizr-2.8.3.min.js'
// import './assets/js/vendor/jquery-3.5.1.min.js'
// import jQuery2 from './assets/js/vendor/jquery-migrate-3.3.0.min.js'
// import LightGallery from './assets/js/plugins/lightgallery.min.js'
// import Isotope from './assets/js/plugins/isotope.min.js'
// import Masonry from './assets/js/plugins/masonry.min.js'
// import ImagesLoaded from './assets/js/plugins/images-loaded.min.js'
// import Swiper from './assets/js/plugins/swiper-bundle.min.js'
// import AOS from './assets/js/plugins/aos.js'
// import Ajax from './assets/js/plugins/ajax.mail.js'
// import MainJS from './assets/js/main.js'

const app = createApp(App)

app.use(router)

app.mount('#app')

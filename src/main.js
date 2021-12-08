import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Router imports
import About from './assets/components/about.vue'
import Projects from './assets/components/projects.vue'
import MiniBlog from './assets/components/blog.vue'
import Contact from './assets/components/contact.vue'

// Vue init

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

// Router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {path: '/', component: App},
    {path: '/blog', component: MiniBlog},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact}
  ],
  mode : 'history'
})
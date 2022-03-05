// necessary importing of files

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// CSS Library

import 'animate.css';
 
// Router imports
import Home from './assets/components/home.vue'
import About from './assets/components/about.vue'
import Projects from './assets/components/project/projects.vue'
import MiniBlog from './assets/components/blog.vue'
import Contact from './assets/components/contact.vue'

// Project info components

import devicespex from './assets/components/project/project-info/devicespex.vue'
// import About from './assets/components/about.vue'
// import Projects from './assets/components/project/projects.vue'
// import MiniBlog from './assets/components/blog.vue'
// import Contact from './assets/components/contact.vue'

// Router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
    {path: '/blog', component: MiniBlog},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact},

    // mediocre routing of project information components
    {path: '/projects/project-info/devicespex', component: devicespex},
    
  ],
  mode : 'history'
})

// Vue init

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})

// I noticed that an error is raised if Vue is initiated before the other plugins. 
// So I imported it last. And it kinda worked.
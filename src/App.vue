<template>
  <div id="app">  
    <main>
      <app-header></app-header>    
      <router-view></router-view>
    </main>      
  </div>
</template>

<script>

import Header from './assets/components/header.vue'

export default {
  components: {
    'app-header': Header
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  /* base styling */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', 'Segoe UI';
  }
  li {
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  button {
    background-color: transparent;
  }
  body {
    background-color: #1f2028;
    color: white;
  }
  main {
    width: 95%;
    margin: auto;
  }
</style>

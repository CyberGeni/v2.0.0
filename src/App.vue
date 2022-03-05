<template>
  <div id="app" >  
    <main>
      <app-header></app-header>    
      <router-view></router-view>
      <button class="resume"><a href="https://drive.google.com/file/d/16DWBpi7qCxY5P_kh4LrdesbpkzbijJ1t/view?usp=sharing" target="_blank">Visit my resume</a></button>
    </main> 
    <footer>cyberGenie 2021 &copy; Treasure Ajefu </footer>     
  </div>
</template>

<script>

import Header from './assets/components/header.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header
  },
  data () {
    return {

    }
  },
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
    scroll-behavior: smooth;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: transparent;
  }
  body {
    background-color: #1f2028;
    color: #fff;
  }
  main {
    width: 95%;
    margin: auto;
  }
  footer {
    text-align: center;
    line-height: 36px;
    background-color: #2e3039;
    color: #a9adc1;
    width: 100%;
    margin-top: 1em;
  }
  .resume {
    border: none;
    background-color: #2e3039;
    padding: 6px 12px;
    position: fixed;
    bottom: 36px;
    right: 24px;
    opacity: 0.85;
  }
  .resume a {
    border: none;
    background-color: #2e3039;
    color: #a9adc1;
    font-size: 16px;
    font-weight: 600;
  }
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2px;
    background-color: #2e3039;
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #414453;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-button {
    height: 0px;
  }
</style>

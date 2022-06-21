<template>
  <div id="app">

    <header-comp/>
    <Navbar />
    <router-view />

    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeaderComp  from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeaderComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

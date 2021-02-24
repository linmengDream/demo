<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <slot-demo>
      
    </slot-demo> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SlotDemo from './pages/slotDemo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // SlotDemo
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

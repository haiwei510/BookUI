<template>
  <div id="app">  
    <router-view name='head'></router-view>
    <router-view></router-view>
    <router-view name='booter'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import './assets/css/main.scss'
</style>

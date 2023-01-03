<template>
  <router-view></router-view>
</template>

<script>
import Layout from './components/Layout/ManagementLayout.vue';
export default{
  components:{
    Layout,
  }
}
</script>

<style>
* {
  padding:0;
  margin:0;
}
html,body,#app{
width: 100%;
height: 100%;
overflow: hidden;
}

body {
  background: #d1d1d1;
}
</style>
<!--
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:04:55
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-20 14:28:45
 * @FilePath: \blog-vue\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  max-width: 960px;
  margin: 0 auto;
}
</style>

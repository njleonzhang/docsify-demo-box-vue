<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <demo-block-wrapper/>
  </div>
</template>

<script>
import {generateComponent} from './components/index'

let DemoBlockWrapper = generateComponent('<template><div>Hello, {{ name }}!</div></template>\n<script>export default {data: function() {return {name: "vue"}}}<\/script>')

export default {
  name: 'app',
  components: {
    DemoBlockWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

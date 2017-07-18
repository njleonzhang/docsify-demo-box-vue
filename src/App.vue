<template>
  <div id="app">
    <img src="./assets/logo.png">
    <demo-block-wrapper/>
  </div>
</template>

<script>
import {generateComponent} from './components'

let jsResources = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>'
  + '\n<scr' + `ipt src="//unpkg.com/element-ui/lib/index.js"></scr` + 'ipt>'
  + '\n<scr' + `ipt src="https://rawgit.com/njleonzhang/vue-data-tables/dev/dist/data-tables.js"></scr` + 'ipt>'

let cssResources = '@import url("//unpkg.com/element-ui/lib/theme-default/index.css");'

let bootCode = 'Vue.use(DataTables)\n'

let DemoBlockWrapper = generateComponent('<desc>`test` hello-word ```dawdawk```</desc><template><div>Hello, {{ name }}!</div></template>\n<script>export default {data: function() {return {name: "vue"}}}<\/script>', 'html', jsResources, cssResources, bootCode)

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

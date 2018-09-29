<template>
  <div id="app">
    <img src="./assets/logo.png">
    <demo-block-wrapper/>
  </div>
</template>

<script>
import { generateComponent } from './components'

let jsResources = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>'
  + '\n<scr' + `ipt src="//unpkg.com/element-ui/lib/index.js"></scr` + 'ipt>'
  + '\n<scr' + `ipt src="https://rawgit.com/njleonzhang/vue-data-tables/dev/dist/data-tables.js"></scr` + 'ipt>'

let cssResources = '@import url("//unpkg.com/element-ui/lib/theme-default/index.css");'

let bootCode = 'Vue.use(DataTables)\n'

let code = `
<desc>
  Hello \`world\`
  * a
  * b
</desc>

<style>
  .wrapper {
    font-size: 20px;
  }
</style>

<template>
  <div>
    <div class='wrapper'>
      <div>
        <p>author: {{author}}</p>
        <button :style="style" @click="onClick">test</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: 'leon',
        style: {
          color: 'blue'
        }
      }
    },
    methods: {
      onClick() {
        alert('author: ' + this.globalVariable)
        this.style.color = 'red'
      }
    }
  }
`


let DemoBlockWrapper = generateComponent(code, 'html', jsResources, cssResources, bootCode)

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

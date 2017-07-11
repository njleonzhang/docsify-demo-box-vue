import Vue from 'vue'
import striptags from '../util/strip-tags'
import DemoBlock from './demo-block'
import guid from '../util/guid'

export let install = function(Vue) {
  Vue.component(DemoBlock.name, DemoBlock)
}

export let generateHtml = function(code) {
  let template = striptags.fetch(code, 'template').trim()
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let desc = striptags.fetch(code, 'desc')

  let componentName = guid()
  let scriptObj = JSON.parse(script.replace('export default', ''))
  scriptObj.template = template

  Vue.component(componentName, scriptObj)
  let jsfiddleStr = JSON.stringify({template, style, script})

  return `<demo-block class="demo-box" :jsfiddle="${jsfiddleStr}" :code="code">
            <div class="source" slot="source"><${componentName}/></div>
          </demo-block/>`
}

export let generateComponent = function(code) {
  let html = striptags.fetch(code, 'template')
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let desc = striptags.fetch(code, 'desc')

  let scriptStr = script.replace('export default', '').trim()
  let scriptObj = eval('(' + scriptStr + ')')

  scriptObj.template = html

  let jsfiddleStr = JSON.stringify({html, style, script})

  return {
    template: `
      <demo-block class="demo-box" :jsfiddle="jsfiddle" :code="code">
        <div class="source" slot="source"><my-code/></div>
      </demo-block/>
    `,

    components: {
      DemoBlock,
      MyCode: scriptObj
    },

    data() {
      return {
        jsfiddle: {html, style, script},
        code
      }
    }
  }
}

import Vue from 'vue'
import striptags from '../util/strip-tags'
import demoBlock from './demo-block'
import guid from '../util/guid'

export let componentStr = function(code) {
  let template = striptags.fetch(code, 'template').trim()
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let desc = striptags.fetch(code, 'desc')

  let componentName = guid()
  let scriptObj = JSON.parse(script.replace('export default', ''))
  scriptObj.template = template

  Vue.component(componentName, scriptObj)
  let jsfiddleStr = JSON.stringify({template, style, script})

  return `<demo-block class="demo-box" :jsfiddle="${jsfiddleStr}">
            <div class="source" slot="source"><${componentName}/></div>
          </demo-block/>`
}

export let DemoBlockGenerator = function(code) {
  let html = striptags.fetch(code, 'template')
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let desc = striptags.fetch(code, 'desc')

  let componentName = guid()
  let scriptStr = script.replace('export default', '').trim()
  let scriptObj = eval('(' + scriptStr + ')')

  scriptObj.template = html

  Vue.component(componentName, scriptObj)

  let jsfiddleStr = JSON.stringify({html, style, script})

  return {
    template: `
      <demo-block class="demo-box" :jsfiddle="jsfiddle">
        <div class="source" slot="source"><${componentName}/></div>
      </demo-block/>
    `,

    components: {demoBlock},

    data() {
      return {
        jsfiddle: {html, style, script}
      }
    }
  }
}

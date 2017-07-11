import Vue from 'vue'
import striptags from '../util/strip-tags'
import DemoBlock from './demo-block'
// import guid from '../util/guid'

export let install = function() {
  Vue.component(DemoBlock.name, DemoBlock)
}

// export let generateHtml = function(code) {
//   let template = striptags.fetch(code, 'template').trim()
//   let style = striptags.fetch(code, 'style')
//   let script = striptags.fetch(code, 'script')
//   let desc = striptags.fetch(code, 'desc')
//
//   let componentName = guid()
//   let scriptStr = script.replace('export default', '').trim()
//   let scriptObj = eval('(' + scriptStr + ')')
//
//   scriptObj.template = template
//
//   Vue.component(componentName, scriptObj)
//   console.log(componentName)
//   let jsfiddleStr = JSON.stringify({template, style, script})
//   console.log(jsfiddleStr)
//   return `<demo-block class="demo-box" :jsfiddle="${jsfiddleStr}" :code="code">
//             <div class="source" slot="source"><${componentName}/></div>
//           </demo-block/>`
// }

export let generateComponent = function(code, lang, jsResources, cssResources, bootCode) {
  let html = striptags.fetch(code, 'template')
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let desc = striptags.fetch(code, 'desc')

  let scriptStr = script.replace('export default', '').trim()
  let scriptObj = eval('(' + scriptStr + ')')

  scriptObj.template = html

  let jsfiddleStr = JSON.stringify({html, style, script})

  console.log(jsResources, cssResources, bootCode)

  return {
    template: `
      <demo-block class="demo-box"
        :jsfiddle="jsfiddle"
        :code="code"
        :desc="desc"
        :lang="lang"
        :js-resources="jsResources"
        :css-resources="cssResources"
        :boot-code="bootCode">
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
        code,
        desc,
        lang,
        jsResources,
        cssResources,
        bootCode
      }
    }
  }
}

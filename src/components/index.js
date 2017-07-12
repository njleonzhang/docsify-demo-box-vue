import Vue from 'vue'
import striptags from '../util/strip-tags'
import DemoBlock from './demo-block'

export let install = function() {
  Vue.component(DemoBlock.name, DemoBlock)
}

export let generateComponent = function(code, lang, jsResources, cssResources, bootCode) {
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

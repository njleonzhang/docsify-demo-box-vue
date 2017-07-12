import Vue from 'vue'
import {generateComponent, install} from '../components/'

install(Vue)

export let create = function(jsResources, cssResources, bootCode) {
  return function(hook, vm) {
    window.$docsify.markdown = {
      renderer: {
        code: function(code, lang) {
          if (/^\/\*\s*vue\s*\*\//.test(code)) {
            id++
            var DemoBlockWrapper = generateComponent(code, lang, jsResources, cssResources, bootCode)
            Vue.component('DemoBox' + id, DemoBlockWrapper)
            return '<' + 'demo-box-' + id + '></demo-box-' + id + '>'
          } else {
            lang = lang || ''
            var hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
            return '<pre v-pre data-lang="' + lang + '"><code class="lang-' + lang + '">' + hl + '</code></pre>'
          }
        }
      }
    }
  }
}

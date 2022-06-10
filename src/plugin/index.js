import {generateComponent} from '../components/'

let createCodeFn = function(oCodeFn) {
  let id = 0

  return function(code, lang) {
    if (/^\s*\/\*\s*vue\s*\*\//.test(code)) {
      id++
      var DemoBlockWrapper = generateComponent(code, lang, jsResources, cssResources, bootCode)
      window.$docsify.vueComponents["demo-box-" + id] = DemoBlockWrapper
      return `<demo-box-${id} box-id='${id}'></demo-box-${id}>`
    } else {
      if (oCodeFn) {
        return oCodeFn.apply(this, arguments)
      } else {
        lang = lang || ''
        var hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
        return '<pre v-pre data-lang="' + lang + '"><code class="lang-' + lang + '">' + hl + '</code></pre>'
      }
    }
  }
}

export let create = function(jsResources, cssResources, bootCode) {
  return function(hook, vm) {
    window.$docsify.markdown = window.$docsify.markdown || {}
    window.$docsify.markdown.renderer = window.$docsify.markdown.renderer || {}
    window.$docsify.vueComponents = window.$docsify.vueComponents || {}

    window.$docsify.markdown.renderer.code = createCodeFn(window.$docsify.markdown.renderer.code)
  }
}

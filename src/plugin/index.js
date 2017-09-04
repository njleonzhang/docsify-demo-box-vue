import {generateComponent} from '../components/'
import ReactDOM from  'react-dom'

function renderComponent(Component, id) {
  setTimeout(function () {
    ReactDOM.render(Component(), document.getElementById(id + ''))
  })
}

export let create = function(jsResources, cssResources, bootCode) {
  return function(hook, vm) {
    let id = 0
    window.$docsify.markdown = {
      renderer: {
        code: function(code, lang) {
          if (/^\/\*\s*react\s*\*\//.test(code)) {
            id++
            let Component = generateComponent(code, lang, jsResources, cssResources, bootCode)
            renderComponent(Component, id)
            return '<div id="' + id + '"/></div/>'
          } else {
            lang = lang || ''
            let hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
            return '<pre v-pre data-lang="' + lang + '"><code class="lang-' + lang + '">' + hl + '</code></pre>'
          }
        }
      }
    }
  }
}

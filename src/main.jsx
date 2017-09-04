import React from 'react'
import ReactDOM from 'react-dom'
import {generateComponent} from './components'

let jsResources = '<scr' + 'ipt src="//cdn.bootcss.com/react/15.6.1/react.js"></scr' + 'ipt>' +
  '\n<scr' + 'ipt src="//cdn.bootcss.com/react/15.6.1/react-dom.js"></scr' + 'ipt>'

let cssResources = '@import url("//unpkg.com/element-ui/lib/theme-default/index.css");'
let bootCode = ''

let code = `
  <script>
    export default class Application extends React.Component {
      render() {
        return (
          <div>
            <div className='wrapper' ref={el => this.el = el}>
              <div>
              <button className='test' onClick={e => {console.log(e)}}>test</button>
              </div>
            </div>
          </div>
        )
      }
    }
  </script>
`

var Component = generateComponent(code, 'jsx', jsResources, cssResources, bootCode)

ReactDOM.render(
  <Component/>,
  document.getElementById('apphook')
)

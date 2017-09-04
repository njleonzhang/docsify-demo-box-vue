import React, { Component } from 'react'
import classNames from 'classnames'
import '../assets/demoBlock.scss'
import striptags from '../util/strip-tags'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js';

export default class DemoBlock extends Component {
  static defaultProps = {
    jsfiddle: {},
    desc: '',
    code: '',
    lang: '',
    jsResources: '',
    cssResources: '',
    bootCode: ''
  }

  static propsTypes = {
    jsfiddle: PropTypes.object,
    desc: PropTypes.string,
    code: PropTypes.string,
    lang: PropTypes.string,
    jsResources: PropTypes.string,
    cssResources: PropTypes.string,
    bootCode: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      hovering: false,
      controlText: 'Expand',
      codeAreaHeight: 0
    }

    this.isExpanded = false

    let hl = Prism.highlight(
      striptags.fetch(
        this.props.code,
        'script'
      ).replace(/\/\*.*\*\/\s*/g, ''),
      Prism.languages[this.props.lang] || Prism.languages.markup)

    this.state.codePrismed =
      `<pre data-lang="${this.props.lang}">
        <code class="lang-${this.props.lang}">${hl}</code>
      </pre>`
  }

  componentDidMount() {
    if (this.codeArea.getElementsByClassName('description').length > 0) {
      this.codeAreaHeight =
        Math.max(this.codeArea.getElementsByClassName('description')[0].clientHeight,
          this.codeArea.getElementsByClassName('highlight')[0].clientHeight)
    } else {
      this.codeAreaHeight = this.codeArea.getElementsByClassName('highlight')[0].clientHeight;
    }
  }

  onMouseEnter = _ => {
    this.setState({
      hovering: true
    })
  }

  onMouseLeave = _ => {
    this.setState({
      hovering: false
    })
  }

  toggleDetail = _ => {
    this.isExpanded = !this.isExpanded

    if (this.isExpanded) {
      this.setState({
        codeAreaHeight: `${this.codeAreaHeight}px`,
        controlText: 'Hide'
      })
    } else {
      this.setState({
        codeAreaHeight: 0,
        controlText: 'Expand'
      })
    }

  }

  goJsfiddle = _ => {
    const { script, html, style } = this.props.jsfiddle;
    let ComponentName = script.match(/export default class (.*) extends/)[1]

    let jsTpl = this.props.bootCode + '\n' + (script || '').replace(/export default/, '').trim();
    let htmlTpl = `${this.props.jsResources || ''}\n<div id="app">\n${html.trim()}\n</div>`;
    let cssTpl = `${this.props.cssResources || ''}\n${(style || '').trim()}\n`;

    if (jsTpl) {
      jsTpl = `${jsTpl}\nReactDOM.render(<${ComponentName} \/>, document.getElementById("app"))`
    }

    const data = {
      js: jsTpl,
      css: cssTpl,
      html: htmlTpl,
      panel_js: 3,
      panel_css: 1
    };
    const form = document.getElementById('fiddle-form') || document.createElement('form');
    form.innerHTML = '';
    const node = document.createElement('textarea');

    form.method = 'post';
    form.action = 'https://jsfiddle.net/api/post/library/pure/';
    form.target = '_blank';

    for (let name in data) {
      node.name = name;
      node.value = data[name].toString();
      form.appendChild(node.cloneNode());
    }
    form.setAttribute('id', 'fiddle-form');
    form.style.display = 'none';
    document.body.appendChild(form);

    form.submit();
  }

  render() {
    var hoverClass = classNames({
      'demo-block': true,
      'hover': this.state.hovering
    })

    return (
      <div
        className={ hoverClass }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave } >
        <div className="source">
          { this.props.children }
        </div>
        <div className="meta" ref={codeArea => this.codeArea = codeArea} style={{height: this.state.codeAreaHeight}}>
          <div className="description">
            <div dangerouslySetInnerHTML={ {__html: this.props.desc} } />
            <button className='go' type="primary" onClick={this.goJsfiddle}>Try in Jsfiddle!</button>
          </div>
          <div className="highlight" dangerouslySetInnerHTML={ {__html: this.state.codePrismed} } />
        </div>
        <div className="demo-block-control" onClick={this.toggleDetail}>
          <div className="arrow-slide" />
          <div className="text-slide">
            <span>{ this.state.controlText }</span>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import striptags from '../util/strip-tags'
import DemoBlock from './demo-block'
import marked from 'marked'

export let generateComponent = function(code, lang, jsResources, cssResources, bootCode) {
  let html = striptags.fetch(code, 'template')
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let descOrg = striptags.fetch(code, 'desc')
  let desc = marked && marked(descOrg) || descOrg
  let noBootCode = code.indexOf('/*no-boot-code*/') > -1
  if (noBootCode) {
    bootCode = ""
  }

  let allJsResources = jsResources

  let extraJsMatchStrList = code.match(/\/\*\s*jsResource(.*)\*\//)
  if (!!extraJsMatchStrList) {
    let jsList = extraJsMatchStrList[1].split(' ')
    for(let js of jsList) {
      allJsResources += `\n<script src="${js}"></script>`
    }
  }

  let scripts = script.split('export default')
  let scriptStrOrg = `(function() {${scripts[0]} ; return (${scripts[1]})})()`
  let scriptStr = Babel && Babel.transform(scriptStrOrg, { presets: ['es2015', 'react', 'stage-2'] }).code || scriptStrOrg
  let MyCodeComponent = eval(scriptStr)

  let jsfiddle = {
    html,
    style,
    script
  }

  function DemoBlockWrapper(props) {
    return (
      <DemoBlock
        className='demo-box'
        jsfiddle={ jsfiddle }
        code={ code }
        desc={ desc }
        lang={ lang }
        jsResources={ allJsResources }
        cssResources={ cssResources }
        bootCode={ bootCode }
        noBootCode={ noBootCode }>
        <MyCodeComponent></MyCodeComponent>
      </DemoBlock>
    )
  }

  return DemoBlockWrapper
}

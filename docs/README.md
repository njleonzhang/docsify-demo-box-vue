# [docsify-demo-box-vue](https://github.com/njleonzhang/docsify-demo-box-vue/)

> A plugin for [docsify](https://docsify.js.org/#/) to write Vue jsx demo with instant preview and jsfiddle integration

This plugin is for Vue. For React, please use [docsify-demo-box-react](https://njleonzhang.github.io/docsify-demo-box-react/)

## Usage

1. import vue and this plugin to docsify `index.html`
```
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/docsify-demo-box-vue@{version}/dist/docsify-demo-box-vue.min.js"></script>
```

2. Use this plugin as docsify plugin
```js
  var jsResources = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>'
  var cssResources = '@import url("//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css");'
  var bootCode = 'var globalVariable = "leon"'
  var globalVariable = "leon"

  window.$docsify = {
    name: 'docsify-demo-box-vue',
    repo: 'https://github.com/njleonzhang/docsify-demo-box-vue',
    plugins: [
      DemoBoxVue.create(jsResources, cssResources, bootCode)
    ]
  }
```

parameter of `create`:
* jsResources: javascript script will be added in `jsfiddle` html filed
* cssResources: css link will be added in `jsfiddle` css filed
* bootCode: javascript code you want to add before sample code in `jsfiddle` javascript filed, which is usually used to boot your library.


## sample

This doc is a sample, check the source [md](https://njleonzhang.github.io/docsify-demo-box-vue/)

write the following code with tag `/*vue*/`:

```html
<desc>
Hello `world`
* a
* b
</desc>

<style>
    .wrapper {
        font-size: 20px;
    }
</style>

<template>
    <div>
        <div class='wrapper'>
            <div>
                <p>author: {{globalVariable}}</p>
                <button :style="style" @click="onClick">test</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                globalVariable,
                style: {
                    color: 'blue'
                }
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.globalVariable)
                this.style.color = 'red'
            }
        }
    }
</script>
```

it will render as:

```html
/*vue*/
<desc>
Hello `world`
* a
* b
</desc>

<style>
    .wrapper {
        font-size: 20px;
    }
</style>

<template>
    <div>
        <div class='wrapper'>
            <div>
                <p>author: {{globalVariable}}</p>
                <button :style="style" @click="onClick">test</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                globalVariable,
                style: {
                    color: 'blue'
                }
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.globalVariable)
                this.style.color = 'red'
            }
        }
    }
</script>
```

The sample code is rendered on the page instantly, so the people who read your document can see the preview immediately.
If he/she expands the demo box, the source code and description are shown there.
Click the button `Try in Jsfiddle`, `jsfiddle.net` will be open with the code of this sample.

> `desc` tag can be used to add description for the sample. `Markdown` syntax is supported

## Advanced options, AKA comments

### Don't embed the global bootcode

In this sample, you may have found that `globalVariable` is defined in `index.html`.

```
  var bootCode = 'var globalVariable = "leon"' // bootCode is for jsfiddle
  var globalVariable = "leon"   // this define is rendering for preview
```

Now if you want to change the value of `globalVariable`, you need to change both values for preview and `jsfiddle`.
It's easy for preview, just override the define. but for `jsfiddle`, you need this comments `/*no-boot-code*/`.


```html
/*vue*/
/*no-boot-code*/
<template>
    <div>
        <div className='wrapper'>
            <div>
                <p>author: {{globalVariable}}</p>
                <button :style="style" @click="onClick">test</button>
            </div>
        </div>
    </div>
</template>

<script>
    let globalVariable = 'leon zhang'
    export default {
        data() {
            return {
                globalVariable,
                style: {
                    color: 'blue'
                }
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.globalVariable)
                this.style.color = 'red'
            }
        }
    }
</script>
```

### special js link
In this sample, default js resource is defined as `vue` in `index.html`

```
// for preview
<script src="//unpkg.com/vue/dist/vue.js"></script>

// for jsfiddle
var jsResources = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>'
```

If you want to add special js resource for some samples, you need add `script` link in `index.html` for preview.
At same time, use `jsResource` comment to add script for `jsfiffle`

```
/*jsResource jslink1 jslink2 ...*/
```

```html
/*vue*/
/*jsResource //cdn.bootcss.com/react/15.6.1/react.js */
<template>
    <div>
        <div className='wrapper'>
            <div>
                <p>author: {{globalVariable}}</p>
                <button :style="style" @click="onClick">test</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                globalVariable,
                style: {
                    color: 'blue'
                }
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.globalVariable)
                this.style.color = 'red'
            }
        }
    }
</script>
```

Try in `jsfiddle`, you will find the following script is added to `jsfiddle` html area.
```
<script src="//cdn.bootcss.com/react/15.6.1/react.js"></script>
```

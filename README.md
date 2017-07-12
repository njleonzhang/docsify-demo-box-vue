# docsify-demo-box-plugin

> element-ui demo box, write demo in md, instant preview, edit in jsfiddle(only support Vue currently)

1. Link the script
```
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="https://rawgit.com/njleonzhang/docsify-demo-box/master/dist/docsify-demo-box-plugin.js"></script>
```

2. Use as docsify plugin

```
window.$docsify = {
  ...

  plugins: [
    DemoBoxPlugin.create(jsResources, cssResources, bootCode)
  ]
}
```

* jsResources: javascript `script` will be added in jsfiddle `html` filed
* cssResources: css `link` will be added in jsfiddle `css` filed
* bootCode: javascript code, you want to add before sample code in jsfiddle `javascript` filed, which is usually used to boot your library.

  [sample docsify index.html](https://github.com/njleonzhang/vue-data-tables-doc/blob/master/index.html)

3. write code in md

# Render a table

```
```html
/*vue*/
<desc>
  some desc your want
</desc>
<template>
  <div>Hello, {{ name }}!</div>
</template>

<script>
  export default {
    data() {
      return { name: 'Vue' }
    }
  }
</script>
```// end
```

* [sample](https://njleonzhang.github.io/vue-data-tables-doc/#/quickstart?id=hello-word)

* [sample source md](https://github.com/njleonzhang/vue-data-tables-doc/blob/master/quickstart.md#hello-word)

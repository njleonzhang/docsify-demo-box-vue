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

  [sample docsify index.html](https://github.com/njleonzhang/vue-data-tables/blob/master/docs/index.html)

3. write code in md

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

To support es6 in `code` filed, link stand-alone babel in docsify index.html
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
* [sample](https://njleonzhang.github.io/vue-data-tables/#/quickstart?id=hello-word)

* [sample source md](https://github.com/njleonzhang/vue-data-tables/blob/master/docs/quickstart.md#hello-word)

# comments
For special code sample, you may need some special config, use `comment`s to implement

## don't embed the global bootcode

If you donot want the global bootcode configed by `DemoBoxPlugin.create` for some samples, add comment:

```
/*no-boot-code*/
```
* [sample code](https://github.com/njleonzhang/vue-data-tables/blob/master/docs/searchBoxFilter.md#customize-filter-logic)
* [sample](https://njleonzhang.github.io/vue-data-tables/#/searchBoxFilter?id=customize-filter-logic)

## special js link

If you want to add special jsResource for some samples, use `jsResource` comments

```
/*jsResource [jslink1 jslink2 ....]*/
```
* [sample code](https://github.com/njleonzhang/vue-data-tables/blob/master/docs/event.md#filtered-data)
* [sample](https://njleonzhang.github.io/vue-data-tables/#/event?id=filtered-data)

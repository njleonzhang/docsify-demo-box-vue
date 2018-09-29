export default function(css) {
  let style = document.createElement('style')
   style.type = 'text/css'
  if (style.styleSheet) {
      style.styleSheet.cssText = css
  } else {
      style.appendChild(document.createTextNode(css))
  }
  document.head.appendChild(style)
}

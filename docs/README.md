# [docsify-demo-box-react](https://github.com/njleonzhang/docsify-demo-box-react/)

> element-ui demo box, write demo in md, instant preview, edit in jsfiddle

```jsx
/*react*/
<script>
  export default class Application extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        color: 'blue'
      }
    }
    render() {
      return (
        <div>
          <div className='wrapper' ref={el => this.el = el}>
            <div>
            <button style={{color: this.state.color}} className='test' onClick={e => {alert('test'); this.setState({color: 'red'})}}>test</button>
            </div>
          </div>
        </div>
      )
    }
  }
</script>
```


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class R2 extends React.Component {
  constructor() {
    super()
    
    //this.listener = this.listener.bind(this)
  }
  // componentDidMount() {
  //   document.addEventListener('click',this.listener)
  // }
  // listener() {
  //    console.log(this)
  // }
  // componentWillUnmount () {
   
  //   document.removeEventListener('click', this.listener)
  // }
  render() {
    return (
      <div>2222</div>
    )
    
  }
}
class R3 extends React.Component {
  componentDidMount() {
    // document.addEventListener('click', function () {
    //   console.log('333')
    // })
  }
  render() {
    return (
      <div>3333</div>
    )
  }
}
class R1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc : <R2 testr2 = 'test2'/>
    }
  }
  componentDidMount() {
    document.addEventListener('click', function () {
      console.log(this.props.children)
    }.bind(this))
    
    // setTimeout(function () {
    //   this.setState({
    //     cc: <R3 />
    //   })
    // }.bind(this), 4000)
  }

  render() {
   return (
      <div>
        {this.state.cc}
        {this.props.children}
      </div>
   )
  }
}
ReactDOM.render(<R1><R3 aa="aaa" /></R1>, document.getElementById('hello-react'));




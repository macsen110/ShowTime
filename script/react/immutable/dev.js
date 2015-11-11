import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { 
  Map, 
  List, 
  fromJS, 
  OrderedMap,
  Seq 
  } from 'immutable';


class C1 extends Component {
  constructor() {
    super();
    this.state = {
      data: Map({ count: 0, items: List() })
    }
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleAddItemClick = this.handleAddItemClick.bind(this)
  }
  handleCountClick() {
    this.setState(({data}) => ({
      data: data.update('count', v => v + 1)
    }));
  }
  handleAddItemClick() {
    this.setState(({data}) => ({
      data: data.update('items', list => list.push(data.get('count')))
    }));
  }
  render() {
    var data = this.state.data;
    return (
      <div>
        <button onClick={this.handleCountClick}>Add to count</button>
        <button onClick={this.handleAddItemClick}>Save count</button>
        <div>
          Count: {data.get('count')}
        </div>
        Saved counts:
        <ul>
          {data.get('items').map((item, index) => 
            <li key={index}>Saved: {item}</li>
          )}
        </ul>
      </div>
    );
  }

};

class C2 extends Component {
  constructor() {
    super();
    this.state = {value: { foo: 'bar' } }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    var value = this.state.value;
    value.foo += 'bar'; // ANTI-PATTERN!
    this.setState({ value: value });
  }
  render() {
    return (
      <div>
        <a onClick={this.onClick}>Component2: Click me</a>
        <C2Inner value = {this.state.value} />
      </div>
    );
  }
}

class C2Inner extends Component {
  constructor() {
    super()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }
  render() {
    return <div>innerComponent2: {this.props.value.foo}</div>
  } 
}


class C3 extends Component {
  constructor() {
    super();
    this.state = {
      value: Map({foo: 'bar'}) 
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    var value = this.state.value;
    
    this.setState(({value}) => {
      return {
        value: value.update('foo', v => v + 'bar')
      }
    });
  }
  render() {
    return (
      <div>
        <a onClick={this.onClick}>Component3: Click me</a>
        <C3Inner value = {this.state.value} />
      </div>
    );
  }
}

class C3Inner extends Component {
  constructor() {
    super()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }
  render() {
    console.log(this.props.value)
    return <div>innerComponent3: {this.props.value.get('foo')}</div>
  } 
}

ReactDom.render(<C1 />, document.getElementById('app'));
ReactDom.render(<C2 />, document.getElementById('app2'));
ReactDom.render(<C3 />, document.getElementById('app3'));
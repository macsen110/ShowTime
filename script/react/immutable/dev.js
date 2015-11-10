import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Map, List } from 'immutable';

var list1 = List.of(1, 2);
var list2 = list1.push(3, 4, 5);
var list3 = list2.unshift(0);
var list4 = list1.concat(list2, list3);

console.log(list1)
console.log(list2)
console.log(list3)
console.log(list4)


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

ReactDom.render(<C1 />, document.getElementById('app'));
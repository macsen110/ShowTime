import React, { Component } from 'react';
import {actions} from './actions';
import TodoStore from './store';

function getTodoState() {
  return {
    numbers: TodoStore.getAll()
  };
}

export default class App extends Component {
	constructor(props, context) {
		super(props, context);
		this._onChange = this._onChange.bind(this);
		this.state = getTodoState()
	}
	componentDidMount() {
		TodoStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this._onChange);
	}
	_onChange() {
		this.setState(getTodoState());
	}
	render() {
		return (
			<div>
				<p className="title" onClick={()=>actions.add(1)}>click me, +1</p>
				<p className="title" onClick={()=>actions.cut(1)}>click me, -1</p>
				<p>{this.state.numbers}</p>
			</div>
		)
	}
}
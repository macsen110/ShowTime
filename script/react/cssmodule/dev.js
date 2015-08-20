import React from 'react';
import style from './style.css';
var css = require('./style.css');
console.log('css ' + JSON.stringify(css));
class DemoCss extends React.Component {
	render() {
		return (
			<div className= {style.className} >hello, demo css module</div>
		)
	}
} 

React.render(<DemoCss />, document.body)
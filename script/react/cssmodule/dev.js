import React from 'react';
import './style.css';
import style from './style.css';
console.log(style.className)
class DemoCss extends React.Component {
	render() {
		return (
			<div className={style.className}>hello, demo css module</div>
		)
	}
} 

React.render(<DemoCss />, document.body)
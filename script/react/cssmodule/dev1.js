import React, { Component } from 'react';
import style from './style1.css';
console.log(style)
class DemoCss1 extends Component {
	render() {
		return (
			<div className={style.className}>hello, demo css</div>
		)
	}
} 

export default DemoCss1;
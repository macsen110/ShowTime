import React, { Component } from 'react';
import './style1.css';
import style from './style1.css';
class DemoCss1 extends Component {
	render() {
		return (
			<div className={style.className}>hello, demo css</div>
		)
	}
} 

export default DemoCss1;
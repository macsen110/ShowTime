import React, { Component } from 'react';
import './style2.css';
import style from './style2.css';
class DemoCss2 extends Component {
	render() {
		return (
			<div className={style.otherClassName}>hello, demo css module</div>
		)
	}
} 

export default DemoCss2;
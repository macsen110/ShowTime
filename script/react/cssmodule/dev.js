import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dev1 from './dev1';
import Dev2 from './dev2';
class DemoCss extends Component {
	render() {
		return (
			<div>
				<Dev1 />
				<Dev2 />
			</div>
		)
	}
} 

ReactDom.render(<DemoCss />, document.getElementById('demoCss'))
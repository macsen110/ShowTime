import React, { Component } from 'react';
import style from './style1.css';

class DemoCss1 extends Component {
	render() {
		return (
			<div className={style.className}>
				<h1 className={style.blur + ' ' + style.sepia}>hello, demo css</h1>
				<h2>oops</h2>
				<a href="http://www.baidu.com">test for baidu</a>
				<table>
					<tbody>
						<tr>
							<td>dddd</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
} 

export default DemoCss1;
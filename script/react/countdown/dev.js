/*************
 * 
 * a countDown timer use ES6 React
************** */
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import style from './style.css';

class WrapTimer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			alltime: null
		}
		// this.saveTimer = this.saveTimer.bind(this);
	}
	saveTimer() {
		var div = this.refs.container;
		var day = +div.querySelector('[data-name="day"]').value * 24 * 60 * 60 ;
		var hour = +div.querySelector('[data-name="hour"]').value * 60 * 60;
		var minute = +div.querySelector('[data-name="minute"]').value * 60;
		var second = +div.querySelector('[data-name="second"]').value;
		var alltime = day + hour + minute + second;

		this.setState({
			alltime: alltime
		})

	}
    toParent() {
        console.log(this.state)
    }
	render() {	
		
		var alltime = this.state.alltime;
		var timer = alltime > 0 ? <Timer toParent={() => this.toParent()} secondsRemaining = {alltime} /> : '';	
		return (
			<div className="wrap-timer">
				<ul ref = "container">
					<li><input placeholder="day" data-name="day" className="ipt" defaultValue="1" /></li>
					<li><input placeholder="hour" data-name="hour" className="ipt" defaultValue="1" /></li>
					<li><input placeholder="minute" data-name="minute" className="ipt" defaultValue="1" /></li>
					<li><input placeholder="second" data-name="second" className="ipt" defaultValue="1" /></li>
					<li><input className="btn" onClick = {()=> this.saveTimer()} defaultValue="Set" /></li>
                    
				</ul>
				{timer}
			</div>
		)
	}
}

class Timer extends Component {
	static propTypes = {
		secondsRemaining: PropTypes.number.isRequired
	};
	constructor(props, context) {
		super(props, context);
		this.tick = this.tick.bind(this);
		this.state = {
			secondsRemaining : 0
		}
		var self = this;

	}
	tick() {
		this.setState({
			secondsRemaining: this.state.secondsRemaining - 1
		});
		if (this.state.secondsRemaining <= 0) {
			clearInterval(this.interval);
		}
	}
	componentWillReceiveProps(newProps, oldProps) {

		this.setState({
			secondsRemaining: newProps.secondsRemaining
		})
	}
	componentDidMount() {
		var self = this;
		this.setState({
			secondsRemaining: self.props.secondsRemaining
		})
		this.interval = setInterval(this.tick, 1000);
	}
	countLeftTime(secondsRemaining) {
		var dd = parseInt(secondsRemaining / 60 / 60 / 24 % 60);//计算剩余的天数
		var hh = parseInt(secondsRemaining / 3600 % 24);//计算剩余的小时数
		var mm = parseInt(secondsRemaining / 60) % 60;//计算剩余的分钟数
		var ss = parseInt(secondsRemaining % 60, 10);//计算剩余的秒数
		return {
			dd,
			hh,
			mm,
			ss
		}
	}
	render() {
		var leftTime = this.countLeftTime(this.state.secondsRemaining);
		return (
			<div>
                <ul className={style.timer_container}>
                    {leftTime.dd > 0 ? <li className="item day"><span className="text">{leftTime.dd}</span>天</li> : ''}
                    {leftTime.hh > 0 ? <li className="item hour"><span className="text">{leftTime.hh}</span>小时</li> : ''}
                    {leftTime.mm > 0 ? <li className="item minute"><span className="text">{leftTime.mm}</span>分钟</li> : ''}
                    {leftTime.ss > 0 ? <li className="item second"><span className="text">{leftTime.ss}</span>秒</li> : '0秒'}
                </ul>
                <p onClick={this.props.toParent}>child comminute to parent</p>
            </div>
		)
	}
} 

ReactDom.render(<WrapTimer/>, document.getElementById('Timer'))
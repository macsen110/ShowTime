var Demo = React.createClass({
	getDefaultProps() {
		console.log('getDefaultProps');
		return {
			prop_timer: 0
		}
	},
	getInitialState() {
		console.log('getInitialState')
		return {
			state_timer: 0
		}
	},
	componentWillMount() {	
		console.log('componentWillMount')
	},
    componentWillReceiveProps() {
		console.log('componentWillReceiveProps CommentPropList')
	},
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps)
		console.log(nextState)
		return false;
	},
    componentWillUpdate() {
		console.log('componentWillUpdate')
	},
	componentDidMount() {
		console.log('componentDidMount');
		console.log(document.getElementById('react'))
		var interval = setInterval(function (){
			this.setState({
				state_timer: ++this.state.state_timer
			})
		}.bind(this), 1000)
	},
	render() {
		console.log('render');
		return <p id="react">{this.state.state_timer}</p>
	}
})
React.render(<Demo />, document.getElementById('lifeCircle'))
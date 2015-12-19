//console.log(typeof React);
React.render(
	<a href="http://www.baidu.com" aria-hidden={true}>hello,ReactJs</a>,
	document.getElementById('hello-react')
)
//create a comment
var Mockbar = 'bar';
var Mockfoo = 'foo'; 
var mockProp = {Mockbar,Mockfoo};
var Comment = React.createClass({
	componentDidMount: function () {
	},
	render: function() {
        React.renderToStaticMarkup(React.DOM.img());
        return React.DOM.img({ alt: 'ref2' }, null);
    }
})
React.render(<Comment {...mockProp}/>,document.getElementById('commentBox'))

//create a comment by another method

var Comment2 = React.createClass({
	displayName:'CommentBox',
	render: function() {
		return (
			React.createElement('div',null,"hello,i'm another comment created")
		)
	}
})

React.render(
	//<Comment2/>,
	React.createElement(Comment2,null),
	document.getElementById('comment2')
)

var CommentList = React.createClass({
	render: function() {
		var self = this;
		return (
	      <div className="commentList" dangerouslySetInnerHTML={{__html:'<span>Hello, world! I am a CommentList' + self.props.index +'</span>'}}>
	      </div>
		)
	}
}) 

var CommentMix = React.createClass({
	getInitialState: function () {
		return {
			mockData: [1,2,3,4]
		}
		
	},
	componentWillMount: function (params) {
		
		this.setState({mockData:[1,2]})
	},
	componentDidMount: function () {
		setTimeout(function () {
			var pushArr = this.state.mockData;
			pushArr.push(6);
			this.setState({mockData:pushArr})	
		}.bind(this), 1000)
	},
	render: function() {
		var mockData = this.state.mockData;
		var ccc = mockData.map(function (i) {
			return <CommentList index={i} key={i} />
		})
		return (
			<div className="CommentMix">
				{ccc}
			</div>
		)

	} 
})

React.render(
	<CommentMix />,
	document.getElementById('CommentMix')
)

var CommentProp = React.createClass({
	selfAttr: 'My own Attr',
	clickHandle: function() {
		alert('oops')
	},
	render: function() {
		return (
		  <div className="comment" >
		    <h2>
		      {this.props.author}
		    </h2>
		    <div onClick={this.clickHandle}>{this.selfAttr}</div>
		    <div>{'First \u00b7 Second'}</div>
			<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
			<div>{['First ', <span>&middot;</span>, ' Second']}</div>
			{React.Children.count}
		  </div>
		);
	}
});

React.render(
	<CommentProp  author='Macsen2'/>,
	document.getElementById('use-props')
)

var CommentPropItem = React.createClass({
	componentWillReceiveProps: function () {
		console.log('componentWillReceiveProps CommentPropList')
	},
	render: function() {
		return (
		  <div className="CommentPropItem">
		  <p>aaaaaaaa</p>
		    <h2>
		      {this.props.author}
		    </h2>
			<h2 >{this.props.test}</h2>

		  </div>
		);
	}
});
var CommentPropList = React.createClass({
	getDefaultProps: function () {
		console.log('getDefaultProps CommentPropList')
		return {
			test: 'test props'
		}
	},
	getInitialState: function () {
		console.log('getInitalState CommentPropList')
		return {
			author: this.props.test
		}
	},
	shouldComponentUpdate: function (nextProps, nextState) {

		console.log('shouldComponentUpdate CommentPropList');
		return true;
	},
	componentWillReceiveProps: function () {
		console.log('componentWillReceiveProps CommentPropList')
	},
	componentWillMount: function () {
		console.log('componentWillMount CommentPropList')	
	},
	componentWillUpdate: function () {
		console.log('componentWillUpdate CommentPropList')
	},
	componentDidMount: function () {
		console.log('mouted ' + this.isMounted());
		console.log('componentDidMount CommentPropList');
		setTimeout(function () {
			this.setState({
				author: 'macsen2'
			})
		
		}.bind(this), 3000)
	},
  	render: function() {
	    return (
	    	<CommentPropItem id={ 2>1 ? id = "sssss" : ''} author={this.state.author} test={this.props.test}  />
	    );
  }
});


React.render(
	<CommentPropList />,
	document.getElementById('use-props-list')
)

var CommentUrl = React.createClass({
	statics: {
		test: function () {
			console.log(this.custom)
		}
	},
	custom: '008',
	getInitialState: function () {
		console.log(this.custom + 'getInitialState');
		return {
			liked: false
		}
	}, 
	componentDidMount: function() {
		console.log(this.custom + 'componentDidMount');
		var that = this;
		setTimeout(function () {
			that.setState({liked: !that.state.liked});
		}, 2000)
		var promise = new Promise( function(resolve, reject ){
			var _xhr = new XMLHttpRequest();
			_xhr.open("GET", this.props.url);
			_xhr.onload = function(){
				if(_xhr.readyState === 4){
					if(_xhr.status === 200){
						resolve(_xhr.response);
					}
					else{
						var error = new Error("something went wrong");
						reject(error);
					}
				}
			};
			_xhr.onerror = function(error){
				console.log(error);
			}
			_xhr.send()		

		}.bind(this))
		promise.then(function(data) {
			console.log('data:'+data)

		},function(error) {
			console.log('error:'+error)
		})

	},
	render: function() {
		return (
			<div className="url">{this.state.liked.toString()}<div><input type="text" name="title" defaultValue="default" /></div></div>
			
		)
	}
})


React.render(
  <CommentUrl url="/api/promise" />,
  document.getElementById('res-server')
);

var ChildComment = React.createClass({
	
	render: function () {
		return (<div>child</div>)
	}
})

var ParentComment = React.createClass({
	clickFunKey: function (key) {
		console.log(key)
	},
	render: function () {
		return (
		<div>
			<div onClick = {this.clickFunKey.bind(this, this.props.key)}>1111</div>
			parent
			<ChildComment autor='string' />
		</div>
		)
	}
})

React.render(
	<ParentComment key="1" ikey="1"/>,
	document.getElementById('react-parent')
)


//parnets and Child

var SetIntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.map(clearInterval);
	}

};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

React.render(
  <TickTock />,
  document.getElementById('react-mixins')
);

var PropsEle = React.createClass({
	propTypes: function () {
		aa: 'aaaaaa'
	},
	render: function () {
		return (<div>{this.props.aa}</div>)
	}
	
})

React.render(<PropsEle aa="900" />, document.getElementById('prop-types'))
var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
		console.log('oops')
      return;
    }
  	var formData = new FormData(React.findDOMNode(this.refs.form));
	this.props.onCommentSubmit(formData);
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} ref = 'form'>
        <input type="text" placeholder="Your name" defaultValue="11"ref="author"  name="autor"/>
        <input type="text" placeholder="Say something..." defaultValue="ii" ref="text" name="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var CommentFormBox = React.createClass({
  loadCommentsFromServer: function() {

  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    var _xhr = new XMLHttpRequest();
	_xhr.open("POST", this.props.url);
	_xhr.onload = function(){
		if(_xhr.readyState === 4){
			if(_xhr.status === 200){
				console.log(_xhr.response);
			}
			else{
				var error = new Error("something went wrong");
				console.log(error);
			}
		}
	};
	_xhr.onerror = function(error){
		console.log(error);
	}
	_xhr.send(comments);
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});



React.render(<CommentFormBox pollInterval='5000' url='api/promise'  />, document.getElementById('react-form'))


//key exple

var KeyItem = React.createClass({
	render: function () {
		return (<li className="item">{this.props.data.info}</li>)
	}
	
})
var KeyList = React.createClass({
	getInitialState: function () {
		return {content:[{id:1,info:'aa'},{id:2,info:'bb'}]}
	},
	render: function () {		
		return (<ul>{this.state.content.map(function (item) {return <KeyItem data={item} key={item.id} />})}</ul>)
	}
})

React.render(<KeyList  />, document.getElementById('keyList'));


var Grandparent = React.createClass({

    childContextTypes: {
         foo: React.PropTypes.string.isRequired
    },

    getChildContext: function() {
         return { foo: "I m the grandparent" };
    },

    render: function() {
         return <Parent />;
    }
});


var Parent = React.createClass({

    childContextTypes: {
         bar: React.PropTypes.string.isRequired
    },

    getChildContext: function() {
         return { bar: "I am the parent" };
    },

    render: function() {
         return <Child />;
    }
});

var Child = React.createClass({

    contextTypes: {
        foo: React.PropTypes.string.isRequired,
        bar: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
          <div>
            <div>My name is: {this.context.foo}</div>
            <div>My name is: {this.context.bar}</div>
          </div>
        )
    }
});

// Finally you render the grandparent
React.render(<Grandparent />, document.getElementById('contextTypes'));

var NestComponent = React.createClass({
	render: function () {
		return (
			<div>
				<p>111</p>
				{this.props.children}
			</div>
		)
	}
})

var NestChildren = React.createClass({
	render: function () {
		return (
			<div>test nestChildren</div>
		)
	}
})

React.render(<NestComponent><NestChildren /></NestComponent>, document.getElementById('nestComponent'));


//React with context


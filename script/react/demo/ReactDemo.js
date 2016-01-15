/******
React 直接渲染html 标签
*****/
React.render(
	<a href="http://www.baidu.com" aria-hidden={true}>hello,ReactJs</a>,
	document.getElementById('hello-react')
)

/******
React 创建图片标签
********/
var Mockbar = 'bar';
var Mockfoo = 'foo'; 
var mockProp = {Mockbar,Mockfoo};
var Comment = React.createClass({
	componentDidMount: function () {
	},
	render: function() {
        React.renderToStaticMarkup(React.DOM.img());
        return React.DOM.img({ alt: 'ref2' , src: 'tmp/t1.jpg'}, null);
    }
})
React.render(<Comment {...mockProp}/>,document.getElementById('commentBox'))

/**************
原生创建组件
**************/

var Comment2 = React.createClass({
	displayName:'CommentBox',
	render: function() {
		return (
			React.createElement('div',null,"hello,i'm another comment created")
		)
	}
})
React.render(
	React.createElement(Comment2,null),
	document.getElementById('comment2')
)

/********
**dangerouslySetInnerHTML 
**渲染html
**
********/
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
		var ccc = mockData.map(function (value, index) {
			return <CommentList index={value} key={index} />
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

/****
***
React 对特某些殊符号的编译处理
***
****/
var CommentProp = React.createClass({
	selfAttr: 'My own Attr',
	clickHandle: function() {
		alert('oops')
	},
	render: function() {
		return (
		  <div className="comment" >
		    <h2>{this.props.author}</h2>
		    <div onClick={this.clickHandle}>{this.selfAttr}</div>
		    <div>{'First \u00b7 Second'}</div>
			<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
			<div>{'First ', <span>&middot;</span>, ' Second'}</div>
			
		  </div>
		);
	}
});

React.render(
	<CommentProp  author='Macsen2'/>,
	document.getElementById('use-props')
)


/***
*
*组件的'componentWillReceiveProps'方法
*以及生命周期
*
********/
var CommentPropItem = React.createClass({
	componentWillReceiveProps: function () {
		console.log('CommentPropItem componentWillReceiveProps CommentPropList')
	},
	render: function() {
		return (
		  <div className="CommentPropItem">
		  	<p>aaaaaaaa</p>
		    <h2>{this.props.author}</h2>
			<h2>{this.props.test}</h2>
			<h3>条件判断组件属性的值{this.props.test_id}</h3>
		  </div>
		);
	}
});
var CommentPropList = React.createClass({
	getDefaultProps: function () {
		console.log('CommentPropList getDefaultProps CommentPropList')
		return {
			test: 'test props'
		}
	},
	getInitialState: function () {
		console.log('CommentPropList getInitalState CommentPropList')
		return {
			author: this.props.test
		}
	},
	shouldComponentUpdate: function (nextProps, nextState) {

		console.log('CommentPropList shouldComponentUpdate CommentPropList');
		return true;
	},
	componentWillReceiveProps: function () {
		console.log('CommentPropList componentWillReceiveProps CommentPropList')
	},
	componentWillMount: function () {
		console.log('CommentPropList componentWillMount CommentPropList')	
	},
	componentWillUpdate: function () {
		console.log('CommentPropList componentWillUpdate CommentPropList')
	},
	componentDidMount: function () {
		console.log('CommentPropList mouted ' + this.isMounted());
		console.log('CommentPropList componentDidMount CommentPropList');
		setTimeout(function () {
			this.setState({
				author: 'macsen2'
			})
		
		}.bind(this), 3000)
	},
  	render: function() {
	    return (
	    	<CommentPropItem test_id ={'2'<'1' ? '222' : null} author={this.state.author} test={this.props.test}  />
	    );
  }
});
React.render(
	<CommentPropList />,
	document.getElementById('use-props-list')
)


/**
**
**** 与后端通信, XMLHttpRequest
***************/
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
			<div className="url">
				{this.state.liked.toString()}
				<div><input type="text" name="title" defaultValue="default" /></div>
			</div>		
		)
	}
})

React.render(
  <CommentUrl url="/api/promise" />,
  document.getElementById('res-server')
);



/******
**bind events and Practice 'key'
**
********/
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
			<div>1111</div>
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


/**
**组件中的mix方法,
**后续版本中将会被废除
****/
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



/**
**React propTypes , jsx parsing number
**
*************/
var PropsEle = React.createClass({
	propTypes: {
		aa: React.PropTypes.number.isRequired
	},
	render: function () {
		return (<div>{this.props.aa}</div>)
	}
	
})
React.render(<PropsEle aa = {2} />, document.getElementById('prop-types'))



/**
**React work with form 
**
************/
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
        <input type="text" placeholder="Your name" defaultValue="11" ref="author"  name="autor"/>
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



/***
**React context prictise
**
*****/
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

/**
**React 嵌套组件
**
************/
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




/**
**稍微复杂的react嵌套
**
*********/
var RadioOption = React.createClass({
  render: function () {
    return (
      <label>
        <input type="radio" value={this.props.value} name={this.props.name} />
        {this.props.label}
      </label>
    )
  }
})

var RadioGroup = React.createClass({
  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      if (child.type === RadioOption)
        return React.addons.cloneWithProps(child, {
          name: this.props.name
        })
      else
        return child
    }.bind(this))
  },
  render: function () {
    return (
      <div className="radio-group">
        {this.renderChildren()}
      </div>
    )
  }
})

var WhereImUsingRadioGroups = React.createClass({
  render: function () {
    return (
      <RadioGroup name="blizzard-games">
        <RadioOption label="Warcraft 2" value="wc2" />
        <RadioOption label="Warcraft 3" value="wc3" />
        <RadioOption label="Starcraft 1" value="sc1" />
        <RadioOption label="Starcraft 2" value="sc2" />
      </RadioGroup>
    )
  }
})

React.render(<WhereImUsingRadioGroups />, document.getElementById('WhereImUsingRadioGroups'));

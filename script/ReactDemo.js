//console.log(typeof React);
React.render(
	<a href="http://www.baidu.com">hello,ReactJs</a>,
	document.getElementById('hello-react')
)
//create a comment
var mockProp = {bar: 'bar'};
var Comment = React.createClass({
	componentDidMount: function () {
		alert(this.props.bar)
	},
	render: function() {
		return (
			<div className="box">Creat a Comment to Html</div>		
		)
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
		return (
	      <div className="commentList">
	        Hello, world! I am a CommentList.
	      </div>
		)
	}
}) 

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentMix = React.createClass({
	render: function() {
		return (
			<div className="CommentMix">
				<CommentList />
				<CommentForm />
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
		  <div className="comment">
		    <h2>
		      {this.props.author}
		    </h2>
		    <div onClick={this.clickHandle}>{this.selfAttr}</div>
		    <div>{'First \u00b7 Second'}</div>
			<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
			<div>{['First ', <span>&middot;</span>, ' Second']}</div>
		   {this.props.children}
		  </div>
		);
	}
});
React.render(
	<CommentProp  author='Macsen2' children="ccc"/>,
	document.getElementById('use-props')
)

var CommentPropItem = React.createClass({
  render: function() {
    return (
      <div className="CommentPropItem">
        <h2>
          {this.props.author}
        </h2>
       {this.props.children}
      </div>
    );
  }
});

var CommentPropList = React.createClass({
  render: function() {
    return (
    	<CommentPropItem author="PropItem">this is text as child</CommentPropItem>
    );
  }
});


React.render(
	<CommentPropList  author='Macsen2'/>,
	document.getElementById('use-props-list')
)

var CommentUrl = React.createClass({
	test: function() {console.log('test')},
	getInitialState: function () {
		return {
			liked: false
		}
	}, 
	componentDidMount: function() {
		var that = this;
		this.test();
		setTimeout(function () {
			that.setState({liked: !that.state.liked});
		}, 2000)
		console.log('oops')
		var promise = new Promise( function(resolve, reject ){

			var _xhr = new XMLHttpRequest();
			_xhr.open("GET", this.props.url);
			_xhr.onload = function(){
				if(_xhr.readyState === 4){
					if(_xhr.status === 200){
						console.log(that.props.url + ' ' + that.state.liked)
					 
						//all is well. Our action is successfully completed.
						// We should resolve our Promise.
						resolve(_xhr.response);
					 
					}
					else{
					 
						//not so good. Something went wrong somewhere.
						// We will reject the Promise made.
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
			<div className="url">{this.state.liked.toString()}<div><input type="text" name="title" defaultValue="Untitled" /></div></div>
			
		)
	}
})

React.render(
  <CommentUrl url="api/promise" />,
  document.getElementById('res-server')
);

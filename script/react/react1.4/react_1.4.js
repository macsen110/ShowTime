var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('hello-react'));

var Zoo = React.createClass({
  render: function() {
    return (
      <div>
        <span onClick={this.showName}>Giraffe's name:</span> <input ref="giraffe" />
      </div>
    );
  },
  showName: function() {
    // Previously:
    // var input = this.refs.giraffe.getDOMNode();
    var input = this.refs.giraffe;

    alert(input.value);
  }
});

ReactDOM.render(<Zoo />, document.getElementById('refs'));

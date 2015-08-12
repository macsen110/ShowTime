import React from 'react';
class C1 extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            test: 0
        };
    }
    componentDidMount() {
       setTimeout(() => this.setState({test: 1}), 2000) 
    }
    render() {
        return (
            <div className = {this.props.cur === 0 ? 'cur' : ''} >
                <p>hi,404</p>
                {this.state.test === 1 ? <p><a href="#aaa">aaa</a></p> : <p>123</p>}
                
            </div>
                        
            )
    }
}
class C2 extends React.Component {

    componentDidMount() {
        setTimeout(() => console.log('oops'), 2000)
    }
    render() {
        return (
            <div className={this.props.cur === 1 ? 'cur' : ''}>
                <p>hi,404</p>
                <p><a href="#bbb">bbb</a></p>

            </div>
            )
    }
}
class All extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            curLink: 0
        };
    }
    componentDidMount() {
        React.Children.forEach(function (item) {console.log(item)})
        var self = this;
        window.addEventListener("hashchange", function() {
            var currentState = history.state;
            console.log(0);
            self.setState({curLink: 1})

        });
        
    }
    render() {
        return (
            <div>
                {this.state.curLink === 0 ? <C1 cur = {this.state.curLink} /> : ''}              
                {this.state.curLink === 1 ? <C2 cur = {this.state.curLink} /> : ''}
                <p><a href="http://www.baidu.com">baidu</a></p>
            </div>
        )
    }
}



React.render(<All aa='aa' />, document.getElementById('wrap-reseach-container'))

console.log('react children: ' + React.Children);
console.log(React.Children.count(<All />));

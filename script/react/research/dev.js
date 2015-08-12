import React from 'react';
class C1 extends React.Component {
    render() {
        return (<div className = {this.props.cur ? 'cur' : ''} >hi,404</div>)
    }
}
class C2 extends React.Component {
    render() {
        return (<div>hi,404</div>)
    }
}
class All extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            goods: []
        };
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <C1 cur = '0' />
                <C2 />
            </div>
        )
    }
}
React.render(<All />, document.getElementById('wrap-reseach-container'))
import React from 'react';
import xhr from './xhr';
function CommJump() {
    
}

function back() {
    history.back()
}

function nextPage(hash) {
    window.location.hash = hash;
}


//开始答题,说明
class C_start extends React.Component {
    render() {
        return (
            <div className = "comm-box-start" >
                <p className="desc">{this.props.desc}</p>
                <p className="flex"><button onClick= {nextPage.bind(null,'/api/research/info')} className="btn">开始答题</button></p>              
            </div>
                        
            )
    }
}

//用户信息,
class C_info extends React.Component {
    handleSubmit() {
        nextPage('/api/research/question1')
    }
    render() {
        var props = this.props;
        return (
            <div className="comm-box-information">
                <p className="title t-c">请先填写您的资料</p>
                <C_info_container dataArr={props.dataArr} />
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                </div>
            </div>
        )
    }
}


//用户信息输入判断
class C_info_container extends React.Component {
    render() {
        return (
            <ul className="list">        
                {this.props.dataArr.map((item, index) => {
                    switch (item.type) {
                        case 'ipt':
                            return <C_info_ipt {...item} key={index} /> 
                    }
                })}
                
            </ul>
        )
    }
}

//用户需要输入信息的类型

//输入型
class C_info_ipt extends React.Component {
    render() {
        var props = this.props;
        return (
            <li className="item">
                <p>请填写您的{props.name}：</p>
                <input className="ipt" name={props.key} />
                {props.keys == 'phone' ? <p className="tip">*建议填写正确的手机号</p> : ''}
            </li>
        )
    } 
}
//选择型---单选
class C_info_radio extends React.Component {
    
}


//问题类型,单选题
class C_question_radio extends React.Component {
    render() {
            return (
                <div className="comm-box-radio">
                    <p className="title">{this.props.title}</p>
                    <p>*注：本题最多能选1个答案</p>
                    <ul>
                        {this.props.data.map((val, index) => <li className="item" key={index}><input type="radio" name="checkColor" value={val} />{val}</li>)}
                    </ul>
                    <div className ="flex">
                        <button className="btn sub" onClick={back}>上一题</button>
                        <button className="btn" onClick={this.handleSubmit}>下一题</button>
                    </div>
                </div>
            )
        

    }
    handleSubmit() {
        nextPage('/api/research/question2')
    }
}

//问题类型-复选题
class C_question_checkbox extends React.Component {
    handleSubmit() {
        nextPage('/api/research/suggest')
    }
    render() {
        return (
            <div className="comm-box-check">
                <p className="title">{this.props.title}</p>
                <p>*注：本题能选多个答案</p>
                    <ul>
                        {this.props.data.map((val, index) => <li className="item" key={index}><input type="checkbox" name={this.props.name} value={val} />{val}</li>)}
                    </ul>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>上一题</button>
                    <button className="btn" onClick={this.handleSubmit}>下一题</button>
                </div>
            </div>
        )
    }
}

//问题类型,填写内容
class C_question_ipt extends React.Component {
    handleSubmit() {
        nextPage('/api/research/question_checkbox')
    }
    render() {
        return (
            <div className="comm-box-input">
                <p className="title">{this.props.title}</p>
                <p>请输入:</p>
                <div className="wrap-ipt">
                    <textarea></textarea>
                </div>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>上一题</button>
                    <button className="btn" onClick={this.handleSubmit}>下一题</button>
                </div>
            </div>
        )
    }
}

//用户建议,
class C_user_suggest extends React.Component {
    handleSubmit() {
        nextPage('/api/research/end')
    }
    render() {
        return (
            <div className="comm-box-suggest">
                <p className="t-c">感谢您的参与</p>
                <div className="wrap-ipt">
                    <textarea placeholder="有什么建议留给我们？"></textarea>
                </div>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>完成</button>
                </div>
            </div>
            )
    }
}

//结束语
class C_end extends React.Component {
    render() {
        return (
            <div className="comm-box-end">{this.props.desc}</div>
        )
    }
}

class Loading extends React.Component {
    render() {
        return (<div>Loading</div>)
    }
}

class All extends React.Component {
    constructor(props) {
        super(props)
        var curLink = location.hash ? location.hash.slice(1) : '/api/research/start';
        this.state =  {
            ready: false,
            curLink: curLink
        };
    }
    loadAnsyData(url) {
       this.setState({
           ready: false
       })
       var self = this;
        new xhr({
            url:url,
            done: function (obj) {
                if (obj.code == 0) {
                    self.setState({
                        ready: true,
                        componentName: obj.componentName,
                        dataObj: obj.dataObj
                    })

                }                              
            }
        })
        
    }
    componentDidMount() {
        var self =this;
        new xhr({
            url: self.state.curLink,
            done: function (obj) {
                if (obj.code == 0) {
                    self.setState({
                        componentName: obj.componentName,
                        ready: true,
                        dataObj: obj.dataObj
                    })
                }                              
            }
        })
        window.addEventListener('hashchange', function () {          
            var url = location.hash ? location.hash.slice(1) : '/api/research/start'
            this.loadAnsyData(url)
        }.bind(this))
    }
    render() {
        if (this.state.ready) {
            var componentName = this.state.componentName;
            var dataObj = this.state.dataObj;
            var component;
            switch(componentName) {
                case 'Start':
                    component = <C_start {...dataObj} />
                    break;
                case 'Information':
                    component = <C_info {...dataObj} />
                    break;
                case 'Question_radio':
                    component = <C_question_radio {...dataObj} />
                    break;
                case 'Question_checkbox':
                    component = <C_question_checkbox {...dataObj} />
                    break;
                case 'Question_input':
                    component = <C_question_ipt {...dataObj} />
                    break;
                case 'Suggest':
                    component = <C_user_suggest />
                    break;
                case 'End':
                    component = <C_end {...dataObj} />
                    break;
                default: 
                    break;
            }

            return (
                <div className="comm-box">               
                    {component}
                </div>
            )
        }
        return (<div><Loading /></div>)

    }
}




React.render(<All />, document.body)


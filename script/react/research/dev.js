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

class C0 extends React.Component {
    render() {
        return (
            <div className = "comm-box-0" >
                <p className="desc">
                    感谢您参与此次调查，本调查目的在于
                    了解产品对消费者购物选择的影响。您
                    对本问卷的所有回答都是以匿名形式进
                    行并且答案得到严格保密，研究结果将
                    是结论性质的报告，不会泄漏您的任何
                    相关信息。每位参与调研的朋友都将获
                    得我们送出的尊贵礼品，同时你还将参
                    加抽奖，有机会获得iphone6等大奖。
                </p>
                <p className="flex"><button onClick= {nextPage.bind(null,'page1')} className="btn">开始答题</button></p>              
            </div>
                        
            )
    }
}
class C1 extends React.Component {
    handleSubmit() {
        nextPage('page2')
    }
    render() {
        return (
            <div className="comm-box-1">
                <p className="title t-c">请先填写您的资料</p>
                <p>请输入您的姓名：</p>
                <input type="text" className="ipt" />
                <p>请输入您的手机号码:</p>
                <input type="text" className="ipt" />
                <p className="tip">*建议填写正确的手机号</p>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                </div>
            </div>
            )
    }
}


class C2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            colors: []
        }
        
    }

    componentWillMount() {
        var self = this;
        new xhr({
            url:'data/colorChoice.js',
            done: function(obj) {
                if (obj.code == 0) {
                    self.setState({
                       title: obj.title,
                       colors: obj.data
                    }) 
                }

            }
        })
    }
    render() {
        var state = this.state;
        if (state.colors.length) {
            return (
                <div className="comm-box-2">
                    <p className="title">{state.title}</p>
                    <p>*注：本题最多能选1个答案</p>
                    <ul>
                        {state.colors.map((val, index) => <li key={index}><input type="radio" name="checkColor" value={val} />{val}</li>)}
                    </ul>
                    <div className = "flex">
                        <button className="btn sub" onClick={back}>返回</button>
                        <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                    </div>
                </div>
            )
        }
        return (<div></div>)

    }
    handleSubmit() {
        nextPage('page3')
    }
}


class C3 extends React.Component {
    handleSubmit() {
        nextPage('page4')
    }
    render() {
        return (
            <div className="comm-box-3">
                <p className="title">()是你最喜欢的足球运动员</p>
                <p>*注：本题最多能选1个答案</p>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                </div>
            </div>
            )
    }
}


class C4 extends React.Component {
    handleSubmit() {
        nextPage('page5')
    }
    render() {
        return (
            <div className="comm-box-4">
                <p className="title">()是你最喜欢的足球运动员</p>
                <p>*注：本题最多能选1个答案</p>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                </div>
            </div>
            )
    }
}


class C5 extends React.Component {
    handleSubmit() {
        nextPage('page6')
    }
    render() {
        return (
            <div className="comm-box-5">
                <p>你喜欢什么颜色？</p>
                <p>*注：本题最多能选1个答案</p>
                <div className = "flex">
                    <button className="btn sub" onClick={back}>返回</button>
                    <button className="btn" onClick={this.handleSubmit}>马上开始</button>
                </div>
            </div>
            )
    }
}


class C6 extends React.Component {
    render() {
        return (
            <div className="comm-box-5">
                <p>尊敬的客户：</p>
                <p>
                    感谢您的耐心参与，您的选择，将对我们起到重要的指导作用，我们在此向您表示诚挚的谢意。
                    同时，为了回馈您的贡献，我们将从所有参与调研的客户中随机抽取几位幸运奖得主。您将有机会
                    获得我们为您精心准备的礼品一份，中奖名单将在近期公布，敬请关注。祝您生活愉快。
                </p>
               
            </div>
            )
    }
}

class All extends React.Component {
    constructor(props) {
        super(props)
        var curLinkIndex = location.hash ? Number(location.hash[location.hash.length - 1]) : 0
        this.state =  {
            curLink: curLinkIndex
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', function () {
            this.setState({curLink: Number(location.hash[location.hash.length - 1])})
        }.bind(this))
    }
    render() {
        var curIndex = this.state.curLink;
        var component;
        switch(curIndex) {
            case 1:
                component = <C1 />
                break;
            case 2:
                component = <C2 />
                break;
            case 3:
                component = <C3 />
                break;
            case 4:
                component = <C4 />
                break;
            case 5:
                component = <C5 />
                break;
            case 6:
                component = <C6 />
                break;
            case 0 :
            default: 
                component = <C0 />
                break;
        }
        return (
            <div className="comm-box">
                {component}
            </div>
        )
    }
}



React.render(<All />, document.body)


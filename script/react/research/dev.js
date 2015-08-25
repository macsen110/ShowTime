import React from 'react';
import xhr from './xhr';
const startUrl = '/api/research/start';
var initRequestNum = 0;
var initRequestNum2 = 0;



function loading() {
    var loadingDom = document.getElementById('loading_container');
    loadingDom ? loadingDom.classList.remove('hidden') : '';
}
function hideLoading() {
    var loadingDom = document.getElementById('loading_container');
    loadingDom ? loadingDom.classList.add('hidden') : '';
}
function prevPage(prevLink) {
    location.hash ? history.back() : location.hash = prevLink;   
}
function nextPage(nextLink) {
    window.location.hash = nextLink;    
}

function isLocationSame(link) {
    var curLink = location.href;
    return link === curLink;
}
function getJson(arr) {
    var obj = {};
    arr.forEach(function (item) {
        obj[item.dataset.key] = item.value.trim();
        
    })
    return JSON.stringify(obj);
    
}

//提交答案或者个人信息
function postAnswer(postUrl, postData, nextLink, link = location.href) {
    return new Promise(function(resolve, reject) {
        new xhr({
            url: postUrl,
            method: 'POST',
            setHeader: 'application/json',
            sendData: postData,
            done: function (obj) {
                if (isLocationSame(link)) {
                    if (obj.code == 0) {
                        resolve(nextLink)
                    }
                    else {
                        alert(obj.msg);
                        loadingDom.classList.contains('hidden') ? loadingDom.classList.remove('hidden') : '';
                        
                    }
                }
            }
        }) 
    })
}

//loading 组件

class Loading extends React.Component {
    render() {
        return (<div className="loading"></div>)
    }
}

//开始答题,说明
class C_start extends React.Component {
    render() {
        var props = this.props;
        return (
            <div className = "comm-box-start" >
                <p className="desc">{this.props.desc}</p>
                <p className="flex"><button onClick= {props.loadAnsyData.bind(null, props.btns[0].link, 1)} className="btn">开始答题</button></p>              
            </div>
                        
        )
    }
}

//用户信息,
class C_info extends React.Component {
    render() {
        var props = this.props;
        return (
            <div className="comm-box-information" ref = "container">
                <p className="title t-c">请先填写您的资料</p>
                <C_info_container data={props.data} />
                <div className = "flex">
                    <button className="btn sub" onClick= {props.loadAnsyData.bind(null, props.btns[0].link, -1)}>{props.btns[0].text}</button>
                    <button className="btn" onClick= {this.handleSubmit.bind(this, props.postUrl, props.btns[1].link)}>{props.btns[1].text}</button>
                </div>
            </div>
        )
    }
    componentDidUpdate() {
        document.body.style.backgroundSize = 'cover';
        
    }
    handleSubmit(postUrl, nextLink) {
        var props = this.props;
        var container = React.findDOMNode(this.refs.container);
        var ipts = container.querySelectorAll('.ipt');
        var flag = true;
        [].every.call(ipts, function (item) {
            if (item.value === '') {
                alert(item.name + '不能为空');
                item.focus();               
                flag = false;
                return false
            }
            if (item.dataset.key === 'phone') {
                var testPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                if (!item.value.match(testPhoneReg)) {
                    alert(item.name + '格式不正确');
                    item.focus();               
                    flag = false;
                    return false
                }
            }
            flag = true
            return true
        })

        if (flag) {
            postAnswer(postUrl, getJson([].slice.call(ipts)), nextLink).then(
                (value) => props.loadAnsyData(value, 1)
            );
        }
    }
}


//用户信息输入判断
class C_info_container extends React.Component {
    render() {
        return (
            <ul className="list">        
                {this.props.data.map((item, index) => {
                    switch (item.type) {
                        case 'text':
                            return <C_info_ipt {...item} key={index} /> 
                    }
                })}
                
            </ul>
        )
    }
}



//填写用户信息---输入型
class C_info_ipt extends React.Component {
    render() {
        var props = this.props;
        return (
            <li className="item">
                <p>请填写您的{props.name}：</p>
                <input  className="ipt" type = {props.keys == 'phone' ? 'tel' : 'text'} data-key = {props.keys} name={props.name} />
                {props.keys == 'phone' ? <p className="tip">*建议填写正确的手机号</p> : ''}
            </li>
        )
    } 
}
//填写用户信息---选择型---单选
class C_info_radio extends React.Component {
    
}


//问题类型,单选题
class C_question_radio extends React.Component {
    render() {
        var props = this.props;

        return (
            <div className="comm-box-radio" ref="container">
                <p className="title">{props.title}</p>
                <p>*注：本题最多能选1个答案</p>
                <ul>
                    {props.data.map((item, index) => <li className="item" key={index}><input name="select-radio" type="radio" defaultChecked = {item.checked ? true : false} value={item.value} />{item.value}</li>)}
                </ul>
                <div className ="flex">
                    <button className="btn sub" onClick={props.loadAnsyData.bind(null, props.btns[0].link, -1)}>{props.btns[0].text}</button>
                    <button className="btn" onClick={this.handleSubmit.bind(this, props.postUrl, props.btns[1].link)}>{props.btns[1].text}</button>
                </div>
            </div>
        )
        

    }
    handleSubmit(postUrl, nextLink) {
        var props = this.props;
        var container = React.findDOMNode(this.refs.container);
        var checkEle = container.querySelector('[type="radio"]:checked');
        if (!checkEle) {
            alert('请至少勾选一个选型!')
            return false;
        }
        var postData = JSON.stringify({q_id: props.q_id,value: checkEle.value})
        postAnswer(postUrl, postData, nextLink).then((value) => props.loadAnsyData(value, 1))

        
    }
}

//问题类型-复选题
class C_question_checkbox extends React.Component {
    handleSubmit(postUrl, nextLink) {
        var props = this.props;
        var container = React.findDOMNode(this.refs.container);
        var checkEles = container.querySelectorAll('[type="checkbox"]:checked');
        var checkboxData = []
        if (!checkEles.length) {
            alert('请至少勾选一个选型!')
            return false;
        }
        [].forEach.call(checkEles, function(item) {
            checkboxData.push(item.value)
        })
        var postData = JSON.stringify({q_id: props.q_id,value: checkboxData})
        postAnswer(postUrl, postData, nextLink).then((value) => props.loadAnsyData(value, 1))

    }
    render() {
        var props = this.props;
        return (
            <div className="comm-box-check" ref="container">
                <p className="title">{this.props.title}</p>
                <p>*注：本题能选多个答案</p>
                    <ul>
                        {props.data.map((item, index) => <li className="item" key={index}><input name="select-checkbox" type="checkbox" defaultChecked = {item.checked ? true : false} value={item.value} />{item.value}</li>)}
                    </ul>
                <div className = "flex">
                    <button className="btn sub" onClick={props.loadAnsyData.bind(null, props.btns[0].link, -1)}>{props.btns[0].text}</button>
                    <button className="btn" onClick={this.handleSubmit.bind(this, props.postUrl, props.btns[1].link)}>{props.btns[1].text}</button>
                </div>
            </div>
        )
    }
}

//问题类型,填写内容
class C_question_ipt extends React.Component {
    handleSubmit(postUrl, nextLink) {
        console.log(postUrl);
        var props = this.props;
        var container = React.findDOMNode(this.refs.container);
        var iptEle = container.querySelector('textarea');
        if (iptEle.value === '') {
            alert('填写内容不能为空!');
            iptEle.focus();
            return false;
        }
        var postData = JSON.stringify({
            q_id: props.q_id,
            value: iptEle.value
        })
        postAnswer(postUrl, postData, nextLink).then((value) => props.loadAnsyData(value, 1))
    }
    render() {
        var props = this.props;
        return (
            <div className="comm-box-input" ref = "container">
                <p className="title">{props.title}</p>
                <p>请输入:</p>
                <div className="wrap-ipt">
                    <textarea defaultValue = {props.defaultValue ? props.defaultValue : ''} />
                </div>
                <div className = "flex">
                    <button className="btn sub" onClick={props.loadAnsyData.bind(null, props.btns[0].link, -1)}>{props.btns[0].text}</button>
                    <button className="btn" onClick={this.handleSubmit.bind(this, props.postUrl, props.btns[1].link)}>{props.btns[1].text}</button>
                </div>
            </div>
        )
    }
}

//用户建议,
class C_user_suggest extends React.Component {
    handleSubmit(postUrl, nextLink) {
        var props = this.props;
        var container = React.findDOMNode(this.refs.container);
        var iptEle = container.querySelector('textarea');
        var postData = JSON.stringify({
            content: iptEle.value
        })
        postAnswer(postUrl, postData, nextLink).then((value) => props.loadAnsyData(value, 1))
    }
    render() {
        var props = this.props;
        return (
            <div className="comm-box-suggest" ref = "container">
                <p className="t-c">感谢您的参与</p>
                <div className="wrap-ipt">
                    <textarea placeholder="有什么建议留给我们？" />
                </div>
                <div className = "flex">
                    <button className="btn sub" onClick={props.loadAnsyData.bind(null, props.btns[0].link, -1)}>{props.btns[0].text}</button>
                    <button className="btn" onClick={this.handleSubmit.bind(this, props.postUrl, props.btns[1].link)}>{props.btns[1].text}</button>
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



class All extends React.Component {
    constructor(props) {
        super(props);
        this.loadAnsyData = this.loadAnsyData.bind(this);
        this.state = {
            isMounted: true,
            componentName: null
        };
    }
    loadAnsyData(url, flag) { //参数flag代表用户点击链接跳转,1代表下一步,-1代表上一步
        var curlocation = location.href;
        var self = this;
        loading();
        new xhr({
            url:url,
            done: function (obj) {
                //链接跟当前链接一样时,防止用户连续点击回退
                if (isLocationSame(curlocation)) {
                    if (obj.code == 0) {
                            hideLoading();

                            if (self.state.isMounted) {
                                if (obj.dataObj.body_bg) {
                                    document.documentElement.style.backgroundImage = 'url('+ obj.dataObj.body_bg +')';                            
                                }
                                self.setState({
                                    componentName: obj.dataObj.catagory,
                                    dataObj: obj.dataObj
                                })
    
                                if (flag) {
                                    ++initRequestNum;
                                    flag === 1 ? nextPage(url) : prevPage(url)                                                     
                                }
                            }

                    }
                    else {
                        alert(obj.msg);
                        hideLoading();
                    }                              
                }
    
            }
        })
        
    }
    componentDidMount() {

        var curLink = location.hash ? location.hash.slice(1) : startUrl;
        this.loadAnsyData(curLink);
        window.addEventListener('hashchange', function () {                  
            var url = location.hash ? location.hash.slice(1) : startUrl
            if (initRequestNum2 === initRequestNum) this.loadAnsyData(url);
            else initRequestNum2 = initRequestNum;
        }.bind(this))
    }
    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
    }
    render() {
        if (this.state.componentName) {
            var componentName = this.state.componentName;
            var dataObj = this.state.dataObj;
            var component;
            switch(componentName) {
                case 'Start':
                    component = <C_start {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'Information':
                    component = <C_info {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'Question_radio':
                    component = <C_question_radio {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'Question_checkbox':
                    component = <C_question_checkbox {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'Question_input':
                    component = <C_question_ipt {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'Suggest':
                    component = <C_user_suggest {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                case 'End':
                    component = <C_end {...dataObj} loadAnsyData = {this.loadAnsyData} />
                    break;
                default: 
                    component = <div />
                    break;
            }
            return (
                <div className="comm-box">               
                    {component}
                </div>
            )
        }
        return (<div />)
    }
}




React.render(<All />, document.getElementById('wrap-app'))


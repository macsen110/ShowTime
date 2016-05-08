/**
 * Created by wudi on 15/11/30.
 */
define(['security','zepto','../lib/ui','../../host'], function(RSAUtils, $, ui, host){  
    //获取openid
    function getOpenId() {
        var openId = localStorage.getItem('openId');
        var openIdValue;
        if ($('#get_weixin_openId')) {
            openIdValue = $('#get_weixin_openId').val();
        }
        if (openIdValue) {
            openId = openId == openIdValue ? openId : openIdValue; 
            localStorage.setItem('openId', openId);
        }
        return openId;
    }
    //格式化日期
    function formatDate() {
    	var date = new Date();
    	var format = "yyyy-MM-dd HH:mm:ss";
        switch(typeof date) {   
            case "string":   
                date = new Date(date.replace(/-/, "/"));   
                break;   
            case "number":   
                date = new Date(date);   
                break;   
        }    
        if (!date instanceof Date) return;   
        var dict = {   
            "yyyy": date.getFullYear(),   
            "M": date.getMonth() + 1,   
            "d": date.getDate(),   
            "H": date.getHours(),   
            "m": date.getMinutes(),   
            "s": date.getSeconds(),   
            "MM": ("" + (date.getMonth() + 101)).substr(1),   
            "dd": ("" + (date.getDate() + 100)).substr(1),   
            "HH": ("" + (date.getHours() + 100)).substr(1),   
            "mm": ("" + (date.getMinutes() + 100)).substr(1),   
            "ss": ("" + (date.getSeconds() + 100)).substr(1)   
        };       
        return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {   
            return dict[arguments[0]];   
        });                  
    }
    //加密字符串
    function encryptedString(publicKey) {
        var key = RSAUtils.getKeyPair(publicKey.publicExponent, '',
                publicKey.modulus);
        var current = formatDate();
        var openId = APP.uid + ',' + current;
        var token = RSAUtils.encryptedString(key, openId);
        return token;
    }
    //验证如果不是从首页跳转过来的,直接跳转到首页入口
    //var pageName = $('body').data('page');
    var BASE = {
        cbPathObj: function () {
            var query = location.search;
            if ('pageName' in this.getLocationParam(query))  {
                var cbPathObj = this.getLocationParam(query);
                if (cbPathObj.pageName !== 'index') return cbPathObj
            }
            return undefined;
        },
        setPath: function (obj) {
            var path = location.pathname;
            //var query = location.search ? this.removeOldPath(location.search) + 'PATHNAME=' + pathName : '?PATHNAME='+pathName;
            //return path + query;
            delete obj.replace;
            return path + '?' + this.serializeObj(obj)
        },
        serializeObj: function (options) {
            var arr = [];
            for (var i in options) {
                arr.push(i+'='+options[i]);				
            }
            return arr.join('&');
        },
        getLocationParam: function (url) {
            var params = url.toString().slice(1).split("&");
            var returnObject = {};
            for(var i = 0; i != params.length; i++) {
                var index = params[i].indexOf("=");
                returnObject[params[i].slice(0, index)] = params[i].slice(index+1);
            }
            return returnObject;
        }
    }
        
    window.STORE = {
        pages: {
            index: function (stateObj) {
                require.ensure([], function() { 
                    var component = require('./index.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                });
            },
            profile: function (stateObj) {
                require.ensure([], function() { 
                    var component = require('./profile.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                     
                });    
            },
            antenatal: function (stateObj) {
                require.ensure([], function() { 
                    var component = require('./antenatal.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                });
            },
            waiting_doctor: function (stateObj) {
                require.ensure([], function() { 
                    var component = require('./waiting_doctor.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                });
            },
            report: function (stateObj) {
                require.ensure([], function () {
                    var component = require('./report.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                })
            },
            report_list: function (stateObj) {
                require.ensure([], function () {
                    var component = require('./report_list.js');
                    if (STORE.curPathName == stateObj.pageName) component.init(stateObj);
                })            
            }        
        },
        setRouter: function (stateObj, component) {
            if (!stateObj.urlAction) {
                if (stateObj.replace) history.replaceState(stateObj, '', BASE.setPath(stateObj));
                else history.pushState(stateObj, '', BASE.setPath(stateObj));
            }
            this.updatePageView(component)
        },
        updatePageView: function (component) {
            this.endLoading();
            if (this.curPathWidget) this.curPathWidget.destroy();
            this.curPathWidget = component;            
        },
        curPathWidget: undefined,
        curPathName: undefined,
        cbPathObj: BASE.cbPathObj(),
        gotoPage: function (stateObj) {
            this.curPathName = stateObj.pageName;
            this.startLoading();
            this.pages[stateObj.pageName](stateObj);            
        },
        startLoading: function () {
            var $loading = $('.widget-loading');
            $loading.show()
        },
        endLoading: function () {
            var $loading = $('.widget-loading');
            $loading.hide()
        },
        initJump: function () {
            var stateObj = {};
            if (this.cbPathObj) stateObj = this.cbPathObj;
            else stateObj.pageName = 'antenatal';
            stateObj.replace = 1;
            this.gotoPage(stateObj);
            this.cbPath = null;
        }
    }
    window.onpopstate = function (event) {
        var stateObj = event.state;
        stateObj.urlAction = 1;
        STORE.gotoPage(stateObj)
    }
    window.APP = {
        host: host,
        ui: ui,
        uid: getOpenId(),
        init: function () {
            this.bindLocation();
            this.isBandCard()
        },
        isBandCard: isBandCard,
        bindLocation: function () {
           // var search = location.search ? location.search : '?ds=ds';
            var self = this;
            var isMove = false;
            //解决ios 下delegate 不能点击bug
            var tapEvent = 'ontouchstart' in window ? 'touchend' : 'click';
            document.body.addEventListener('touchmove', function () {
                isMove = true;
            })
            document.body.addEventListener(tapEvent, function (e) {
                var bindLocationDom = self.getDomByEle(e.target, '.bind-location');
                if (bindLocationDom) {
                    if (bindLocationDom.dataset.href) {
                        if (!isMove) {
                            var stateObj = {};
                            if (bindLocationDom.dataset.options) {
                                stateObj = JSON.parse(bindLocationDom.dataset.options);
                            }
                            stateObj.pageName = bindLocationDom.dataset.href;
                            STORE.gotoPage(stateObj, {})
                        }
                        else isMove = false;
                    }
                }
            })
        },
        getDomByEle: function (curentEl, selector) {
            var sign = selector[0];
            function getId() {
                while (curentEl) {
                    if (curentEl.id === selector.slice(1)) return curentEl
                        curentEl = curentEl.parentNode;
                }
                return undefined
            }
            function getClass() {
                while (curentEl) {
                    if (curentEl.classList && curentEl.classList.contains(selector.slice(1))) return curentEl;
                    curentEl = curentEl.parentNode;
                }
                return undefined
            }
            function getEleName() {
                while (curentEl) {
                if (curentEl.tagName === selector.toUpperCase()) return curentEl;
                curentEl = curentEl.parentNode;
                }
                return undefined
            }
            switch (sign) {
                case '.':
                    return getClass()
                case '#':
                    return getId()
                default:        
                    return getEleName();
            }
        },
        tools: {
            encryptedString: encryptedString
        },
        profileInfo: {},
        saveProfileInfo: function (status, response) {
            if (status == 1) {
                APP.profileInfo.emStatus = status;
                STORE.initJump();
            }
            else {
                if (response.cardList.length > 1) {
                    selectCardNo(response.cardList, function (card) {
                        response.cardNo = card;
                        APP.profileInfo = response;
                        localStorage.setItem('profileInfo', JSON.stringify(response));
                        STORE.initJump();
                    })
                }
                else {
                    response.cardNo = response.cardList[0];
                    APP.profileInfo = response;
                    localStorage.setItem('profileInfo', JSON.stringify(response))
                    STORE.initJump();
                }                        
            }
        }
    }
    

    
    function isBandCard(curRouteCb) {
        if (localStorage.getItem('yfyPublic')) {
        	var token = encryptedString(JSON.parse(localStorage.getItem('yfyPublic')));
            var data = {
                uid : APP.uid,
                token : token
            }
            //如果localStroge中存在个人信息的缓存并且uid相同,
            //证明用户已绑卡,优先使用
            //如果此用户未绑卡,优先从sessionStorage中获取
            if (localStorage.getItem('profileInfo')) {
                var profileInfo = JSON.parse(localStorage.getItem('profileInfo'));
                if (profileInfo.uid === APP.uid) {
                    console.log(profileInfo.uid);
                    APP.profileInfo = profileInfo;
                    STORE.initJump();
                    return;
                }
            }
            
            $.ajax({
                url : APP.host.api + '/infanthospital/getCustomerInfo',
                data: JSON.stringify(data),
                cache: true,
                type : 'post',
                contentType : 'application/json',
                success : function(response) {
                    response = JSON.parse(response);
                    if (response.status == 0) {
                        var emStatus = response.emStatus;
                        if (emStatus == 0) {
                            STORE.gotoPage({pageName: 'index', replace: 1});
                            return;
                        }                        
                        //当状态为2时,
                        //获取用户信息,并缓存到localStrage,
                        if (emStatus == 2 || emStatus == 1) {
                            APP.saveProfileInfo(emStatus, response);    
                        }
                        
                    }
                }
            })
        }
        else {
            $.ajax({
                url : APP.host.api + '/getPublicKey',
                type : 'post',
                contentType : 'application/json',
                success : function(response) {
                    localStorage.setItem('yfyPublic', response);
                    isBandCard()
                }
            })
        }
    }
    function selectCardNo(list, cb) {
        var wrapDiv = document.createElement('div');
        wrapDiv.className = 'widget-dialog-selectCardNo';
        var ininerList = '';
        list.forEach(function (val, index) {
            ininerList+='<li class="item" data-val='+ val.cardNumber +'>'+
                '<input id="select-cardNo-'+index+'" name="select-cardNo" type="radio" value='+val.cardNumber+'>'+
                '<label for="select-cardNo-'+index+'"><em class="key">卡号'+(index+1)+':</em>'+val.cardNumber+'</label>'+
            '</li>'
        })
        
        wrapDiv.innerHTML = '<div class="mask"></div>'+
        '<div class="container">'+
            '<p class="title">请选择当前使用的就诊卡</p>'+
            '<ul class="list">'+ininerList+'</ul>'+
            '<p class="btn">确定</p><div>';
        document.body.appendChild(wrapDiv);
        var btn = wrapDiv.querySelector('.btn');
        btn.addEventListener('click', function () {
            var checkEle = wrapDiv.querySelector('[type="radio"]:checked');
            if (!checkEle) {
                alert('请至少勾选一个选型!')
                return false;
            }
            btn.removeEventListener('click', function () {});
            wrapDiv.parentNode.removeChild(wrapDiv);
            cb(checkEle.value);    
        })
    }
    APP.init();
    return {}
})
/**************
 react route


 * **********/

'use strict'
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", {className: "wrap-container"}, 
                React.createElement(RouteHandler, null)
            )
        )
    }
});






var App = React.createClass({displayName: "App",
    statics: {
        aa: function () {
            alert('boy')
        },
        willTransitionTo: function (transition, params) {
            console.log('ssss');

        },
        willTransitionFrom: function (transition, component) {
            console.log('eeeee')
        }
    },
    getInitialState: function () {
        return {
            s1: 's1',
            s2: 's2',
            data: []
        };
    },
    componentDidMount: function () {
        var self = this;
        var promise = new Promise( function(resolve, reject ){
            setTimeout(function () {
                var _xhr = new XMLHttpRequest();
                _xhr.open("GET", '/api/router');
                _xhr.onload = function(){
                    if(_xhr.readyState === 4){
                        if(_xhr.status === 200){
                            var data = JSON.parse(_xhr.response).data;
                            self.setState({data: data})
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


            }, 1000)

        })
        promise.then(function(obj) {

        },function(error) {
            console.log('error:'+error)
        })

    },
    render: function () {
        var html = '';
        var data = this.state.data;
        if (data.length > 0) {
            var dataArr = [];
            for(var i = 0; i < data.length;  i++) {
                dataArr.push(data[i])
            }
            html = dataArr.join();
            return (
                React.createElement("div", null, 
                    React.createElement("header", null, 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement(Link, {to: "app"}, "app")), 
                            React.createElement("li", null, React.createElement(Link, {to: "params", params: {messageId:"123"}}, "params"))
                        ), 
                        html
                    )
                )
            )

        }
        return (React.createElement("p", null, "aaa"))


    }
});

var Params = React.createClass({displayName: "Params",
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function () {
        return (
            React.createElement("div", null, this.context.router.getCurrentParams().messageId)
        );
    }
});

var NotFound = React.createClass({displayName: "NotFound",
    render: function () {
        return (React.createElement("div", null, "hi,404"))
    }
})

var routes = (
    React.createElement(Route, {handler: Index, path: "/rt"}, 
        React.createElement(DefaultRoute, {handler: App, name: "app"}), 
        React.createElement(Route, {name: "params", path: "params/:messageId", handler: Params}), 
        React.createElement(Redirect, {from: "/router/redirect", to: "params", params: {messageId:555}}), 
        React.createElement(NotFoundRoute, {handler: NotFound})
    )
);

Router.run(routes,Router.HistoryLocation, function (Handler, state) {
    // for (let i of state.routes) {
    //     if ('aa' in i.handler) {
    //         console.log(i.handler.aa())

    //     }

    // }
    React.render(React.createElement(Handler, null), document.body);
});
/**************
 react route


 * **********/

'use strict'
var Router = ReactRouter; // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var request = require('superagent');
//request.get('/aaa').end()
var Index = React.createClass({
    render: function () {
        return (
            <div className="wrap-container" >
                <RouteHandler/>
            </div>
        )
    }
});

// Create async action with `completed` & `failed` children
var makeRequest = Reflux.createAction({
    asyncResult: true

});

var statusStore = Reflux.createStore({
    init: function() {
        console.log(6666666666666666);
        this.listenTo(makeRequest, this.onMakeRequest('/api/store'));
    },
    onMakeRequest: function(url) {
        // Assume `request` is some HTTP library (e.g. superagent)
        request(url, function(response) {
            if (response.ok) {
                makeRequest.completed(response.body);
            } else {
                makeRequest.failed(response.error);
            }
        })
    }
});


var App = React.createClass({
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
    mixins: [Reflux.ListenerMixin],
    onStatusChange: function(status) {
        alert('onStatusChange')
        this.setState({
            currentStatus: status
        });
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
                <div>
                    <header>
                        <ul>
                            <li><Link to="app">app</Link></li>
                            <li><Link to="params" params ={{messageId:"123"}}>params</Link></li>
                        </ul>
                        {html}
                    </header>
                </div>
            )

        }
        return (<p>aaa</p>)


    }
});

var Params = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function () {
        return (
            <div>{this.context.router.getCurrentParams().messageId}</div>
        );
    }
});

var NotFound = React.createClass({
    render: function () {
        return (<div>hi,404</div>)
    }
})

var routes = (
    <Route handler={Index} path="/rt" >
        <DefaultRoute handler={App} name="app" />
        <Route name="params" path="params/:messageId"  handler={Params} />
        <Redirect from="/router/redirect" to="params" params={{messageId:555}} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes,Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler/>, document.body);
});
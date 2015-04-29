/**************
 react route


* **********/

var Router = ReactRouter; // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = React.createClass({
    render: function () {
        return (
            <div className="wrap-container">
                <RouteHandler/>
            </div>
        )
    }
});

var App = React.createClass({
    selfInitObj: {
        url: '/api/router'
    },
    statics: {
        willTransitionTo: function (transition, params) {
            console.log('ssss')
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
               _xhr.open("GET", self.selfInitObj.url);
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
           }, 2000)

        })
        promise.then(function(obj) {
        },function(error) {
            console.log('error:'+error)
        })

    },
    render: function () {
        var html = '';
        if ( this.state.data.length > 0 ) {
            var dataArr = [];
            for(var i = 0; i < this.state.data.length;  i++) {
                dataArr.push(this.state.data[i])
            }
            html = dataArr.join();

        }
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
    <Route handler={Index} path="/router" >
        <DefaultRoute handler={App} name="app" />
        <Route name="params" path="params/:messageId"  handler={Params} />
        <Redirect from="/router/redirect" to="params" params={{messageId:555}} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes,Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
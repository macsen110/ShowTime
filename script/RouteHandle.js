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
    statics: {
        willTransitionTo: function (transition, params) {
            console.log('ssss')
        },

        willTransitionFrom: function (transition, component) {
            console.log('ssssedsss')
        }
    },
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">app</Link></li>
                        <li><Link to="params" params ={{messageId:"123"}}>params</Link></li>
                    </ul>
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
        <DefaultRoute handler={App} name="app"/>
        <Route name="params" path="params/:messageId"  handler={Params} />
        <Redirect from="/router/redirect" to="params" params={{messageId:555}} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes,Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
var Router = ReactRouter; // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = React.createClass({displayName: "Index",
  render: function () {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

var routes = (
    React.createElement(Route, {handler: Index, path: "/rt"})
);

Router.run(routes,Router.HistoryLocation, function (Handler, state) {

  React.render(React.createElement(Handler, null), document.body);
});
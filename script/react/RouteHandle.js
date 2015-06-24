/**************
 react route


* **********/

'use strict';

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
            <div className="wrap-container" >
                <RouteHandler/>
            </div>
        )
    }
});

function getJSON(url) {
   if (getJSON._cache[url]) {
      // return Promise.resolve(getJSON._cache[url]);
   }
   return new Promise((resolve, reject) => {
       var req = new XMLHttpRequest();
       req.onload = function () {
         if (req.status === 404) {
           reject(new Error('not found'));
         } else {
           // fake a slow response every now and then
           setTimeout(function () {
             var data = JSON.parse(req.response);
             resolve(data);
             getJSON._cache[url] = data;
           }, 2000);
         }
       };
       req.open('GET', url);
       req.send();
   });
}

getJSON._cache = {};


getJSON('/api/router').then(res => console.log(res));

//ui for loading and loading end 

function* generator () {
    let i = 0;
    yield 'loading...';
    yield 'loading end';
    return '9'
}
const generator = generator();

var App = React.createClass({
    testObjFun() {
        console.log('testObjFun')
    },
    statics: {
        willTransitionTo: function (transition, params) {
            console.log('coming');

        },
        willTransitionFrom: function (transition, component) {
            console.log('leaving')
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
        self.testObjFun();
        var promise = new Promise( function(resolve, reject ){
            setTimeout(function () {
                var _xhr = new XMLHttpRequest();
                _xhr.open("GET", '/api/router');
                _xhr.onload = function () {
                   if (_xhr.readyState === 4) {
                       if (_xhr.status === 200) {
                            var data = JSON.parse(_xhr.response).data;
                            self.setState({data: data})
                            console.log('data: '+data)
                            resolve(data);
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
        promise.then(obj => {
            for (let i of obj) {
                console.log(i)               
            }
        }, error => console.log(error))

    },
    render: function () {
        var html = '';
        var data = this.state.data;
        if (data.length > 0) {
            return (
            <div>
                <p>{generator.next().value}</p>
                <header>
                    <ul>
                        <li><Link to="app">app</Link></li>
                        <li><Link to="params" params ={{messageId:"123"}}>params</Link></li>
                    </ul>
                </header>
                <section>
                    <ul className="list">
                        {data.map(item => <li className="item" key={item}> {item}</li>)}
                    </ul>
                </section>
            </div>
        )

        }
        return (<p>{generator.next().value}</p>)
        

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
    <Route handler={Index} path="/" >
        <DefaultRoute handler={App} name="app" />
        <Route name="params" path="params/:messageId"  handler={Params} />
        <Redirect from="/router/redirect" to="params" params={{messageId:555}} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

//Router.HistoryLocation参数代表绝对地址链接

Router.run(routes,function (Handler, state) {
    React.render(<Handler/>, document.body);
});
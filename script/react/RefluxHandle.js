

//create Actions 
(function(Reflux, global) {
    'use strict';

    // Each action is like an event channel for one specific event. Actions are called by components.
    // The store is listening to all actions, and the components in turn are listening to the store.
    // Thus the flow is: User interaction -> component calls action -> store reacts and triggers -> components update

    global.TodoActions = Reflux.createActions([
        "toggleItem",     // called by button in TodoItem
        "toggleAllItems", // called by button in TodoMain (even though you'd think TodoHeader)
        "addItem",        // called by hitting enter in field in TodoHeader
        "removeItem",     // called by button in TodoItem
        "clearCompleted", // called by button in TodoFooter
        "editItem"        // called by finishing edit in TodoItem
    ]);

})(window.Reflux, window);

//create stroles 

(function(Reflux, TodoActions, global) {
    'use strict';

    // some variables and helpers for our fake database stuff
    var todoCounter = 0,
        localStorageKey = "todos";

    function getItemByKey(list,itemKey){
        return _.find(list, function(item) {
            return item.key === itemKey;
        });
    }

    global.todoListStore = Reflux.createStore({
        // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
        listenables: [TodoActions],
        onEditItem: function(itemKey, newLabel) {
            var foundItem = getItemByKey(this.list,itemKey);
            if (!foundItem) {
                return;
            }
            foundItem.label = newLabel;
            this.updateList(this.list);
        },
        onAddItem: function(label) {
            this.updateList([{
                key: todoCounter++,
                created: new Date(),
                isComplete: false,
                label: label
            }].concat(this.list));
        },
        onRemoveItem: function(itemKey) {
            this.updateList(_.filter(this.list,function(item){
                return item.key!==itemKey;
            }));
        },
        onToggleItem: function(itemKey) {
            var foundItem = getItemByKey(this.list,itemKey);
            if (foundItem) {
                foundItem.isComplete = !foundItem.isComplete;
                this.updateList(this.list);
            }
        },
        onToggleAllItems: function(checked) {
            this.updateList(_.map(this.list, function(item) {
                item.isComplete = checked;
                return item;
            }));
        },
        onClearCompleted: function() {
            this.updateList(_.filter(this.list, function(item) {
                return !item.isComplete;
            }));
        },
        // called whenever we change a list. normally this would mean a database API call
        updateList: function(list){
            localStorage.setItem(localStorageKey, JSON.stringify(list));
            // if we used a real database, we would likely do the below in a callback
            this.list = list;
            this.trigger(list); // sends the updated list to all listening components (TodoApp)
        },
        // this will be called by all listening components as they register their listeners
        getInitialState: function() {
            var loadedList = localStorage.getItem(localStorageKey);
            if (!loadedList) {
                // If no list is in localstorage, start out with a default one
                this.list = [{
                    key: todoCounter++,
                    created: new Date(),
                    isComplete: false,
                    label: 'Rule the web'
                }];
            } else {
                this.list = _.map(JSON.parse(loadedList), function(item) {
                    // just resetting the key property for each todo item
                    item.key = todoCounter++;
                    return item;
                });
            }
            console.log(this.list);
            return this.list;
        }
    });

})(window.Reflux, window.TodoActions, window);

//Reflux within react route
(function(React, ReactRouter, Reflux, TodoActions, todoListStore, global) {

    // Renders a single Todo item in the list
    // Used in TodoMain
    var TodoItem = React.createClass({
        propTypes: {
            label: React.PropTypes.string.isRequired,
            isComplete: React.PropTypes.bool.isRequired,
            id: React.PropTypes.number
        },
        mixins: [React.addons.LinkedStateMixin], // exposes this.linkState used in render
        getInitialState: function() {
            return {};
        },
        handleToggle: function(evt) {
            TodoActions.toggleItem(this.props.id);
        },
        handleEditStart: function(evt) {
            evt.preventDefault();
            // because of linkState call in render, field will get value from this.state.editValue
            this.setState({
                isEditing: true,
                editValue: this.props.label
            }, function() {
                this.refs.editInput.getDOMNode().focus();
            });
        },
        handleValueChange: function(evt) {
            var text = this.state.editValue; // because of the linkState call in render, this is the contents of the field
            // we pressed enter, if text isn't empty we blur the field which will cause a save
            if (evt.which === 13 && text) {
                this.refs.editInput.getDOMNode().blur();
            }
            // pressed escape. set editing to false before blurring so we won't save
            else if (evt.which === 27) {
                this.setState({ isEditing: false },function(){
                    this.refs.editInput.getDOMNode().blur();
                });
            }
        },
        handleBlur: function() {
            var text = this.state.editValue; // because of the linkState call in render, this is the contents of the field
            // unless we're not editing (escape was pressed) or text is empty, save!
            if (this.state.isEditing && text) {
                TodoActions.editItem(this.props.id, text);
            }
            // whatever the outcome, if we left the field we're not editing anymore
            this.setState({isEditing:false});
        },
        handleDestroy: function() {
            TodoActions.removeItem(this.props.id);
        },
        render: function() {
            var classes = React.addons.classSet({
                'completed': this.props.isComplete,
                'editing': this.state.isEditing
            });
            return (
                <li className={classes}>
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={!!this.props.isComplete} onChange={this.handleToggle} />
                        <label onDoubleClick={this.handleEditStart}>{this.props.label}</label>
                        <button className="destroy" onClick={this.handleDestroy}></button>
                    </div>
                    <input ref="editInput" className="edit" valueLink={this.linkState('editValue')} onKeyUp={this.handleValueChange} onBlur={this.handleBlur} />
                </li>
            );
        }
    });

    // Renders the todo list as well as the toggle all button
    // Used in TodoApp
    var TodoMain = React.createClass({
        mixins: [ ReactRouter.State ],
        propTypes: {
            list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        },
        toggleAll: function(evt) {
            TodoActions.toggleAllItems(evt.target.checked);
        },
        render: function() {
            var filteredList;
            switch(this.getPath()){
                case '/completed':
                    filteredList = _.filter(this.props.list,function(item){ return item.isComplete; });
                    break;
                case '/active':
                    filteredList = _.filter(this.props.list,function(item){ return !item.isComplete; });
                    break;
                default:
                    filteredList = this.props.list;
            }
            var classes = React.addons.classSet({
                "hidden": this.props.list.length < 1
            });
            return (
                <section id="main" className={classes}>
                    <input id="toggle-all" type="checkbox" onChange={this.toggleAll} />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul id="todo-list">
                        { filteredList.map(function(item){
                            return <TodoItem label={item.label} isComplete={item.isComplete} id={item.key} key={item.key}/>;
                        })}
                    </ul>
                </section>
            );
        }
    });

    // Renders the headline and the form for creating new todos.
    // Used in TodoApp
    // Observe that the toogleall button is NOT rendered here, but in TodoMain (it is then moved up to the header with CSS)
    var TodoHeader = React.createClass({
        handleValueChange: function(evt) {
            var text = evt.target.value;
            if (evt.which === 13 && text) { // hit enter, create new item if field isn't empty
                TodoActions.addItem(text);
                evt.target.value = '';
            } else if (evt.which === 27) { // hit escape, clear without creating
                evt.target.value = '';
            }
        },
        render: function() {
            return (
                <header id="header">
                    <h1>todos</h1>
                    <input id="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={this.handleValueChange}/>
                </header>
            );
        }
    });

    // Renders the bottom item count, navigation bar and clearallcompleted button
    // Used in TodoApp
    var TodoFooter = React.createClass({
        propTypes: {
            list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        },
        render: function() {
            var nbrcompleted = _.filter(this.props.list, "isComplete").length,
                nbrtotal = this.props.list.length,
                nbrincomplete = nbrtotal-nbrcompleted,
                clearButtonClass = React.addons.classSet({hidden: nbrcompleted < 1}),
                footerClass = React.addons.classSet({hidden: !nbrtotal }),
                completedLabel = "Clear completed (" + nbrcompleted + ")",
                itemsLeftLabel = nbrincomplete === 1 ? " item left" : " items left";
            return (
                <footer id="footer" className={footerClass}>
                    <span id="todo-count"><strong>{nbrincomplete}</strong>{itemsLeftLabel}</span>
                    <ul id="filters">
                        <li>
                            <ReactRouter.Link activeClassName="selected" to="All">All</ReactRouter.Link>
                        </li>
                        <li>
                            <ReactRouter.Link activeClassName="selected" to="Active">Active</ReactRouter.Link>
                        </li>
                        <li>
                            <ReactRouter.Link activeClassName="selected" to="Completed">Completed</ReactRouter.Link>
                        </li>
                    </ul>
                    <button id="clear-completed" className={clearButtonClass} onClick={TodoActions.clearCompleted}>{completedLabel}</button>
                </footer>
            );
        }
    });

    // Renders the full application
    // RouteHandler will always be TodoMain, but with different 'showing' prop (all/completed/active)
    var TodoApp = React.createClass({
        // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
        mixins: [Reflux.connect(todoListStore,"list")],

        render: function() {
            return (
                <div>
                    <TodoHeader />
                    <ReactRouter.RouteHandler list={this.state.list} />
                    <TodoFooter list={this.state.list} />
                </div>
            );
        }
    });

    var routes = (
        <ReactRouter.Route handler={TodoApp} path="/reflux">
            <ReactRouter.Route name="All" path="/" handler={TodoMain} />
            <ReactRouter.Route name="Completed" path="/completed" handler={TodoMain} />
            <ReactRouter.Route name="Active" path="/active" handler={TodoMain} />
        </ReactRouter.Route>
    );

    ReactRouter.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('todoapp'));
    });

})(window.React, window.ReactRouter, window.Reflux, window.TodoActions, window.todoListStore, window);
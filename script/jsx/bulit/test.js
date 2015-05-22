var Login = React.createClass({displayName: "Login",

    mixins: [
        Reflux.listenTo(userStore, 'resetForm'),
        Reflux.listenTo(loginStore, 'onErrorMessage')
    ],

    getInitialState: function() {
        return {
            error: '',
            submitted: false
        };
    },

    resetForm: function() {
        this.refs.email.getDOMNode().value = '';
        this.refs.password.getDOMNode().value = '';
        this.refs.submit.getDOMNode().disabled = false;
        this.setState({
            submitted: false,
        });
    },

    onErrorMessage: function(errorMessage) {
        this.refs.submit.getDOMNode().disabled = false;
        this.setState({
            error: errorMessage,
            submitted: false
        });
    },

    login: function(e) {
        e.preventDefault();

        this.refs.submit.getDOMNode().disabled = true;
        this.setState({
            submitted: true
        });

        actions.login({
            email: this.refs.email.getDOMNode().value.trim(),
            password: this.refs.password.getDOMNode().value.trim()
        });
    },

    render: function() {
        var error = this.state.error ? React.createElement("div", {className: "error login-error"},  this.state.error) : null;

        return (
            React.createElement("div", {className: "login text-center md-modal", id: "overlay-content"}, 
                React.createElement("form", {onSubmit:  this.login, className: "login-form text-left"}, 
                    React.createElement("h1", null, "Login"), 
                    React.createElement("label", {htmlFor: "email"}, "Email"), React.createElement("br", null), 
                    React.createElement("input", {type: "email", placeholder: "Email", id: "email", ref: "email"}), React.createElement("br", null), 
                    React.createElement("label", {htmlFor: "password"}, "Password"), React.createElement("br", null), 
                    React.createElement("input", {type: "password", placeholder: "Password", id: "password", ref: "password"}), React.createElement("br", null), 
                    React.createElement("button", {type: "submit", className: "button button-primary", ref: "submit"}, 
                         this.state.submitted ? React.createElement(Spinner, null) : 'Sign In'
                    )
                ), 
                 error 
            )
        );
    }
});
var Login = React.createClass({

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
        var error = this.state.error ? <div className="error login-error">{ this.state.error }</div> : null;

        return (
            <div className="login text-center md-modal" id="overlay-content">
                <form onSubmit={ this.login } className="login-form text-left">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder="Email" id="email" ref="email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder="Password" id="password" ref="password" /><br />
                    <button type="submit" className="button button-primary" ref="submit">
                        { this.state.submitted ? <Spinner /> : 'Sign In' }
                    </button>
                </form>
                { error }
            </div>
        );
    }
});
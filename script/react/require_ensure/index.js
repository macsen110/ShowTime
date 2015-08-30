import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentComponent: 0 };
    this.openProfile();
  }
  openProfile() {
    console.log('place');
    require.ensure([], () => {
      var Profile = require('./Profile.js');
      console.log(Profile)
      this.setState({
        currentComponent: Profile
      })
    });
  }
  render() {
   return (
      <div>{this.state.currentComponent}</div>
    );
  }
}
React.render(<App/>, document.body);
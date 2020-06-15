import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component{
	state = {
	        darkmode: true
	      }
    
    handleMode = () => {
        let currentMode = this.state.darkmode
        this.setState({darkmode: !currentMode});
    }
  
  render() {
  	const { darkmode } = this.state;
  	return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <SignInAndSignUp darkmode={darkmode} handleMode={this.handleMode} />} />
          <Route path='/home' render={() => <HomePage darkmode={darkmode} handleMode={this.handleMode}/> } />
        </Switch>
      </div>

    );
  }
    
}

export default App;

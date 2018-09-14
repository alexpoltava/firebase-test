import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SignInScreen from './SignInScreen';
import { functions } from './fb_init';

const test = functions.httpsCallable('test');

class App extends Component {
  _click = () => {
    console.log('click');
    test('hello')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <SignInScreen />
        <button onClick={this._click}>Test</button>
      </div>
    );
  }
}

export default App;

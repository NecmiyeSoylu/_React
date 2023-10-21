import React, { Component } from 'react'
import User from './Components/User';
import UserApp from './Components/Functional'
import './App_my.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App Component</h1>
        <UserApp></UserApp>
        <User></User>
      </div>
    );
  }
}
export default App;
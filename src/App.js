import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TodoList store={store} />
        <DevTools />
      </div>
    );
  }
}

export default App;

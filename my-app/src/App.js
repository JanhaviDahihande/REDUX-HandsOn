import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

function App() {
  const counter = (state = 0, action ) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];

  // returns current state
  const getState = () => state;

  // to change state
  const dispatch = (action) => {
    state = reducer(state, action);

    //inform every listener of the chnaged state
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    //unsubscribe
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  return { getState, dispatch, subscribe };
}

return (
  <div className="App">
    <header className="App-header">
      <button onClick={ dispatchStore }>Increment counter</button>
    </header>
  </div>
);
}

export default App;

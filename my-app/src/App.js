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
const store = createStore( counter );

const render = () => {
  console.log("Current state: " + store.getState());
}
store.subscribe(render);
render();

const dispatchStore = () => {
  store.dispatch({ type: 'INCREMENT' })
};

return (
  <div className="App">
    <header className="App-header">
      <button onClick={ dispatchStore }>Increment counter</button>
    </header>
  </div>
);
}

export default App;

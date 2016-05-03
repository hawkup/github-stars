import React from 'react';
import { observable } from 'mobx';
import Counter from './Counter';

const appState = new class AppState {
  @observable counter = 0;

  constructor() {
    setInterval(() => {
      appState.counter += 1;
    }, 1000);
  }

  resetTimer() {
    this.counter = 0;
  }
}();

const App = () => (
  <div>
    <h1>Hello ReactJS</h1>
    <Counter appState={appState} />
  </div>
);

export default App;

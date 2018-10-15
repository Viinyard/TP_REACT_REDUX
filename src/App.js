import React, { Component } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';
import Filter from './Filter';
import AddForm from './AddForm';
import TotalExpenses from './TotalExpenses'

import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "./rootReducer.js"

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Integration Week End</h1>
          </header>
        </div>
        <Filter />
        <ShoppingList  />
        <AddForm />
        <TotalExpenses />
        </div>
      </Provider>
    );
  }
}

export default App;

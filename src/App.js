import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';
import Filter from './Filter';
import AddForm from './AddForm';
import TotalExpenses from './TotalExpenses'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      costs: [
      { paidBy: 0, title: 'Beer', amount: 15 },
      { paidBy: 1, title: 'Cups', amount: 3},
      { paidBy: 2, title: 'Pizza', amount: 20},
      { paidBy: 0, title: 'Condom', amount: 2}
      ],
      users: [
        'Amine',
        'Julie',
        'Kévin'
      ],
      filter: -1
    }

  }

  getUserIndex = (value) => {
    for(var i = 0; i < this.state.users.length; i++) {
        if(this.state.users[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
  };

  addCost = (what, who, how) => {
    if(this.getUserIndex(who) == -1) {
      this.setState({users: [...this.state.users,  who ]});
      this.setState({costs: [...this.state.costs, { paidBy: this.state.users.length, title: what, amount: parseInt(how) }]});
    } else {
      this.setState({costs: [...this.state.costs, { paidBy: this.getUserIndex(who), title: what, amount: parseInt(how) }]});
    }
  };


  filter = (paidBy) =>
    this.setState({filter: paidBy});

  render() {
    return (
      <div class="col-xs-12">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Integration Week End</h1>
          </header>
        </div>
        <Filter users={this.state.users} filter={this.filter} />
        <ShoppingList users={this.state.users} costs={this.state.costs} filter={this.state.filter}  />
        <AddForm addCost={this.addCost} />
        <TotalExpenses costs={this.state.costs} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;

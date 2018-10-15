import React, { Component } from 'react';

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
  }

  listCost = () =>

    this.props.costs
    .filter(cost => ( cost.paidBy == this.props.filter || this.props.filter == -1))
    .map((cost) =>
      <tr>
        <td>{cost.title}</td>
        <td>{this.props.users[cost.paidBy]}</td>
        <td>{cost.amount}</td>
      </tr>
    );

  render() {
    return (
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">title</th>
            <th scope="col">paidBy</th>
            <th scope="col">amout</th>
          </tr>
        </thead>
        <tbody>
        {this.listCost()}
        </tbody>
      </table>
    );
  }
}

export default ShoppingList;

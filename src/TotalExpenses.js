import React, { Component } from 'react';

class TotalExpenses extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let total = this.props.costs.filter(cost => cost.paidBy == this.props.filter || this.props.filter == -1).reduce((accumulator, value) =>
							 accumulator + value.amount
						, 0)

    return (
      <table class="table table-borderless table-dark">
        <thead>
          <tr>
            <th class="text-uppercase text-right" scope="col">Total expenses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-right">{total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TotalExpenses;

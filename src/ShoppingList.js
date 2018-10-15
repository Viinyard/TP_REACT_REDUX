import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
  }

  listCost = () =>

    this.props.costs
    .filter(cost => ( cost.paidBy === parseInt(this.props.filter) || parseInt(this.props.filter) === -1))
    .map((cost) =>
      <tr>
        <td>{cost.title}</td>
        <td>{this.props.users[cost.paidBy]}</td>
        <td>{cost.amount}</td>
      </tr>
    );

  render() {
    console.log("filter " + this.props.filter);
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

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		costs: state.costs,
    users : state.users
	}
}
const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (ShoppingList);

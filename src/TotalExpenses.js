import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalExpenses extends React.Component {


  render() {
    let total = this.props.costs.filter(cost => cost.paidBy === this.props.filter || this.props.filter === -1).reduce((accumulator, value) =>
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

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		costs: state.costs
	 }
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (TotalExpenses);

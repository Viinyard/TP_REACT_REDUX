import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterChanged } from './redux_actions';

class Filter extends React.Component {

  constructor(props) {
    super(props);
  }

  listUser = () =>
    this.props.users.map((user, index) =>
      <option value={index}>{user}</option>
    );

    handleChange(e) //e the event
  	{
  		this.props.filterChanged(e.target.value);
    }

  render() {
    return (
      <form class="form-horizontal" onChange={(e) => this.handleChange(e)}>
        <fieldset>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Options</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option value="-1">Tous</option>
              {this.listUser()}
            </select>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		users : state.users
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		filterChanged: (value) => {
      console.log("EVENT");
			dispatch(filterChanged(value))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (Filter);

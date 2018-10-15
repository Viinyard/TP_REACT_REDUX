import React, { Component } from 'react';
import { connect } from 'react-redux';
import { costAdded } from './redux_actions'
import { userAdded } from './redux_actions'

class AddForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        what: '',
        who: '',
        how: -1
    }
  }

  handleClick = () => {
    if(this.state.what !== "" && this.state.who !== "" && parseInt(this.state.how) !== -1) {
      if(this.props.users.indexOf(this.state.who) === -1) {
        this.props.userAdded(this.state.who);
      }
      this.props.costAdded(this.state.what, this.props.users.indexOf(this.state.who), this.state.how);
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  render() {
    return (
        <div class="form-row">
          <div class="form-group col-xs-4">
            <label for="inputCity">What ?</label>
            <input name="what" type="text" class="form-control" id="inputCity" onChange={event => this.handleChange(event)} />
          </div>
          <div class="form-group col-xs-4">
            <label for="inputState">Who ?</label>
            <input name="who" type="text" class="form-control" id="inputCity" onChange={event => this.handleChange(event)} />
          </div>
          <div class="form-group col-xs-4">
            <label for="inputState">Price ?</label>
            <div class="input-group">
              <input name="how" type="number" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={event => this.handleChange(event)} />
              <div class="input-group-append">
                <span class="input-group-text">$</span>
                <button class="btn btn-primary" onClick={this.handleClick}>+</button>
              </div>
            </div>
          </div>
        </div>

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
		costAdded: (what, who, how) => {
      console.log("ADD " + what + ", " + who + ", " + parseInt(how));
			dispatch(costAdded(what, who, parseInt(how)));
		},
    userAdded: (who) => {
			dispatch(userAdded(who));
    }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddForm);

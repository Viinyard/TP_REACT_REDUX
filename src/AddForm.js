import React, { Component } from 'react';

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
    this.props.addCost(this.state.what, this.state.who, this.state.how);
    if(this.state.what != "" && this.state.who != "" && this.state.how != -1) {

    }
  }

  handleChange = (event) => {
    console.log(event.target.name + " : " + event.target.value);
    this.setState({[event.target.name]: event.target.value });
    console.log("what " + this.state.what);
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

export default AddForm;

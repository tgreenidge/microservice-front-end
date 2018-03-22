import React, { Component } from 'react';

class NewClaim extends Component {
  state = {
    newClaim: {}
  };

  handleChange = event => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedNewClaim = { ...this.state.newClaim };
    updatedNewClaim[attributeToChange] = newValue;
    this.setState({ newClaim: updatedNewClaim });
  };

  //not wired up properly as yet
  handleSubmit = event => {
    event.preventDefault();
    // this.props.createClaim(this.state.newClaim);
    alert('I will create a claim eventually');
  };

  render() {
    return (
      <div className="New-claim">
        <div>
          <h3>NEW CLAIM</h3>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="member-id" className="col-md-2 col-form-label">
                Member Id
              </label>
              <div className="col-md-10">
                <input
                  name="member-id"
                  type="text"
                  className="form-control form-control-md"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="member-first-name"
                className="col-md-2 col-form-label"
              >
                Member First Name
              </label>
              <div className="col-md-10">
                <input
                  name="member-name"
                  type="text"
                  className="form-control form-control-md"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="member-last-name"
                className="col-md-2 col-form-label"
              >
                Member Last Name
              </label>
              <div className="col-md-10">
                <input
                  name="member-name"
                  type="text"
                  className="form-control form-control-md"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="type" className="col-md-2 col-form-label">
                Claim Type
              </label>
              <div className="col-md-10">
                <select
                  className="form-control form-control-md"
                  id="claim-type"
                >
                  <option>Type 1</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                  <option>Type 4</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="amount" className="col-md-2 col-form-label">
                Claim Amount
              </label>
              <div className="col-md-10">
                <input
                  name="claim-amount"
                  type="number"
                  step="0.01"
                  className="form-control form-control-md"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <button type="submit">Submit New Claim</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewClaim;

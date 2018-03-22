import React, { Component } from 'react';
import _ from 'lodash';
import cf from 'currency-formatter';

class ClaimsTable extends Component {
  renderTableBody = () => {
    return _.map(
      this.props.data,
      ({ id, firstName, lastName, dateApproved, amount, claimType }) => (
        <tr key={id}>
          <td>
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </td>
          <td>{new Date(dateApproved).toDateString()}</td>
          <td>{claimType}</td>
          <td>{cf.format(amount, { code: 'USD' })}</td>
        </tr>
      )
    );
  };
  render() {
    const { data } = this.props;
    return (
      <div id="ClaimsTable" className="claims-table">
        <div className="table-wrapper">
          <table className="table table-main col-12">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{this.renderTableBody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ClaimsTable;

import React, { Component } from 'react';
import Chart from './Chart';
import ClaimsTable from './ClaimsTable';
import KeyStats from './KeyStats';
import axios from 'axios';

class ClaimsDashboard extends Component {
  state = {
    claims: []
  };

  async componentDidMount() {
    try {
      //get all claims from database
      const response = await axios.get('http://localhost:8082/claims');
      this.setState({ claims: response.data });
    } catch (error) {
      console.warn(error);
    }
  }

  createClaim = async (claim, index) => {
    try {
      const newClaimResponse = await axios.post('localhost:8082/claims');
      const updatedClaimsList = [...this.state.claims];
      updatedClaimsList.push(newClaimResponse.data);
      this.setState({ claims: updatedClaimsList });
    } catch (error) {
      console.log('Error creating new claim');
    }
  };

  render() {
    //annual limit for total claims in $
    const annualLimit = 10000;

    const data = this.state.claims;

    return (
      <div>
        <KeyStats
          data={data}
          limit={annualLimit}
          createClaim={this.createClaim}
        />
        <Chart data={data} />
        <ClaimsTable data={data} />
      </div>
    );
  }
}

export default ClaimsDashboard;

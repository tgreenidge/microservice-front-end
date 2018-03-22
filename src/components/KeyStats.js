import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cf from 'currency-formatter';

class KeyStats extends Component {
  render() {
    const claims = this.props.data;

    // find amount for each type of claim
    // TODO: refactor quick and dirty... ran out of time
    let type1ClaimsAmount = Object.keys(claims).reduce(function(previous, key) {
      if (claims[key].claimType === 'Type 1') {
        return previous + claims[key].amount;
      } else {
        return previous + 0;
      }
    }, 0);

    let type2ClaimsAmount = Object.keys(claims).reduce(function(previous, key) {
      if (claims[key].claimType === 'Type 2') {
        return previous + claims[key].amount;
      } else {
        return previous + 0;
      }
    }, 0);

    let type3ClaimsAmount = Object.keys(claims).reduce(function(previous, key) {
      if (claims[key].claimType === 'Type 3') {
        return previous + claims[key].amount;
      } else {
        return previous + 0;
      }
    }, 0);

    let type4ClaimsAmount = Object.keys(claims).reduce(function(previous, key) {
      if (claims[key].claimType === 'Type 4') {
        return previous + claims[key].amount;
      } else {
        return previous + 0;
      }
    }, 0);

    // TODO: refactor
    var total =
      type1ClaimsAmount +
      type2ClaimsAmount +
      type3ClaimsAmount +
      type4ClaimsAmount;

    return (
      <div id="KeyStats">
        <h1>CLAIMS</h1>
        <div className="row">
          <div className="col-md-6 col-lg-10">
            <h5>Claims Total Value: {cf.format(total, { code: 'USD' })}</h5>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="btn text-center m-lg-auto">
              <Link to="/newClaim">Submit a New Claim</Link>
            </div>
          </div>
        </div>
        <div className="row no-gutters claim-stats">
          <div className="col-md-12 col-lg-3">
            <div className="stat">
              <div className="stat-desc">
                <div className="stat-label">Type 1</div>
                <div className="stat-value">
                  {cf.format(type1ClaimsAmount, { code: 'USD' })}
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="stat">
              <div className="stat-desc">
                <div className="stat-label">Type 2</div>
                <div className="stat-value">
                  {cf.format(type2ClaimsAmount, { code: 'USD' })}
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="stat">
              <div className="stat-desc">
                <div className="stat-label">Type 3</div>
                <div className="stat-value">
                  {cf.format(type3ClaimsAmount, { code: 'USD' })}
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="stat">
              <div className="stat-desc">
                <div className="stat-label">Type 4</div>
                <div className="stat-value">
                  {cf.format(type4ClaimsAmount, { code: 'USD' })}
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyStats;

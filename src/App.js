import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClaimsDashboard from './components/ClaimsDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import NewClaim from './components/NewClaim';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={ClaimsDashboard} />
            <Route exact path="/newClaim" component={NewClaim} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

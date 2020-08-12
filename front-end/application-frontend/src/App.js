import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCompanies } from './actions/fetchCompanies'
import CompaniesContainer from './container/CompaniesContainer';


class App extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <CompaniesContainer />
      </div>
    )
  }
}


export default App;

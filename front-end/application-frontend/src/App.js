import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from './actions/fetchCompanies'


class App extends Component {

  state = {

  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        App
      </div>
    )
  }
}


export default connect(null, { fetchCompanies })(App);

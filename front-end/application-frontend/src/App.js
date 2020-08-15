import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCompanies } from './actions/fetchCompanies'
import CompaniesContainer from './container/CompaniesContainer';
import NavBar from './components/NavBar';
import './App.css'



class App extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <NavBar />
        <CompaniesContainer />
      </div>
    )
  }
}


export default App;

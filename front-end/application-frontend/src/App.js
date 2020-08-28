import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCompanies } from './actions/fetchCompanies'
import CompaniesContainer from './container/CompaniesContainer';
import NavBar from './components/NavBar';
import { useHistory } from "react-router-dom";
import './App.css'


class App extends Component {

  state = {
    counter: 0
  }

    handleClick() {
    // this.setState(prevState => ({counter: prevState + 1}))
    console.log(this)
  }


  render() {
    return (
      <div className='main'>
        <div>
        <NavBar />
        </div>
        <CompaniesContainer />
      </div>
    )
  }
  
}


export default App;

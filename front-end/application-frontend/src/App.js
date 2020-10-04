import React, { Component } from 'react';
import CompaniesContainer from './container/CompaniesContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {

    return (
      <div className='main'>
        <div>
        <NavBar />
        </div>
        <CompaniesContainer />
      </div>
    )
  
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import '../App.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <Link className='nav-link' to='/companies' style={{paddingRight: '10px'}}>Companies </Link>
            <Link className='nav-link' to='/company/new'> Add Company</Link>
            <Home />
        </div>
    )
}


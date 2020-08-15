import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default class NavBar extends Component {


    render() {

        const divStyle = {
            color: 'red',
        }
        return (
            <div>
                <Link to='/companies' style={{paddingRight: '10px'}}>Companies </Link>
                <Link to='/company/new'> Add Company</Link>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Companies from '../components/Companies';
import CompaniesInput from '../components/CompanyInput';
import { fetchCompanies } from '../actions/fetchCompanies';
import Company from '../components/Company'
import { Route } from 'react-router-dom';


class CompaniesContainer extends Component {

    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return (
            <div>
                <Route path='/company/new' component={CompaniesInput}/>
                <Route path='/company/:id' render={(routerProps) => <Company {...routerProps} companies={this.props.companies}/>} />
                <Route path='/companies' render={() => <Companies companies={this.props.companies}/> } />
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.companies
    }
}


export default connect(mapStateToProps, {fetchCompanies})(CompaniesContainer);
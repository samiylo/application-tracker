import React, { Component } from 'react';
import { connect } from 'react-redux';
import Companies from '../components/Companies';
import CompaniesInput from '../components/CompanyInput';
import { fetchCompanies } from '../actions/fetchCompanies'


class CompaniesContainer extends Component {

    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return (
            <div>
                <CompaniesInput />
                <Companies companies={this.props.companies} />
                
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
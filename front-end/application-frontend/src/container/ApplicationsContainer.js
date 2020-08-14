import React, { Component } from 'react'
import ApplicationInput from '../components/ApplicationInput'
import Applications from '../components/Applications'

export default class ApplicationsContainer extends Component {
    render() {
        return (
            <div>
                
                <ApplicationInput companies={this.props.company} />
                <Applications applications={this.props.company && this.props.company.applications} />
            </div>
        )
    }
}

import React, { Component } from 'react';
import ApplicationInput from '../components/ApplicationInput';
import Applications from '../components/Applications';

export default function ApplicationsContainer(props) {

        return (
            <div>
                <ApplicationInput company={props.company} />
                <Applications applications={props.company && props.company.applications} company={props.company && props.company} />
            </div>
        )
}

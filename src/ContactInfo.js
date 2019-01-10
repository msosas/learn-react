import React from 'react'

class ContactInfo extends React.Component {
    render () {
        return (
            <div>
                <h4>{ this.props.contact.name }</h4>
                <img src={ this.props.contact.src }/>
                <ul>
                    <li>Job Title: { this.props.contact.job }</li>
                    <li>Phone number: { this.props.contact.phone }</li>
                    <li>Address: { this.props.contact.address }</li>
                </ul>
            </div>
        )
    }
}

export default ContactInfo;
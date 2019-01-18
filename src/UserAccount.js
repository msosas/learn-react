import React from 'react'

class UserAccount extends React.Component {
    componentDidMount () {
        this.props.hideSpinner()
    }
    render () {
        return (
            <div>
                <h1>User Account</h1>
            </div>
        )
    }
}

export default UserAccount;
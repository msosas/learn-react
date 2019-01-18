import React from 'react'

class Login extends React.Component {
    login () {
        return (
            this.props.updateLogStatus()
        )
    }
    render () {
        return (
            <div>
                <input placeholder="USER" type="text"></input>
                <input placeholder="PASSWORD" type="password"></input>
                <br></br>
                <button onClick={ () => {
                    this.login()
                    this.props.showSpinner()
                    } 
                }>LogIn</button>
            </div>
        )
    }
}

export default Login;
import React from 'react'
import './Footer.css'
class Footer extends React.Component {
    render () {
        return(
            <footer className="foot">
                <h5>Contact information</h5>
                <ul>
                    <li>Company Name</li>
                    <li>Fake Address, 123, No-Country</li>
                    <li>555-555-123</li>
                </ul>
            </footer>
        )
    }
}

export default Footer;
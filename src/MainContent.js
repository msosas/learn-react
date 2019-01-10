import React from 'react'
import ContactInfo from './ContactInfo'

class MainContent extends React.Component {
    render () {

        return (
            <div>
                <main>
                    <ContactInfo 
                        contact={{
                            name:"John Doe",
                            src:"./images/avatar.jpeg",
                            job:"Web Developer",
                            address:"Fake Address, 123, No Country",
                            phone:"555-555-123",
                        }}
                    />
                </main>
            </div>
        )
    }
}

export default MainContent;
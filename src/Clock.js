import React from 'react'

class Clock extends React.Component {
    constructor (){
        super()
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render () {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1000)
        return (
            <div>
                <h1>{ this.state.time }</h1>
            </div>
        )
    }
}


export default Clock;

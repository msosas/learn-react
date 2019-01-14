import React from 'react'
import './Joke.css'

class Joke extends React.Component {
    render () {
        return (
            <div className="Joke">
                <h2 style={{ display: this.props.question ? "block" : "none" }}>Question: { this.props.question }</h2>
                <h2>Answer: { this.props.punchLine  }</h2>
                <hr />
            </div>
        )
    }
}

export default Joke;

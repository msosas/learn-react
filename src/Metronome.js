import React from 'react';
import './Metronome.css';

class Metronome extends React.Component {
    constructor () {
        super ()
        this.state= {
            bpm: 120,
            isPlaying: false
        }
        this.handleButtonChange = this.handleButtonChange.bind(this)
    }
    handleButtonChange (event) {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
        console.log(this.state.isPlaying)
    }
    render () {
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{this.state.bpm} BPM</div>
                    <input type="range" min="20" max="220" value={this.state.bpm} />
                </div>
                <br/>
                
                <button onChange={this.handleButtonChange}>{ this.state.isPlaying ? 'STOP' : 'START' }</button>
                
            </div>
        )
    }
}

export default Metronome;
import React from 'react';
import './Metronome.css';
import sound01 from './sound01.wav'
import sound02 from './sound02.wav'

class Metronome extends React.Component {
    constructor () {
        super ()
        this.state= {
            bpm: 120,
            isPlaying: false
        }
        this.click01 = new Audio(sound01)
        this.click02 = new Audio(sound02)
        this.timer = null
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleSliderChange = this.handleSliderChange.bind(this)
    }

    handleSliderChange (event) {
        const bpm = event.target.value
        this.setState({
            bpm: bpm
        })
    }
    handleButtonClick (event) {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }
    render () {
        if(!this.state.isPlaying) {
           this.timer = setInterval(() => {
                this.click01.play()        
            }, 60/(this.state.bpm)*1000)   
        }
        else {
            clearInterval(this.timer)
            this.click01.pause()
        }
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{this.state.bpm} BPM</div>
                    <input onChange={this.handleSliderChange} type="range" min="20" max="220" value={this.state.bpm}  />
                </div>
                <br/>
                
                <button onClick={this.handleButtonClick}>{ this.state.isPlaying ? 'STOP' : 'START' }</button>
                
            </div>
        )
    }
}

export default Metronome;
import React from 'react'

class MemeGenerator extends React.Component {
    constructor () {
        super ()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.getMeme = this.getMeme.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.selectMeme = this.selectMeme.bind(this)
    }

    getMeme () {
        var that = this
        fetch("https://api.imgflip.com/get_memes")
            .then(function (response) {
                return(response.json())
            })
            .then(function (data) {
                that.setState({
                    allMemeImg: data.data.memes
                })
                //console.log(that.state.allMemeImg)
            })
    }

    changeHandler (event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    selectMeme (event) {
        const index = Math.floor(Math.random() * this.state.allMemeImg.length)
        this.setState({
            randomImage: this.state.allMemeImg[index].url
        })
        event.preventDefault();
    }

    componentDidMount () {
        this.getMeme()
    }
    render () {
        return (
            <div>
                <form className="meme-form" onSubmit={ this.selectMeme }>
                    <input 
                        name="topText" 
                        value={this.state.topText}
                        placeholder="Top"
                        onChange={this.changeHandler}
                    />
                    <input 
                        name="bottomText" 
                        value={this.state.bottomText}
                        placeholder="Bottom"
                        onChange={this.changeHandler}
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }  
}

export default MemeGenerator;
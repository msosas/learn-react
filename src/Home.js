import React from 'react';
import Chart from './Chart';
import InstantInfo from './InstantInfo';
import './Home.css';

class Home extends React.Component {
    render () {        
        return (
            <div className="Home">
                <InstantInfo />
                <Chart />
            </div>
        )
    }
}

export default Home;
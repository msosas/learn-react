import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class Main extends React.Component {
    render () {
        return (
            <div className="Main">
                <main>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Main;
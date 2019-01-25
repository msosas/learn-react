import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Accounts from './Accounts';

class Main extends React.Component {
    render () {
        return (
            <div className="Main">
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/accounts" component={Accounts} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Main;
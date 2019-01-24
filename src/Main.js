import React from 'react'
import Piano from './Piano'
import { Switch, Route } from 'react-router-dom'
class Main extends React.Component {
    render () {
        return (
            <div>
                <main>
                    <Switch >
                        <Route path="/piano" component={Piano} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Main;
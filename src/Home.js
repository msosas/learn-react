import React from 'react';
import './Home.css';
import  { Grid, Row, Col } from 'react-bootstrap'

class Home extends React.Component {
    render () {
        const budget = new Number(30000) // Harcoded
        const todayExpenses = new Number(751) // Harcoded
        return (
            <div className="Home">
                <div className="InstantInfo">
                    <h5>Home</h5>
                    <div>
                        <p className="CurrentDate">{ new Date().toLocaleDateString() }</p>
                        <p className="BudgetAmount">{ budget.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                        <p>This is your remaining budget today...</p>
                    </div>
                    <div className="ExtraInfo">
                        <Grid>
                            <Row className="show-grid">
                                <Col sm={6}>
                                    { todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }
                                </Col>
                                <Col sm={6}>
                                    { todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
                <div className="Graph">
                    <div>Gaficos</div>
                </div>
            </div>
        )
    }
}

export default Home;
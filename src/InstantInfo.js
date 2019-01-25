import React from 'react';
import  { Grid, Row, Col } from 'react-bootstrap';

function InstantInfo () {
    const budget = new Number(30000) // Harcoded
    const todayExpenses = new Number(751) // Harcoded
    return (
        <div className="InstantInfo">
            <h5>Home</h5>
            <div>
                <p className="CurrentDate">{ new Date().toLocaleDateString() }</p>
                <p className="BudgetAmount">{ budget.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                <p>This is your remaining budget...</p>
            </div>
            <div className="ExtraInfo">
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6}>
                            <p>{ todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                            <p className="leyend"> Spend Today </p>
                        </Col>
                        <Col sm={6}>
                        <p>{ todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                            <p className="leyend"> Spend Today </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default InstantInfo;
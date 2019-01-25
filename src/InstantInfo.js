import React from 'react';
import  { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import expensesData from './ExpensesData';


class InstantInfo extends React.Component {
    constructor () {
        super()
        this.state = {
            budget: 30000,
            todayExpenses: 0
        }
        this.calcTodayExp = this.calcTodayExp.bind(this)
    }
    calcTodayExp () {
        const today = new Date().toLocaleDateString()
        let todaySum = 0
        for (let i = 0; i< expensesData.length; i++) { 
            if(expensesData[i].date === today) {
                this.setState(prevState => ({
                    todayExpenses: prevState.todayExpenses + expensesData[i].amount
                }))
            }
        }
    }
    componentDidMount () {
        this.calcTodayExp()
    }

    render () {
        const budget = 30000 // Harcoded
        const todayExpenses = 751 // Harcoded
        return (
            <div className="InstantInfo">
                <h5>Home</h5>
                <div>
                    <p className="CurrentDate">{ new Date().toLocaleDateString() }</p>                  
                    <p className="BudgetAmount">
                        <Link to="/accounts">
                            { budget.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }
                        </Link>
                    </p>
                        
                    
                    <p>This is your remaining budget...</p>
                </div>
                <div className="ExtraInfo">
                    <Grid>
                        <Row className="show-grid">
                            <Col sm={6}>
                                <p>{ this.state.todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                                <p className="leyend"> Spend Today </p>
                            </Col>
                            <Col sm={6}>
                            <p>{ todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) }</p>
                                <p className="leyend"> Spend This Week </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default InstantInfo;
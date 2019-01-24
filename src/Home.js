import React from 'react';
import './Home.css';

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
                        <div className="ExtraInfo-Left"> 
                            { todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) } 
                            <p>Spend Today</p>
                        </div>
                        <div className="ExtraInfo-Right">
                            { todayExpenses.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) } 
                            <p>Spend Today</p>
                        </div>
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
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function Chart () {
    const categories = [ 'Comida' , 'Ocio', 'Hogar', 'Servicios', 'Regalos', 'Inversiones']
    const categoriesColors = ['#D72638', '#3F88C5', '#F49D37', '#7FB069', '#2E4057']
    const spends = [115, 52, 451, 1024]
    return (
        <div className="chart">
        <h5>Overview</h5>
            <Doughnut data={
                {
                    labels: categories,
                    datasets: [{
                        data: spends,
                        backgroundColor: categoriesColors
                    }]                   
                }
            } />
        </div>
    )
}

export default Chart;
import React from 'react'

class Product extends React.Component {
    render () {        
        return (
            <div className="Product">
                <h1>{ this.props.name }</h1>
                <div>
                    <p>{ this.props.description }</p>
                    <p 
                        style={ this.props.price === 0 ? { color: 'green' } : { color: 'black' }}
                    > 
                        Price: { this.props.price ? this.props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) : "Free" }
                    </p>
                </div>
                <hr />
            </div>
        )
    }
}

export default Product;
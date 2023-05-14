import React, { Component } from 'react'

export class ProductItem extends Component {
    render() {
        const { title, description, thumbnail, id } = this.props.myProduct
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} {id}</p>
                </div>
            </div>

        )
    }
}

export default ProductItem
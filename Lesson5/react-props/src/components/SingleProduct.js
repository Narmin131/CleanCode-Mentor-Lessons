import React from 'react'

const SingleProduct = (props) => {
    return (
        <>
            <div className="col-lg-3 p-3">
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>

                <h1></h1>
            </div>

        </>
    )
}

export default SingleProduct
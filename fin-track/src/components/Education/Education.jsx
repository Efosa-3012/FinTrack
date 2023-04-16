// A react component that is a card with title, desciption, icon

import React from 'react'
import "./Education.css"

const Card = ({title, description, icon}) => {
    return (
        <div className="card">
            <div className="card__icon">
                <i className={icon}></i>
            </div>
            <div className="card__content">
                <h3 className="card__title">Test card</h3>
                <p className="card__description">Test Description</p>
            </div>
        </div>
    )
}

export default Card

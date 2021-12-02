import React from 'react'
import './Card.css';

const Card: React.FC = (props:any) => {
const {heading} = props;
    return(
        <div className="outer_layout">
            <h1>{heading}</h1>
        </div>
    )
}

export default Card;
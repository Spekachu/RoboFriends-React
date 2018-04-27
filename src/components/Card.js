import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
    return (
        <div className="card-comp tc bg-light-blue dib br3 pa3 ma2-ns mv2 bw2 shadow-5 mw-100">
            <img className="db center" alt="robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <strong className="f5 f4-ns f3-l mv3 db">{name}</strong>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
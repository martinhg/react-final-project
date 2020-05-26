import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="card-container">
            <section className="card-container__logo">
                <img className="card-container__logo--img" src={props.resultado.images[0].url} alt="imagen"/>
            </section>
            <section className="card-container__name">
                <h1>{props.resultado.name}</h1>
            </section>
        </div>
    );
}

export default Card;
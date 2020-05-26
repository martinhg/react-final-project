import React from 'react';
import './Card.scss';
import imagen from '../../assets/user.png';

const Card = (props) => {

    // console.log(props.artist.images);
    // if (props !== 'undefined' && props.resultado.length > 0) {
        // console.log(props.resultado);
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
    // }
    // return (
    //     <div className="card-container">
    //         <section className="card-container__logo">
    //             <img className="card-container__logo--img" src={imagen} alt="imagen"/>
    //         </section>
    //         <section className="card-container__name">
    //             <h1>dsfds</h1>
    //         </section>
    //     </div>
    // );
    
}

export default Card;
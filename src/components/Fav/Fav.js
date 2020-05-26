import React, { useState } from 'react';
import './Fav.scss';

const Fav = (props) => {
    console.log(props.id)
    const [favs, setFavs] = useState([]);
    const [fav, setFav] = useState(false);

    const saveFavourite = (trackId) => {
        if (!fav) {
            setFav(true);
            setFavs([...favs, trackId])
        } else {
            setFav(false);
        }
        localStorage.setItem('favs', JSON.stringify(favs));
    }

    return (
        <div className="fav-container">
            <button onClick={() => saveFavourite(props.id)} className="fav-container__btn">
                { fav ? 
                    ( <i className="fas fa-star"></i> ) : ( <i className="far fa-star"></i> )
                }
            </button>
        </div>
    );
}

export default Fav;
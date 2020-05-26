import React, { useState, useEffect } from 'react';
import './Fav.scss';

const Fav = (props) => {

    const [favs, setFavs] = useState([]);
    const [fav, setFav] = useState(false);

    useEffect( () => {
        return () => {
            console.log('desmontado');
            localStorage.setItem('favs', JSON.stringify(favs));
        }
    }, []);

    const saveFavourite = (trackId) => {
        if (!fav) {
            setFav(true);
            setFavs([...favs, trackId])
        } else {
            setFav(false);
        }
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
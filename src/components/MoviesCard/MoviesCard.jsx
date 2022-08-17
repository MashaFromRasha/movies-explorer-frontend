import React from 'react';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import cardImg from '../../images/BENKSI1.jpg';

function MoviesCard() {
    const [likeBtn, setLikeBtnActive] = useState(false);

    function handleChangeBtn(e) {
        setLikeBtnActive(!likeBtn);
    }

    return (
        <div className="movies-card">
            <div className="movies-card__info">
                <div className="movies-card__description">
                    <h2 className="movies-card__title">В погоне за Бенкси</h2>
                    <Route path='/movies'>
                        <button className={`${ likeBtn 
                        ? 'movies-card__like_active' 
                        : 'movies-card__like_unlike'}`} onClick={handleChangeBtn}></button>
                    </Route>
                    <Route path='/saved-movies'>
                        <button className='movies-card__delete' onClick={handleChangeBtn}></button>
                    </Route>
                </div>
                <p className="movies-card__duration">1ч42м</p>
            </div>
            <img className='movies-card__image' src={cardImg} alt='Фото-фрагмент фильма' />
        </div>
    )
}

export default MoviesCard;
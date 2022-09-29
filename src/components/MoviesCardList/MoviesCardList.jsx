import React from 'react';
import { Route } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList() {
    return (
        <section className="cards">
            <div className="cards__movies">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <Route path="/movies">
                <div className="cards__mov">
                    <button className="cards__button">Еще</button>
                </div>
            </Route>
        </section>
    )
}

export default MoviesCardList;
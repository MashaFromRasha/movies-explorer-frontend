import React from "react";
import { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { mainApiUrl } from "../../utils/config.js";
import { MovieContext } from '../../contexts/movie-context';

function MoviesCard({ movie, handleClickLike }) {
  const { moviesState } = useContext(MovieContext);
  const durationHours = Math.floor(movie.duration / 60);
  const durationMinutes = movie.duration % 60;
  const likeBtn = moviesState.savedMovies.some(
    (item) => item.movieId === movie.id
  );

  const image = movie.image.url
    ? `${mainApiUrl + movie.image.url}`
    : movie.image;

  function onClickLike() {
    handleClickLike(movie);
  }

  useEffect(() => {}, [moviesState.savedMovies.length]);

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <Route path="/movies">
            <button
              className={`${
                likeBtn
                  ? "movies-card__like_active"
                  : "movies-card__like_unlike"
              }`}
              onClick={onClickLike}
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              className="movies-card__delete"
              onClick={onClickLike}
            ></button>
          </Route>
        </div>
        <p className="movies-card__duration">{`${
          durationHours + "ч"
        } ${durationMinutes} м`}</p>
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={image} alt={movie.nameRU} />
      </a>
    </div>
  );
}

export default MoviesCard;

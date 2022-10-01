import React from "react";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import Preloader from "../Preloader/PreLoader.jsx";
import { changeWidth } from "../../utils/config.js";

function MoviesCardList({
  movies,
  handleClickLike,
  request = false,
  notFound,
}) {
  const { _initCount, _count } = changeWidth(window.innerWidth);

  const [count, setCount] = useState(_count);
  const [initCount, seInitCount] = useState(_initCount);
  const [totalCount, setTotalCount] = useState(initCount);

  function handleClickMore() {
    setTotalCount(totalCount + count);
  }

  function changeAfterResize() {
    const update = changeWidth(window.innerWidth);
    setCount(update._count);
    seInitCount(update._initCount);
    return window.innerWidth;
  }

  useEffect(() => {
    changeAfterResize();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", changeAfterResize);
    }, 100);
    return () => window.removeEventListener("resize", changeAfterResize);
  }, []);

  return (
    <section className="cards">
      {request ? (
        <Preloader />
      ) : (
        <>
          <div className="cards__movies">
            {notFound && movies.length === 0 && "Ничего не найдено"}
            {movies.slice(0, totalCount).map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                handleClickLike={handleClickLike}
              />
            ))}
          </div>
          <Route path="/movies">
            <div className="cards__mov">
              {movies.length > totalCount && (
                <button className="cards__button" onClick={handleClickMore}>
                  Еще
                </button>
              )}
            </div>
          </Route>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;

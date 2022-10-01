import React from "react";
import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";
import searchImg from "../../images/search.svg";

function SearchForm({
  onChange,
  onSubmit,
  searchText,
  toggleCheckbox,
  checkbox,
}) {
  return (
    <section className="search-form">
      <div className="search-form__info">
        <form className="search-form__form" onSubmit={onSubmit}>
          <img className="search-form__img" src={searchImg} alt="поиск" />
          <input
            type="text"
            placeholder="Фильм"
            onChange={onChange}
            value={searchText}
            className="search-form__input"
            required
          ></input>
          <button className="search-form__button" type="submit"></button>
        </form>
        <FilterCheckbox toggleCheckbox={toggleCheckbox} checkbox={checkbox} />
      </div>
    </section>
  );
}

export default SearchForm;

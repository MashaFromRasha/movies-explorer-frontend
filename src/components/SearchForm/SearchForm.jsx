import React from "react";
import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";

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
          <input
            type="text"
            placeholder="Фильм"
            onChange={onChange}
            value={searchText}
            className="search-form__input"
            required
          ></input>
          <button className="search-form__button" type="submit">Найти</button>
        </form>
        <FilterCheckbox toggleCheckbox={toggleCheckbox} checkbox={checkbox} />
      </div>
    </section>
  );
}

export default SearchForm;

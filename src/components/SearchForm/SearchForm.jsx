import React from 'react';
import FilterCheckbox from '../FilterCheckBox/FilterCheckBox';
import searchImg from '../../images/search.svg';

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__info">
                <form className="search-form__form">
                    <input
                    name='movie'
                    id='movie'
                    type='text'
                    placeholder='Фильм'
                    className="search-form__input"
                    required
                    >
                    </input>
                    <button className="search-form__button" type="submit">Найти</button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}

export default SearchForm;
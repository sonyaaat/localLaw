"use client";
import { useState } from "react";
import css from "./Search.module.css";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("all");
  const handleClearClick = () => {
    setSearchText("");
  };
  const handleSearchChange = (event) => {
    setSelectedSearch(event.target.value);
  };

  return (
    <div>
      <form className={css.form}>
        <div className={css.formTop}>
          <div className={css.inputWrapper}>
            <svg className={css.searchSvg}>
              <use href={`/sprite.svg#icon-search`}></use>
            </svg>
            <input
              placeholder="Пошук"
              className={css.input}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button className={css.clearButton} onClick={handleClearClick}>
                <svg className={css.clearSvg}>
                  <use href={`/sprite.svg#icon-clear`}></use>
                </svg>
              </button>
            )}
            <button className={`${css.button} ${css.submitButton}`}>
              Знайти
            </button>
          </div>

          <button className={`${css.button} ${css.fullSearchButton}`}>
            Розширений пошук
          </button>
        </div>
        <div>
          <label className={css.label}>
            <input
              type="radio"
              name="search"
              value="inName"
              className={css.radioButton}
              checked={selectedSearch === "inName"}
              onChange={handleSearchChange}
            />
            В назві
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="search"
              value="inText"
              className={css.radioButton}
              checked={selectedSearch === 'inText'}
              onChange={handleSearchChange}
            />
            В тексті
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="search"
              value="all"
              className={css.radioButton}
              checked={selectedSearch === 'all'}
              onChange={handleSearchChange}
            />
            Всюди
          </label>
        </div>
      </form>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import css from "./Search.module.css";
import RadioButton from "../RadioButton/RadioButton";

export default function Search({ setSearchParams, setSearchWord }) {
  const [searchText, setSearchText] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");
  const handleClearClick = () => {
    setSearchText("");
  };
  const handleSearchChange = (event) => {
    setSelectedSearch(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault()
    setSearchParams(selectedSearch);
    setSearchWord(searchText);
  };
  useEffect(() => {
    setSelectedSearch("all");
  }, []);

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.formTop}>
        <div className={css.inputWrapper}>
          <svg className={css.searchSvg}>
            <use href={`/sprite.svg#icon-search`}></use>
          </svg>
          <input
            required
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
          <button className={`${css.button} ${css.submitButton}`} type="submit">
            Знайти
          </button>
        </div>

        <button className={`${css.button} ${css.fullSearchButton}`}>
          Розширений пошук
        </button>
      </div>
      <div className={css.radioButtons}>
        <RadioButton
          value="inName"
          checked={selectedSearch === "inName"}
          label="В назві"
          onChange={handleSearchChange}
          name={"search"}
        />
        <RadioButton
          value="inText"
          checked={selectedSearch === "inText"}
          label="В тексті"
          onChange={handleSearchChange}
          name={"search"}
        />
        <RadioButton
          value="all"
          checked={selectedSearch === "all"}
          label="В назві"
          onChange={handleSearchChange}
          name={"search"}
        />
      </div>
      <div></div>
    </form>
  );
}

"use client";
import data from "../../public/data.json";
import { useState } from "react";

import Search from "../Search/Search";
import css from "./MainPage.module.css";

import PaginatedItems from "../Pagination/Pagination";
import ModalNav from "../ModalNav/ModalNav";

export default function MainPage() {
  const [searchWord, setSearchWord] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const filterFunction = () => {
    if (!searchWord) {
      return data;
    }
  };
  return (
    <div className="container">
      {/* <ModalNav /> */}
      <Search setSearchWord={setSearchWord} setSearchParams={setSearchParams} />
      <div className={css.top}>
        <h2 className={css.header}>Останні новини</h2>
        {!isMenuOpen && (
          <button className={css.openMenuBtn} onClick={changeMenu}>
            <svg className={css.openSvg}>
              <use href={`/sprite.svg#icon-left`}></use>
            </svg>
          </button>
        )}
      </div>

      {data && (
        <div className={isMenuOpen ? `${css.mainWrapper}` : ""}>
          <PaginatedItems itemsPerPage={10} items={filterFunction()} />
          {isMenuOpen && <ModalNav changeMenu={changeMenu} />}
        </div>
      )}

    </div>
  );
}

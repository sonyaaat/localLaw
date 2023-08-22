"use client";
import data from "../../public/data.json";
import { useState } from "react";

import Search from "../Search/Search";
import css from "./MainPage.module.css";
import PaginatedItems from "../Pagination/Pagination";
export default function MainPage() {
  const [searchWord, setSearchWord] = useState("");
  const [searchParams, setSearchParams] = useState("");

  const filterFunction = () => {
    if (!searchWord) {
      return data;
    }
  };
  return (
    <div className="container">
      <div className={css.top}>
        <h2 className={css.header}>Останні новини</h2>
        <button className={css.openMenuBtn}>
          <svg className={css.openSvg}>
            <use href={`/sprite.svg#icon-left`}></use>
          </svg>
        </button>
      </div>
      {data && (
        <>
          <Search
            setSearchWord={setSearchWord}
            setSearchParams={setSearchParams}
          />
          <PaginatedItems itemsPerPage={10} items={filterFunction()} />
        </>
      )}
    </div>
  );
}

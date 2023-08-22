"use client";
import { useState } from "react";
import List from "../List/List";
import Search from "../Search/Search";
import css from "./MainPage.module.css"
export default function MainPage() {
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
      <Search/>
      <List />
    </div>
  );
}

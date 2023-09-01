"use client";
import data from "../../public/data.json";
import { useState } from "react";

import Search from "../Search/Search";
import css from "./MainPage.module.css";

import Pagination from "../Pagination/Pagination";
import ModalNav from "../ModalNav/ModalNav";
import { useEffect } from "react";
import List from "../List/List";
import Loader from "../Loader/Loader";

export default function MainPage() {
  const [searchWord, setSearchWord] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [actualData,setActualData]=useState()

  const changeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    localStorage.setItem("searchResNumber", "");
  }, []);
  useEffect(()=>{
setActualData(data)
  },[data])

  return (
    <div className="container">
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

      {actualData && (
        <div className={isMenuOpen ? `${css.mainWrapper}` : ""}>
          <Pagination
            itemsPerPage={10}
            items={actualData}
            list={<List />}
            isMenuOpen={isMenuOpen}
          />
          {isMenuOpen && <ModalNav changeMenu={changeMenu} toTop={true} />}
        </div>
      )}
       {!actualData && <Loader />}
    </div>
  );
}

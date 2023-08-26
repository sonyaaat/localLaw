"use client";
import css from "../../components/MainPage/MainPage.module.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import data from "../../public/data.json";
import SearchResults from "@/components/SearchResults/SearchResults";
import SearchList from "@/components/SearchList/SearchList";
import ModalNav from "@/components/ModalNav/ModalNav";
import PaginatedItems from "@/components/Pagination/Pagination";
export default function SearchPage() {
  const changeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filterFunction = () => {
    return data;
  };
  const searchParams = useSearchParams();
  const searchText = searchParams.get("text");
  const searchField = searchParams.get("params");
  console.log("searchText", searchText);
  console.log("searchField", searchField);
  return (
    <div className="container">
      {!isMenuOpen && (
        <button
          className={`${css.openMenuBtn} ${css.openMenuBtnAbsolute}`}
          onClick={changeMenu}
        >
          <svg className={css.openSvg}>
            <use href={`/sprite.svg#icon-left`}></use>
          </svg>
        </button>
      )}
    

      {data && (
        <div className={isMenuOpen ? `${css.mainWrapper} ` : ""}>
         <div className={css.mainWrapperBorder}>
         <SearchResults searchField={searchField} searchText={searchText} />
          <PaginatedItems
          isMenuOpen={isMenuOpen}
            itemsPerPage={10}
            items={filterFunction()}
            list={<SearchList searchField={searchField} searchText={searchText} />}
          />
            </div>
          {isMenuOpen && <ModalNav changeMenu={changeMenu} />}
        </div>
      )}
    </div>
  );
}

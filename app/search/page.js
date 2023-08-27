"use client";
import css from "../../components/MainPage/MainPage.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [filterOption, setFilterOption] = useState("dateIncrease");
  const searchParams = useSearchParams();
  const searchText = searchParams.get("text");
  const searchField = searchParams.get("params");
  const [resData, setResData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    console.log("filterOption", filterOption);
  }, [filterOption]);

  useEffect(() => {
    console.log("searchField", searchField);
  }, [searchField]);

  useEffect(() => {
    const filterFunc = () => {
      if (filterOption === "inAlphabet") {
        console.log(1);
        const sorted = [...filteredData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setResData(sorted);
      } else if (filterOption === "notAlphabet") {
        console.log(2);
        const inReversedOrder = [...filteredData].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        setResData(inReversedOrder);
      } else if (filterOption === "dateIncrease") {
        console.log(3);
        const inAscending = [...filteredData].sort(
          (a, b) => new Date(a.acceptDate) - new Date(b.acceptDate)
        );
        console.log("dateIncrease", inAscending);
        setResData(inAscending);
      } else if (filterOption === "dateDecreasing") {
        console.log(4);
        const inDecreasing = [...filteredData].sort(
          (a, b) => new Date(b.acceptDate) - new Date(a.acceptDate)
        );
        console.log("inDecreasing", inDecreasing);
        setResData(inDecreasing);
      }
    };
    filterFunc();
  }, [filterOption, filteredData]);
  useEffect(() => {
    console.log("resData", resData);
  }, [resData]);
  useEffect(() => {
    if (searchField === "inName") {
      const filter = data.filter((el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filter);
    }
    if (searchField === "inText") {
      const filter = data.filter((el) =>
        el.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filter);
    }
    if (searchField === "all") {
      console.log("all");
      const filter = data.filter(
        (el) =>
          el.name.toLowerCase().includes(searchText.toLowerCase()) ||
          el.text.includes(searchText)
      );
      setFilteredData(filter);
    }
  }, [searchText, searchField]);
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

      {resData && (
        <div className={isMenuOpen ? `${css.mainWrapper} ` : ""}>
          <div className={css.mainWrapperBorder}>
            <SearchResults
              setFilterOption={setFilterOption}
              searchField={searchField}
              searchText={searchText}
              searchLenght={resData.length}
            />
            <PaginatedItems
              isMenuOpen={isMenuOpen}
              itemsPerPage={10}
              items={resData}
              filterOption={filterOption}
              list={
                <SearchList searchField={searchField} searchText={searchText} />
              }
            />
          </div>
          {isMenuOpen && <ModalNav changeMenu={changeMenu} />}
        </div>
      )}
    </div>
  );
}

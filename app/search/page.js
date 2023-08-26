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
  const [resData, setResData] = useState(data);
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  const filter=()=>{
    if (filterOption === "inAlphabet") {
      const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      console.log("inAlphabetOrder",sorted)
      setResData(sorted);
    }
    else if(filterOption==="notAlphabet"){
      const inReversedOrder = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setResData(inReversedOrder);
    }
    else{
      setResData(data);
    }
  }
  // useEffect(() => {
  //   if (filterOption === "inAlphabet") {
  //     const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
  //     console.log("inAlphabetOrder",sorted)
  //     setResData(sorted);
  //   }
  //   else if(filterOption==="notAlphabet"){
  //     const inReversedOrder = [...data].sort((a, b) => b.name.localeCompare(a.name));
  //     setResData(inReversedOrder);
  //   }
  //   else{
  //     setResData(data);
  //   }
  // }, [data, filterOption]);

  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    console.log("filterOption", filterOption);
  }, [filterOption]);
  useEffect(() => {
    console.log("filter")
    if (searchField === "inName") {
      console.log(2);
      const filter = data.filter((el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filter);
    }
    if (searchField === "inText") {
      console.log(3);
      const filter = data.filter((el) =>
        el.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filter);
    }
    if (searchField === "all") {
      console.log(4);
      const filter = data.filter(
        (el) =>
          el.name.toLowerCase().includes(searchText.toLowerCase()) ||
          el.text.includes(searchText)
      );
      setFilteredData(filter);
    }
    filter()
  }, [searchText, searchField,filterOption]);
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
              searchLenght={filteredData.length}
            />
            <PaginatedItems
            
              isMenuOpen={isMenuOpen}
              itemsPerPage={10}
              items={resData}
              list={
                <SearchList searchField={searchField} searchText={searchText} filterOption={filterOption} />
              }
            />
          </div>
          {isMenuOpen && <ModalNav changeMenu={changeMenu} />}
        </div>
      )}
    </div>
  );
}

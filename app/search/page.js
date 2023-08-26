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
  
  const searchParams = useSearchParams();
  const searchText = searchParams.get("text");
  const searchField = searchParams.get("params");
  console.log("searchText", searchText);
  console.log("searchField", searchField);
  const [filteredData,setFilteredData]=useState(data)
  const sort=  data.filter((el)=>el.name.includes("Про"))
  console.log(sort)
  useEffect(()=>{
    
    console.log("AAA")
      if(searchField==="inName"){
        console.log(2)
         const filter=data.filter((el)=>el.name.toLowerCase().includes(searchText.toLowerCase()))
         setFilteredData(filter)
      }
      if(searchField==="inText"){
        console.log(3)
        const filter=data.filter((el)=>el.text.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredData(filter)
      }
      if(searchField==="all"){
        console.log(4)
        const filter= data.filter((el)=>(el.name.toLowerCase().includes(searchText.toLowerCase())|| el.text.includes(searchText)))
        setFilteredData(filter)
      }
    
  },[searchText,searchField])
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
         <SearchResults searchField={searchField} searchText={searchText} searchLenght={filteredData.length} />
          <PaginatedItems
          isMenuOpen={isMenuOpen}
            itemsPerPage={10}
            items={filteredData}
            list={<SearchList searchField={searchField} searchText={searchText}  />}
          />
            </div>
          {isMenuOpen && <ModalNav changeMenu={changeMenu} />}
        </div>
      )}
    </div>
  );
}

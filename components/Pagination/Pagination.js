"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import List from "../List/List";
import css from "./Pagination.module.css";

export default function PaginatedItems({ itemsPerPage, items }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber,setPageNumber]=useState((itemOffset)/itemsPerPage)
  useEffect(()=>{
console.log(itemOffset)
setPageNumber((itemOffset)/itemsPerPage)
  },[itemOffset]
  )
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div >
      <List data={currentItems} pageNumber={pageNumber}/>
      <ReactPaginate
        onPageChange={handlePageClick}
        nextLabel={
          <svg className={css.nextSvg}>
            <use href={`/sprite.svg#icon-right`}></use>
          </svg>
        }
        previousLabel={
          <svg className={css.prevSvg}>
            <use href={`/sprite.svg#icon-left`}></use>
          </svg>
        }
        previousClassName={""}
        nextClassName="page-item"
        activeClassName={`${css.itemPagination} ${css.activeItemPag} `}
        breakClassName={`${css.breakPagination}`}
        breakLabel={"..."}
        containerClassName={css.pagination}
        disabledClassName={"disabled-page"}
        pageCount={pageCount}
        pageClassName={css.itemPagination}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
      />
    </div>
  );
}

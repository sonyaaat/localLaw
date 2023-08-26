import css from "../Item/Item.module.css";
import React from "react";
export default function SearchItem({ data, searchText, searchField,pageNumber ,index}) {
  function getHighlightedText(text, higlight = searchText) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b className={css.activeText}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }
  return (
    <li>
      <a className={css.item} href="#">
        <div className={css.circle}> {index+(pageNumber*10)}</div>
        <div className={css.wrapper}>
          {(searchField === "inName" || searchField === "all") && (
            <h3 className={css.title}>{getHighlightedText(data.name)}</h3>
          )}
          {searchField === "inText" && (
            <h3 className={css.title}>{data.name}</h3>
          )}
          {(searchField === "inText" || searchField === "all") && (
            <p className={css.title}>{getHighlightedText(data.text)}</p>
          )}

          <p className={css.text}>
            <span className={css.textBold}>{data.publisher}</span> №{" "}
            {data.number}/ Редакція від {data.revisionDate} (усього редакцій -{" "}
            {data.revisionNumber ? data.revisionNumber : 1})
          </p>
        </div>

        <div className={`${css.circle} ${css.download}`}>
          <svg className={`${css.downloadGrey}`}>
            <use href={`/sprite.svg#icon-file-download`}></use>
          </svg>
          <span className={css.fileSize}>2MB</span>
        </div>
      </a>
    </li>
  );
}

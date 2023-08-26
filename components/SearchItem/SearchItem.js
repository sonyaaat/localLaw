import css from "../Item/Item.module.css";
import React from "react";
export default function SearchItem({ data ,searchText,searchField}) {
  function getHighlightedText(text, higlight=searchText) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }
  return (
    <li>
      <a className={css.item} href="#">
        <div className={css.circle}> 1</div>
        <div className={css.wrapper}>
            {(searchField==="inName" ||searchField==="all" )&&  <h3 className={css.title}>{getHighlightedText(data.name)}</h3>}
            { searchField==="inText" && <h3 className={css.title}>{data.name}</h3>}
            { (searchField==="inText" ||searchField==="all") && <p className={css.title}>{getHighlightedText(data.text)}</p>}
         
          <p className={css.text}>
            <span className={css.textBold}>{data.publisher}</span> №{" "}
            {data.number}/ Редакція від {data.revisionDate} (усього редакцій -{" "}
            {data.revisionNumber ? data.revisionNumber : 1})
          </p>
        </div>
      </a>
    </li>
  );
}

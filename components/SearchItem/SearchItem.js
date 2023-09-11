import Link from "next/link";
import css from "../Item/Item.module.css";
import React from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function SearchItem({
  data,
  searchText,
  searchField,
  pageNumber,
  index,
}) {
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
  function getThreeSentences(text, higlight = searchText) {
    const sentences = text.split(/[.!?]/);
    const searchTextIndex = sentences.findIndex((sentence) =>
      sentence.toLowerCase().includes(higlight.toLowerCase())
    );

    if (searchTextIndex === -1) {
      return text; // Якщо слово searchText не знайдено, повертаємо весь текст
    }

    const start = Math.max(0, searchTextIndex - 3); // Початковий індекс для витягнення трьох речень до
    const end = Math.min(sentences.length, searchTextIndex + 4); // Кінцевий індекс для витягнення трьох речень після

    return sentences.slice(start, end).join(". ") + "."; // Об'єднуємо речення та додаємо крапку в кінці
  }
  const  notify = () => {
    Notify.warning("Даний функціонал знаходиться у ");
  }; 
  return (
    <li className={css.item}>
      <Link className={css.link} href={"/[docId]"} as={`/${data.id}`}>
        <div className={css.circle}> {index + pageNumber * 10}</div>
        <div className={css.wrapper}>
          {(searchField === "inName" || searchField === "all") && (
            <h3 className={css.title}>
              {getHighlightedText(data.name)} 
            </h3>
          )}
          {searchField === "inText" && (
            <h3 className={css.title}>
              {data.name} 
            </h3>
          )}
          {(searchField === "inText" || searchField === "all") && (
            // <p className={css.title}>{getHighlightedText(data.text)} </p>
            <p className={css.title}>
              {getHighlightedText(getThreeSentences(data.text))}
            </p>
          )}

          <p className={css.text}>
            <span className={css.textBold}>{data.publisher}</span> №{" "}
            {data.number}/ Редакція від {data.revisionDate} (усього редакцій -{" "}
            {data.revisionNumber ? data.revisionNumber : 1}) / Постанова від {data.acceptDate}
          </p>
        </div>
       
      </Link>
      <a href={data.file} download={data.file} className={`${css.circle} ${css.download}`} >
          <svg className={`${css.downloadGrey}`}>
            <use href={`/sprite.svg#icon-file-download`}></use>
          </svg>
          <span className={css.fileSize}>2MB</span>
        </a>
    </li>
  );
}

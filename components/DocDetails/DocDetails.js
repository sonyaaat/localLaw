"use client"
import React, { useState } from "react";
import css from "./DocDetails.module.css";
import ModalNav from "../ModalNav/ModalNav";
import DetailsNav from "../DetailsNav/DetailsNav";
export default function DocDetails({ document }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeMenu = () => {
        setIsMenuOpen((prev) => !prev);
      };
  function formatContentWithLineBreaks(content) {
    const lines = content.split("\n");
    const formattedLines = lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ));
    return formattedLines;
  }
  const formattedContent = formatContentWithLineBreaks(document.text);
  return (
    <div className={isMenuOpen && `${css.backgroundModalOpen}`}>
      <div className={css.headerWrapper}>
        <h1 className={css.header}>{document.name}</h1>
      </div>
      <div className={css.topWrapper}>
        <p className={css.topTitle}>
          Указ № {document.number}, поточна редакція — Прийняття від{" "}
          {document.acceptDate}, набрання чинності, відбулась{" "}
          {document.effectiveDate}
        </p>
      </div>
      {formattedContent && (
        <div className={`container ${css.container}`}>
          <div className={css.mainWrapper}>
            <h2 className={css.title}>
              Указ <br /> {document.publisher} <br /> {document.name}
            </h2>
            <p className={css.mainText}>{formattedContent}</p>
            <p className={css.publisherContent}> {document.publisher}</p>
            <div className={css.bottomContent}>
              <p> {document.acceptDate}</p>
              <p> № {document.number}</p>
            </div>
          </div>
          {!isMenuOpen && (
          <button className={css.openMenuBtn} onClick={changeMenu}>
            <svg className={css.openSvg}>
              <use href={`/sprite.svg#icon-left`}></use>
            </svg>
          </button>
        )}
        {isMenuOpen && <DetailsNav changeMenu={changeMenu}/>}
        </div>
      )}
    </div>
  );
}

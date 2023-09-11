"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import css from "./DocDetails.module.css";
import DetailsNav from "../DetailsNav/DetailsNav";

const PDFViewer = dynamic(() => import("../PdfViewer/pdf-viewer"), {
  ssr: false
});
export default function DocDetails({ document}) {
  useEffect(()=>{
console.log("document",document.id,document.file)
  },[document])
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
  function transformDate(dateString) {
    const months = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ];

    const [year, month, day] = dateString.split("-").map(Number);

    const transformedDate = `${day} ${months[month - 1]} ${year} року`;

    return transformedDate;
  }
  const transformedDate = transformDate(document.acceptDate);
  // return (
  //   <div className={isMenuOpen ? `${css.backgroundModalOpen}` : undefined}>
  //     {/* <HeaderBox docName={document.name}/> */}
  //     {/* <div className={css.headerWrapper}>
  //       <h1 className={css.header}>{document.name}</h1>
  //     </div> */}
  //     <div className={css.topWrapper}>
  //       <p className={css.topTitle}>
  //         Указ № {document.number}, поточна редакція — Прийняття від{" "}
  //         {document.acceptDate}, набрання чинності, відбулась{" "}
  //         {document.effectiveDate}
  //       </p>
  //     </div>
  //     {formattedContent && transformedDate && (
  //       <div className={`container ${css.container}`}>
  //         <div className={css.mainWrapper}>
  //           <h2 className={css.title}>
  //             {document.documentType} <br /> {document.publisher} <br />{" "}
  //             {document.name}
  //           </h2>
  //           <p className={css.mainText}>{formattedContent}</p>
  //           <p className={css.publisherContent}> {document.publisher}</p>
  //           <div className={css.bottomContent}>
  //             <p> {transformedDate}</p>
  //             <p> № {document.number}</p>
  //           </div>
  //         </div>
  //         {!isMenuOpen && (
  //           <button className={css.openMenuBtn} onClick={changeMenu}>
  //             <svg className={css.openSvg}>
  //               <use href={`/sprite.svg#icon-left`}></use>
  //             </svg>
  //           </button>
  //         )}
  //         {isMenuOpen && <DetailsNav changeMenu={changeMenu} />}
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className={isMenuOpen ? `${css.backgroundModalOpen}` : undefined}>
     
     
      {formattedContent && transformedDate && (
        <div className={`container ${css.container}`}>
         <PDFViewer className={css.centered} docFile={document.file}/>
          {!isMenuOpen && (
            <button className={css.openMenuBtn} onClick={changeMenu}>
              <svg className={css.openSvg}>
                <use href={`/sprite.svg#icon-left`}></use>
              </svg>
            </button>
          )}
          {isMenuOpen && <DetailsNav changeMenu={changeMenu} />}
        </div>
      )}
    </div>
  );
}

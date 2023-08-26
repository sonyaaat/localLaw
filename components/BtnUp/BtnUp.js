"use client";
import css from "../BtnUp/BtnUp.module.css";
import { useState, useEffect, useRef } from "react";

export default function BtnUp() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  const [visibility, setVisibility] = useState(false);
  const scrollTop = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 600
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });

  return (
    <>
      <div>
        <button
          className={css.BtnUp}
          onClick={() =>
            setPosition({ ...position, position: { top: 0, left: 0 } })
          }
          ref={scrollTop}
        >
          <svg className={css.BtnUpSvg}>
            <use href={`/sprite.svg#icon-up1`}></use>
          </svg>
        </button>
      </div>
    </>
  );
}

import css from "./DetailsNav.module.css";
export default function DetailsNav({changeMenu}) {
  return (
  <>
   <div className={css.backdrop}>
   </div>
    <div className={css.mainContainer}>
      <button className={css.crossButton} onClick={changeMenu}>
        <svg className={css.svgCross}>
          <use href={`/sprite.svg#icon-close`}></use>
        </svg>
      </button>
    
   </div>
  </>
  );
}

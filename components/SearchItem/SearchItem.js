import css from "../Item/Item.module.css"
export default function SearchItem({data}){
    return(
        <>
         <li >
     <a className={css.item} href="#">
     <div className={css.circle}> 1</div>
      <div className={css.wrapper}>
        <h3 className={css.title}>{data.name}</h3>
        <p className={css.text}>
          <span className={css.textAccent}>{data.publisher}</span>; Постанова від {data.acceptDate} №{" "}
          {data.number}
        </p>
      </div>
      <div className={`${css.circle} ${css.download}`}>
        <svg className={css.downloadSvg}>
          <use href={`/sprite.svg#icon-download`}></use>
        </svg>
      </div>
     </a>
    </li>
        </>
    )
}
import css from "./DocDetails.module.css"
export default function DocDetails({document}){
    return(
       <>
       <div className={css.headerWrapper}>
        <h1 className={css.header}>{document.name}</h1>
       </div>
       <div className={css.topWrapper}>
        <p className={css.topTitle}>Указ № 875/2022, поточна редакція — Прийняття від 23.12.2022, набрання чинності, відбулась 27.12.2022</p>
       </div>
        <div className="container">
        {document.name}
        </div>
       </>

    )
}
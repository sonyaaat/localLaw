import Image from "next/image";
import css from "../Header/Header.module.css";

export default function HeaderBox({ text = "", searchRes, docName }) {
  return (
    <div className={css.baner}>
      {!docName && (
        <Image
          src="/Map.svg"
          alt="map"
          width="459"
          height="283"
          className={css.baner__map}
        />
      )}
      <div className={css.baner__changed}>
        {text && <Image src="/Gerb.svg" alt="gerb" width="68" height="82" />}
        {text && <p className={css.baner__text_main}>{text}</p>}
        {(searchRes === 0 || searchRes) && (
          <h1 className={css.baner__text}>
            Знайдено за результатами пошуку: <br />{" "}
            <span className={css.activeRes}>{searchRes} документів</span>
          </h1>
        )}
      </div>
      {docName && (
        <div className={css.docWrapper}>
          <h1 className={css.docName}>{docName}</h1>
        </div>
      )}
    </div>
  );
}

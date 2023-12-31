import Link from "next/link";
import css from "./Item.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useEffect } from "react";
export default function Item({ data, index, pageNumber }) {
  // const  notify = () => {
  //   Notify.warning("Даний функціонал знаходиться");
  // };
  function downloadFile() {
    window.open(data.file);
  }
  useEffect(() => {
    console.log("data", data.file);
  }, [data]);

  return (
    <li className={css.item}>
      <Link href={"/[docId]"} as={`/${data.id}`} className={css.link}>
        <div className={css.circle}> {index + pageNumber * 10}</div>
        <div className={css.wrapper}>
          <h3 className={css.title}>{data.name}</h3>
          <p className={css.text}>
            <span className={css.textAccent}>{data.publisher}</span>; Рішення
            від {data.acceptDate} № {data.number}
          </p>
        </div>
      </Link>
      {/* <a href={data.file} download={data.file}>Download</a> */}
      <a
        href={data.file}
        download={data.file}
        className={`${css.circle} ${css.download}`}
        onClick={downloadFile}
        id="downloadButton"
      >
        <svg className={css.downloadSvg} id="svg">
          <use href={`/sprite.svg#icon-download`}></use>
        </svg>
      </a>
    </li>
  );
}

import Image from "next/image";
import css from "../Header/Header.module.css";

export default function HeaderBox() {
  return (
    // <div className={css.background__color}>
    <div className={css.baner}>
      <Image src="/Gerb.svg" alt="gerb" width="68" height="82" />
      <p className={css.baner__text}>Харківська обласна рада</p>
    </div>
    // </div>
  );
}

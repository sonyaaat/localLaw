import Image from "next/image";
import css from "../Header/Header.module.css";

export default function HeaderBox() {
  return (
    <div className={css.baner}>
    <Image
      src="/Map.svg"
      alt="map"
      width="459"
      height="283"
      className={css.baner__map}
    />
    <div className={css.baner__changed}>
      <Image src="/Gerb.svg" alt="gerb" width="68" height="82" />
      <p className={css.baner__text}>Харківська обласна рада</p>
    </div>
  </div>
  );
}

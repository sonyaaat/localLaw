"use client";
import Image from "next/image";
import css from "../Header/Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <div className={css.background__color}>
      <header className="container">
        <div className={css.header__container}>
          <div className={css.header__iconspans}>
            <Link className={css.header__linklogo} href="/">
              <Image src="/Logo.svg" alt="logo" width="38" height="38" />
            </Link>
            {/* <div className={css.header_logospans}> */}
            <Link className={css.header__logotext} href="/">
              Dikretum
            </Link>
            {/* <span className={css.header__logotextsecond}>Law</span> */}
            {/* </div> */}
          </div>
          <ul className={css.header__list}>
            <li
              className={
                currentRoute === "/"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
            >
              <Link href="/" className={css.link}>
                Головна
              </Link>
            </li>

            <li
              className={
                currentRoute === "/Documentation"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
            >
              <Link href="/Documentation" className={css.link}>
                Документація
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Search"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
            >
              <Link href="/Search" className={css.link}>
                Пошук
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Rules"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
            >
              <Link href="/Rules" className={css.link}>
                Правила користування
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Contacts"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
            >
              <Link href="/Contacts" className={css.link}>
                Контакти
              </Link>
            </li>
          </ul>
          <div className={css.header__groupLanguage}>
            <svg className={css.header__languageSvg}>
              <use href={`/sprite.svg#icon-language`}></use>
            </svg>
            <p className={css.header__language}>UA</p>
            <button className={css.header__languageBtn}>
              <svg className={css.header__iconDownSvg}>
                <use href={`/sprite.svg#icon-down`}></use>
              </svg>
            </button>
          </div>

          <button className={css.header__btn}>
            <p className={css.header__registr}>Увійти/Зареєструватися</p>
          </button>
        </div>
      </header>
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
    </div>
  );
}

"use client";
import Image from "next/image";
import css from "../Header/Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function Header() {
  const currentRoute = usePathname();
  const notify = () => {
    Notify.warning("Даний функціонал знаходиться у розробці");
  };
  return (
    <div className={css.background__color}>
      <header className="container">
        <div className={css.header__container}>
          <div className={css.header__iconspans}>
            {/* <Link className={css.header__linklogo} href="/">
              <Image src="/Logo.svg" alt="logo" width="38" height="38" />
              <span className={css.header__logotext} href="/">
                DECRETUM
              </span>
            </Link> */}
            {/* <div className={css.header_logospans}> */}
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
              onClick={notify}
            >
              <Link href="#" className={css.link}>
                Документація
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Search"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
              onClick={notify}
            >
              <Link href="#" className={css.link}>
                Пошук
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Rules"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
              onClick={notify}
            >
              <Link href="#" className={css.link}>
                Правила користування
              </Link>
            </li>
            <li
              className={
                currentRoute === "/Contacts"
                  ? `${css.header__item} ${css.activeItem}`
                  : `${css.header__item}`
              }
              onClick={notify}
            >
              <Link href="#" className={css.link}>
                Контакти
              </Link>
            </li>
          </ul>
          <div className={css.header__groupLanguage}>
            <svg className={css.header__languageSvg}>
              <use href={`/sprite.svg#icon-language`}></use>
            </svg>
            <p className={css.header__language}>UA</p>
            <button
              className={css.header__languageBtn}
              type="button"
              onClick={notify}
            >
              <svg className={css.header__iconDownSvg}>
                <use href={`/sprite.svg#icon-down`}></use>
              </svg>
            </button>
          </div>

          <button className={css.header__btn} type="button" onClick={notify}>
            <p className={css.header__registr}>Увійти/Зареєструватися</p>
          </button>
        </div>
      </header>
      {/* <div className={css.baner}>
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
      </div> */}
    </div>
  );
}

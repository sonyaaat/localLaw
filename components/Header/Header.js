import Image from "next/image";
import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <div className={css.header__iconspans}>
          <a className={css.header__linklogo} href="/src/index.html">
            <Image src="/src/images/film.svg" alt="logo" width="38" height="38" />
            <div className={css.header_logospans}>
              <span className={css.header__logotext}>Local</span>
              <span className={css.header__logotextsecond}>Law</span>
            </div>
          </a>
        </div>
        <ul className={css.header__list}>
          <li className={css.header__item}>
            <a href="components/Prime">Головна</a>
          </li>
          <li className={css.header__item}>
            <a href="components/Documentation">Документація</a>
          </li>
          <li className={css.header__item}>
            <a href="components/Search">Пошук</a>
          </li>
          <li className={css.header__item}>
            <a href="components/Rules">Правила користування</a>
          </li>
          <li className={css.header__item}>
            <a href="components/Contacts">Контакти</a>
          </li>
        </ul>
        <p className={css.header__language}>UA</p>
        <button className={css.header__btn}>
          <p className={css.header__registr}>Увійти/Зареєструватися</p>
        </button>
      </div>
    </header>
  );
};

export { Header };

import Link from "next/link";
import css from "./ModalNav.module.css";
import { usePathname } from "next/navigation";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function ModalNav({ changeMenu, toTop = false }) {
  const currentRoute = usePathname();
  const notify = () => {
    Notify.warning("Даний функціонал знаходиться у розробці");
  };

  return (
    <div className={toTop ? `${css.modal} ${css.modalToTop}` : `${css.modal}`}>
      <button onClick={changeMenu} className={css.crossButton}>
        <svg className={css.svgCross}>
          <use href={`/sprite.svg#icon-close`}></use>
        </svg>
      </button>

      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <Link
              href="/"
              className={
                currentRoute === "/"
                  ? `${css.link} ${css.activeLink}`
                  : `${css.link}`
              }
            >
              <svg className={css.svgIcon}>
                <use href={`/sprite.svg#icon-home-02`}></use>
              </svg>
              <span className={css.text}>Головна</span>
            </Link>
          </li>
          <li className={css.item}>
            <Link
              href="#"
              className={
                currentRoute === "/docs"
                  ? `${css.link} ${css.activeLink}`
                  : `${css.link}`
              }
            >
              <svg className={css.svgIcon}>
                <use href={`/sprite.svg#icon-file-06`}></use>
              </svg>
              <span className={css.text}>Документація</span>
            </Link>
          </li>
          <li className={css.item} onClick={notify}>
            <Link
              href="#"
              className={
                currentRoute === "/search"
                  ? `${css.link} ${css.activeLink}`
                  : `${css.link}`
              }
            >
              <svg className={css.svgIcon}>
                <use href={`/sprite.svg#icon-search-md`}></use>
              </svg>
              <span className={css.text}>Пошук</span>
            </Link>
          </li>
          <li className={css.item} onClick={notify}>
            <Link
              href="#"
              className={
                currentRoute === "/rules"
                  ? `${css.link} ${css.activeLink}`
                  : `${css.link}`
              }
            >
              <svg className={css.svgIcon}>
                <use href={`/sprite.svg#icon-book-open-01`}></use>
              </svg>
              <span className={css.text}>Правила використання</span>
            </Link>
          </li>
          <li className={css.item} onClick={notify}>
            <Link
              href="#"
              className={
                currentRoute === "/contacts"
                  ? `${css.link} ${css.activeLink}`
                  : `${css.link}`
              }
            >
              <svg className={css.svgIcon}>
                <use href={`/sprite.svg#icon-user-circle-1`}></use>
              </svg>
              <span className={css.text}>Контакти</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

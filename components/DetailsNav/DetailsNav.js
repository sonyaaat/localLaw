import Link from "next/link";
import css from "./DetailsNav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Notify } from "notiflix/build/notiflix-notify-aio";
export default function DetailsNav({ changeMenu }) {
  const currentRoute = usePathname();

  const notify = () => {
    Notify.warning("Даний функціонал знаходиться у розробці");
  };
  return (
    <>
      <div className={css.backdrop} onClick={changeMenu}></div>
      <div className={css.mainContainer}>
        <button className={css.crossButton} onClick={changeMenu}>
          <svg className={css.svgCross}>
            <use href={`/sprite.svg#icon-close`}></use>
          </svg>
        </button>
        <nav>
          <ul className={css.list}>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-search-md`}></use>
                </svg>
                <span className={css.text}>Пошук по тексту документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-file-download-03`}></use>
                </svg>
                <span className={css.text}>Експорт документу</span>
              </Link>
            </li>
            <li className={css.item}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-file-05`}></use>
                </svg>
                <span className={css.text}>Зміст документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-clipboard`}></use>
                </svg>
                <span className={css.text}>Картка документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-duplexdoc`}></use>
                </svg>
                <span className={css.text}>Звязані документи</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIconSpecial}>
                  <use href={`/sprite.svg#icon-history-7611-1`}></use>
                </svg>
                <span className={css.text}>Історія</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-file-04`}></use>
                </svg>
                <span className={css.text}>Порівняти версії документів</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-pencil-02`}></use>
                </svg>
                <span className={css.text}>Показати зміни</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-type-01`}></use>
                </svg>
                <span className={css.text}>Змінити шрифт</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIconSpecial}>
                  <use href={`/sprite.svg#icon-sr-printer`}></use>
                </svg>
                <span className={css.text}>Друк</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIconSpecial}>
                  <use href={`/sprite.svg#Download1`}></use>
                </svg>
                <span className={css.text}>
                  Завантажити нову редакцію документу
                </span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-clock`}></use>
                </svg>
                <span className={css.text}>Набуття чинності</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-slash-circle-01`}></use>
                </svg>
                <span className={css.text}>Припинення чинності</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

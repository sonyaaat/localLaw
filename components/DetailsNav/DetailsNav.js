import Link from "next/link";
import css from "./DetailsNav.module.css";
import { usePathname } from "next/navigation";
import { Notify } from "notiflix/build/notiflix-notify-aio";
export default function DetailsNav({ changeMenu }) {
  const currentRoute = usePathname();

  const notify = () => {
    Notify.warning("Даний функціонал находиться у розробці");
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
                  <use href={`/sprite.svg#icon-home1`}></use>
                </svg>
                <span className={css.text}>Пошук по тексту документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-docs1`}></use>
                </svg>
                <span className={css.text}>Експорт документу</span>
              </Link>
            </li>
            <li className={css.item}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-search2`}></use>
                </svg>
                <span className={css.text}>Зміст документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-rules1`}></use>
                </svg>
                <span className={css.text}>Картка документу</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Звязані документи</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Історія</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Порівняти версії документів</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Показати зміни</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Змінити шрифт</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Друк</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>
                  Завантажити нову редакцію документу
                </span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
                </svg>
                <span className={css.text}>Набуття чинності</span>
              </Link>
            </li>
            <li className={css.item} onClick={notify}>
              <Link href="#" className={css.link}>
                <svg className={css.svgIcon}>
                  <use href={`/sprite.svg#icon-profile1`}></use>
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

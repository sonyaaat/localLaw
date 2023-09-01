import Link from "next/link";
import SearchItem from "../SearchItem/SearchItem";
import css from "./SearchList.module.css";
import Loader from "../Loader/Loader";
export default function SearchList({
  data,
  searchField,
  searchText,
  pageNumber,
}) {
 
  return (
    <>
      {data ?
        (data.length === 0 ? (
          <div className={css.notFoundWrapper}>
            <p className={css.notFoundText}>Документів не знайдено</p>
            <Link className={css.notFoundLink} href={"/"}>
              Назад на головну сторінку
            </Link>
          </div>
        ) : (
          <ul className={css.list}>
            {data.map((el, index) => (
              <ul key={el.id}>
                <SearchItem
                  index={index + 1}
                  data={el}
                  pageNumber={pageNumber}
                  searchText={searchText}
                  searchField={searchField}
                />
              </ul>
            ))}
          </ul>
        )):<Loader/>}
    </>
  );
}

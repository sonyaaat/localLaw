import SearchItem from "../SearchItem/SearchItem";
import css from "./SearchList.module.css"
export default function SearchList({data}) {
  return (
   <>
   {data &&  <ul className={css.list}>
      {data.map((el) => (
        <ul key={el.id}>
          <SearchItem data={el}/>
        </ul>
      ))}
    </ul>}
    </>
  );
}

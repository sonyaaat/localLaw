import Item from "../Item/Item";
import css from "./List.module.css";
export default function List({ data, pageNumber }) {
  return (
    <>
      {data && (
        <ul className={css.list}>
          {data.map((el, index) => (
            <ul key={el.id}>
              <Item data={el} index={index + 1} pageNumber={pageNumber} />
            </ul>
          ))}
        </ul>
      )}
    </>
  );
}

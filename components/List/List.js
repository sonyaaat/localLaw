import data from "../../public/data.json";
import Item from "../Item/Item";
import css from "./List.module.css"
export default function List() {
  return (
    <ul className={css.list}>
      {data.map((el) => (
        <ul key={el.id}>
          <Item data={el}/>
        </ul>
      ))}
    </ul>
  );
}

import { useState, useEffect } from "react";
import css from "./SearchResults.module.css";
const data = [
  { id: 0, label: "За датою прийняття1" },
  { id: 1, label: "За датою прийняття2" },
  { id: 2, label: "За назвою1" },
  { id: 3, label: "За назвою2" },
];
export default function SearchResults({ searchField, searchText }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState("0");
  const searchWhere = (searchField) => {
    if (searchField === "all") {
      return "Cлова всюди";
    } else if (searchField === "inText") {
      return "Cлова в тексті";
    } else if (searchField === "inName") {
      return "Cлова в назві";
    }
  };

  const toggleDropdown = () => setOpen(!isOpen);
  const findItem = (id) => {
    return items.find((item) => item.id == id);
  };
  const handleItemClick = (id) => {
    setSelectedItem(id);
  };
  return (
    <div className={css.resWrapper}>
      <div>
        <label className={css.label}>Сортування</label>
        <div className={css.dropdown}>
          <div className={css.dropdownWrapper}>
            <div className={css.dropdownHeader} onClick={toggleDropdown}>
              {selectedItem
                ? findItem(selectedItem).label
                : "Select sort option"}
              {(findItem(selectedItem).id === 0 ||
                findItem(selectedItem).id == 2) && (
                <svg className={css.arrowActive}>
                  <use href={`/sprite.svg#icon-arrow-up`}></use>
                </svg>
              )}
              {(findItem(selectedItem).id == 1 ||
                findItem(selectedItem).id == 3) && (
                <svg className={css.arrowActive}>
                  <use href={`/sprite.svg#icon-arrow-down`}></use>
                </svg>
              )}

              {/* <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i> */}
            </div>
            <div className={`${css.dropdownBody} ${isOpen && `${css.open}`}`}>
              {items
                .filter((item) => item.id != selectedItem)
                .map((item) => (
                  <div
                    key={item.id}
                    className={css.dropdownItem}
                    onClick={(e) => {
                      handleItemClick(e.target.id);
                      toggleDropdown();
                    }}
                    id={item.id}
                  >
                    {/* <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span> */}
                    {item.label}
                    {(item.id === 0 || item.id == 2) && (
                      <svg className={css.arrowSelect}>
                        <use href={`/sprite.svg#icon-arrow-up`}></use>
                      </svg>
                    )}
                    {(item.id == 1 || item.id == 3) && (
                      <svg className={css.arrowSelect}>
                        <use href={`/sprite.svg#icon-arrow-down`}></use>
                      </svg>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className={css.label}>Параметри пошуку</label>
        <div className={`${css.dropdownHeader} ${css.dropdownHeaderActive}`}>
          {searchWhere(searchField)} — знайти{" "}
          <span className={css.searchResActive}> «{searchText}»</span>
        </div>
      </div>
      <div>
        <label className={css.label}>Результати пошуку</label>
        <div
          className={`${css.dropdownHeader} ${css.dropdownSmall} ${css.dropdownHeaderActive}`}
        >
          Знайдено <span className={css.searchResActive}> 327 </span> документів
        </div>
      </div>{" "}
    </div>
  );
}

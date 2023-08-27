import { useState, useEffect } from "react";
import css from "./SearchResults.module.css";
const data = [
  { id: 0, label: "За датою прийняття1", type: "dateIncrease" },
  { id: 1, label: "За датою прийняття2", type: "dateDecreasing" },
  { id: 2, label: "За назвою1", type: "inAlphabet" },
  { id: 3, label: "За назвою2", type: "notAlphabet" },
];
// const data = [
//   { id: "dateAscending", label: "За датою прийняття1" },
//   { id: "dateDecreasing", label: "За датою прийняття2" },
//   { id: "inAlphabet", label: "За назвою1" },
//   { id: "notAlphabet", label: "За назвою2" },
// ];
export default function SearchResults({
  searchField,
  searchText,
  searchLenght,
  setFilterOption,
}) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState("0");
  useEffect(() => {
    setFilterOption(findItem(selectedItem).type);
  }, [selectedItem]);
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
              {selectedItem ? (
                <div className={css.selectedFilterWrapper}>
                  <p>{findItem(selectedItem).label}</p>
                  {(findItem(selectedItem).type === "dateIncrease" ||
                    findItem(selectedItem).type == "inAlphabet") && (
                    <svg className={css.arrowActive}>
                      <use href={`/sprite.svg#icon-arrow-up`}></use>
                    </svg>
                  )}
                  {(findItem(selectedItem).type == "dateDecreasing" ||
                    findItem(selectedItem).type == "notAlphabet") && (
                    <svg className={css.arrowActive}>
                      <use href={`/sprite.svg#icon-arrow-down`}></use>
                    </svg>
                  )}
                  <svg className={css.arrowDown}>
                    <use href={`/sprite.svg#icon-down`}></use>
                  </svg>
                </div>
              ) : (
                "Select sort option"
              )}
              {(findItem(selectedItem).id === "dateAscending" ||
                findItem(selectedItem).id == "inAlphabet") && (
                <svg className={css.arrowActive}>
                  <use href={`/sprite.svg#icon-arrow-up`}></use>
                </svg>
              )}
              {(findItem(selectedItem).id == "dateDecreasing" ||
                findItem(selectedItem).id == "notAlphabet") && (
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
          Знайдено <span className={css.searchResActive}> {searchLenght} </span>{" "}
          документів
        </div>
      </div>{" "}
    </div>
  );
}

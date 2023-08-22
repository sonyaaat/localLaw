// CustomRadioButton.js
"use client";
import React, { useEffect ,useRef, useState} from "react";
import css from "./RadioButton.module.css";

function RadioButton({ value, checked, label, onChange, name }) {
    //const [ref,setRef] = useState(checked);
  useEffect(() => {
    console.log(label, checked);
  }, [checked, label]);
  return (
    <label className={`${css.label} ${checked ? css.activeLabel :"h"}`}>
      <input
        type="radio"
        name={name}
        value={value}
        className={css.radioButton}
        checked={checked}
        onChange={onChange}
        
      />
     
     {label} 
      <div className={css.customRadioButtonNot}></div>
      
      <svg
      className={css.customRadioButton}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="12" fill="#83BFC4" />
        <circle cx="12" cy="12" r="6" fill="white" />
      </svg>
    </label>
  );
}

export default RadioButton;

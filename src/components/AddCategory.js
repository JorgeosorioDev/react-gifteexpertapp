import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  //Recibir Propiedades

  const [inputValue, setInputValue] = useState("");

  const HandleInputChange = (e) => {
    //console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    //console.log("Submit Hecho");
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue,...cats]); //Operador Spread
      setInputValue("");
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" value={inputValue} onChange={HandleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

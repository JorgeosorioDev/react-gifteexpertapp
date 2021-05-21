import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  //   const HandledAdd = () => {
  //     setCategories(
  //       [...categories, "HunterxHunter"] //Operador Spread para traerme el arreglo original
  //     );

  //     //setCategories( cats=> [...cats, 'HunterXHunter']);
  //   };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          //return <li key={category}> {category} </li>;
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

import React, {useState} from "react";

function Item({ name, category }) {
  const [appClass, setAppClass] = useState("");

  function addToCart(event){
    setAppClass((currentCartMode) => (currentCartMode==="")?"in-cart":"");
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{(appClass==="")?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;

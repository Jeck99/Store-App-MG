import React, { useEffect, useState } from "react";
import AddProductComponent from "../Add-Product/Add-Product";
import Product from "../Product/Product";
export default function ProductsComponent() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [toggle, setToggle] = useState([]);
  useEffect(() => {
    listOfProducts = [
      { name: "as", price: 50, qunt: 4, isInSeasion: true },
      { name: "gh", price: 56, qunt: 9, isInSeasion: false },
      { name: "klj", price: 23, qunt: 6, isInSeasion: true },
    ]
    alert("HELLO THERE ! ! !")
  }, [])
  return (
    <div>Products
      <button onClick={() => setToggle(!toggle)}>TOGGLE COMPONENTS</button>
      {
        toggle ? listOfProducts.map(() =>
          <Product name price qunt isInSeasion />)
          : <AddProductComponent />
      }

    </div>
  )
}
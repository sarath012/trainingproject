import React, { useContext, useState, useEffect } from "react";
import data from "../../Object/products.json";
import Aside from "../Aside/Aside";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Products.css";
import { appContext } from "../../Context/AppContext";
import Product from "../Product/Product";

export default function Products() {
  const [selectProducts, setSelectProducts] = useState(data.products);
  const {
    selectedProduct,
    setSelectedProduct,
    sortArray,
    setSortArray,
    titleFilter,
    setTitleFilter
  } = useContext(appContext);

  console.log(titleFilter)


  useEffect(() => {
    
    function sortedarray(sortArray) {
      const types = {
        none: "",
        price: "price",
        rating: "rating",
        discountPercentage: "discountPercentage",
      };
      const sortProperty = types[sortArray];
      const sorted = [...selectProducts].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setSelectProducts(sorted);
    }
    sortedarray(sortArray);
  }, [sortArray]);

  


  if(selectedProduct!==null){
    return <Product />
  }

  return (
    <div>
      <Header />
      <Aside />

      <div className="productcontainer">
        {selectProducts.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
}

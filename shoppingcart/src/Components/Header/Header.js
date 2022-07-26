import React, { useContext } from "react";
import { appContext } from "../../Context/AppContext";
import "./Header.css";

export default function Header() {
  const {sortArray,setSortArray,titleFilter,setTitleFilter} = useContext(appContext);

  return (
    <div className="head">
      <div className="heading-container">
        <h1 className="heading">Shopping cart</h1>
      </div>

      <div>
        <div>
          <input type='text' placeholder="Search by name" onChange={(e)=>setTitleFilter(e.target.value)}/>
        </div>

        <div>
          <select onChange={(e) => setSortArray(e.target.value)}>
            <option value="none">none</option>
            <option value="price">Price Ascending</option>
            <option value="rating">Rating Ascending</option>
            <option value="discountPercentage">Discount Percentage</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  );
}

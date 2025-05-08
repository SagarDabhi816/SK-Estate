import React, { useState } from "react";
import "./Searchbar.scss";

const types = ["buy", "rent"];

function Searchbar() {
  const [query, setquery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setquery((prev)=>({...prev,type:val}))
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={() => switchType(type)} 
          className={query.type === type ? "active" : ""}>{type}</button>
        ))}
      </div>
      <form>
        <input type="text" name="location" id="" placeholder="City" />
        <input
          type="text"
          name="minPrice"
          id=""
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="text"
          name="location"
          id=""
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;

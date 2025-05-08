import "./filter.scss";
function Filter() {

  return (
    <div className='filter'>
      <h1>Search results For <b>london</b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor="city">location</label>
            <input type="text" name="city" id="city" placeholder="Prefered Location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
            <label htmlFor="type">Type</label>
           <select name="type" id="type">
           <option value="" disabled>Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
           </select>
        </div>
        <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
            <option value="" disabled>Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
           </select>
        </div>
        <div className="item">
            <label htmlFor="minPrice">Min price</label>
            <input type="number" name="minPrice" id="minPrice" placeholder="Any" />
        </div>
        <div className="item">
              <label htmlFor="maxPrice">max price</label>
            <input type="number" name="maxPrice" id="maxPrice" placeholder="Any" />
        </div>
        <div className="item">
            <label htmlFor="bedroom">bedroom</label>
            <input type="text" name="bedroom" id="bedroom" placeholder="Any" />
        </div>
        <button>
            <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter

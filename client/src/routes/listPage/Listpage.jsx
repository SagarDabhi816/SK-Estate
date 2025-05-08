import "./listpage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../Components/filter/Filter"
import Card from "../../Components/card/Card"
import Map from "../../Components/map/Map";

function listpage() {
  const data = listData;

 
 
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  );
}

export default listpage;

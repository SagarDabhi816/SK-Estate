import "./Homepage.scss";
import Searchbar from "../../Components/searchbar/Searchbar";

function Homepage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Real Estate & Get your dream home</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsam placeat perferendis sint voluptatum veniam consequuntur
            deleniti excepturi nihil adipisci.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>169</h1>
              <h2>Awards gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" />
      </div>
    </div>
  );
}

export default Homepage;

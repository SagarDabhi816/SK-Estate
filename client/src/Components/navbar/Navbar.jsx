import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {

  
  useEffect(() => {
     let abc = localStorage.getItem("user")
          console.log(abc)
     
   }, []);
  
  const [username, setusername] = useState();

  const [open, setopen] = useState(false);
  console.log()
  const user = true;
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png " alt="No Img Found" />
          <span>SK Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
      {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>{username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuicon">
        <img src="/menu.png " alt="No Img Found" onClick={()=>setopen(prev=>!prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">agents</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

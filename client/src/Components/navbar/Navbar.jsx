import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  
  const {currentUser} = useContext(AuthContext);
  useEffect(() => {

}, []);

  const [open, setopen] = useState(false);
  
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
      {currentUser ? (
          <div className="user">
            <img
              src={currentUser?.avtar || "/noavatar.jpg "}
              alt=""
            />
            <span>{currentUser?.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
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

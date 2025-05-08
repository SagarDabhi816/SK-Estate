import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Login() {

const [error, seterror] = useState("");
const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setisLoading(true)
    e.preventDefault(); 
    seterror("")
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

        localStorage.setItem("user",JSON.stringify(res.data))
      navigate("/")
    } catch (error) {
      console.log(error);
      seterror(error.response.data.message)
    }finally{
      setisLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username"  required minLength={3} maxLength={10}/>
          <input name="password" type="password" placeholder="Password"  required />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
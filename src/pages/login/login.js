import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nevigate = useNavigate();
  const handleLogin = () => {
    nevigate("/home");
  };
  return (
    <div className="login-container">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Sign up</button>
        </div>

        <div class="login">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "./../../firebase.init";

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  if (user) {
    navigate("/");
  } else {
    navigate("/login");
  }

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (event) =>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password)

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
      });
      
    }

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input type="text" name="email" id="email" required/>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input type="password" name="password" id="password" required/>
            </div>
          </div>
          <button type="submit" className="auth-form-submit">
            Login
          </button>
        </form>
        <p className="redirect">
          New to Tech Geeks?{" "}
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button className="google-auth" onClick={googleAuth}>
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

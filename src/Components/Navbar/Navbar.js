import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
        // user is signed out
        // ...
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign Out Successfully!!!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/videos"
        >
          Videos
        </NavLink>
        {!user?.uid ? (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            Login
          </NavLink>
        ) : (
          <>
            <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            {user?.displayName ? user?.displayName : ""}
          </NavLink>
            <NavLink
            onClick={handleSignOut}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            Logout
          </NavLink>
          </>          
        )}
      </div>
    </nav>
  );
};

export default Navbar;

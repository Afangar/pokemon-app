import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.scss";

let NavBar = (props) => {
  const { location } = props;
  return (
    <div>
      <nav className="nav">
        <div className="div1">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="logo"></img>
          </Link>
        </div>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/pokemons" ? "active" : ""}>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="div2">
          <a href="https://www.facebook.com/" target="_blanc">
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="facebook"
            ></img>
          </a>
          <a href="https://twitter.com/" target="_blanc">
            <img
              src="/images/twitter.png"
              alt="twitter"
              className="twitter"
            ></img>
          </a>
          <a href="https://www.reddit.com/" target="_blanc">
            <img src="/images/reddit.png" alt="reddit" className="reddit"></img>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavBar);

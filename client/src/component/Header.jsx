import React, { useState, useContext } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Logout from "../images/logout.svg";
import Add from "../images/add.svg";
import { Link } from "react-router-dom";
import Profile from "../images/profile.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../context/userContext";
import Heart from "../images/github.svg";
import Users from "../images/users.svg";
import Menu from "../images/menu.svg";
import Logo from "../images/notes.svg";
const Header = () => {
  const [isNavSowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const { currentUser } = useContext(UserContext);
  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <div className="nav-brain">
            <img className="head-logo" src={Logo}></img>
            <h1 className="nav__logo-text">BrainBytes</h1>
          </div>
        </Link>
        {currentUser?.id && isNavSowing && (
          <ul className="nav__menu">
            <li>
              <Link to={`/profile/${currentUser.id}`} onClick={closeNavHandler}>
                <img className="nav-icon" src={Profile} />
                {currentUser?.name}
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandler}>
                <img className="nav-icon" src={Add} />
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                <img className=" nav-icon2" src={Users}></img>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandler}>
                <img className="head-logo" src={Logout}></img>
                Logout
              </Link>
            </li>
          </ul>
        )}
        {!currentUser?.id && isNavSowing && (
          <ul className="nav__menu">
            <li>
              <Link
                to="https://github.com/CyberlordYash"
                onClick={closeNavHandler}
              >
                <img className=" nav-icon2" src={Heart}></img>
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                <img className=" nav-icon2" src={Users}></img>
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeNavHandler}>
                <img className="nav-icon" src={Profile} />
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavSowing)}
        >
          {isNavSowing ? (
            <AiOutlineClose />
          ) : (
            <img src={Menu} className="nav-icon"></img>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;

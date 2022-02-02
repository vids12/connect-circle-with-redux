import { Link } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <span>
        LOGO
        {/* <img /> */}
      </span>
      <input type="search" className="nav__search" placeholder="Search" />
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            <RiHome5Line />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            <CgAddR />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile" className="nav__link">
            <FaRegUserCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

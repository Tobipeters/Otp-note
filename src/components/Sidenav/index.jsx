import "./sidenav.style.css";
import {
  FiEdit,
  FiStar,
  FiTag,
  FiCircle,
  FiMenu,
  FiX,
  FiSearch
} from "react-icons/fi";
// import { a } from "react-router-dom";

const Sidenav = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <div className="mobile-top-nav">
        <span className="" onClick={openNav}>
          <FiMenu className="icon" />
        </span>

        <FiSearch className="icon ml-auto" />
      </div>
      <div id="mySidenav" className="sidenav">
        <a
          href="#"
          className="closebtn d-inline-block d-md-none"
          onClick={closeNav}
        >
          <FiX />
        </a>
        <div className="nav-menu">
          <a href="#">
            <FiEdit className="icon" />
            <span>All Notes</span>
          </a>
          <a href="#">
            <FiStar className="icon" />
            <span>Favourites</span>
          </a>
          <div className="hr-divider"></div>
          <a href="#">
            <FiTag className="icon" />
            <span> Tags</span>
          </a>
          {/* Sub tags */}
          <ul className="list-group my-3">
            <li className="list-group-item border-0">
              <FiCircle className="icon i-1" />
              Personal
            </li>
            <li className="list-group-item border-0">
              <FiCircle className="icon i-2" />
              Work
            </li>
            <li className="list-group-item border-0">
              <FiCircle className="icon i-3" />
              Social
            </li>
            <li className="list-group-item border-0">
              <FiCircle className="icon i-4" />
              Important
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

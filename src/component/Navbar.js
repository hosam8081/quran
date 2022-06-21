import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top active main-nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/quran">
        قرآن    
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show&& "show"}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={() => setShow(false)}>
              قرآن 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reciters" onClick={() => setShow(false)}>
                التلاوات القرآنية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ahadeth" onClick={() => setShow(false)}>
                احاديث
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Search" onClick={() => setShow(false)}>
                بحث فى القران
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tasbeh" onClick={() => setShow(false)}>
                تسابيح
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
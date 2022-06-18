import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/quran">
              قرآن 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quran/Reciters">
                التلاوات القرآنية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quran/Ahadeth">
                احاديث
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quran/Search">
                بحث فى القران
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quran/Tasbeh">
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
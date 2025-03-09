import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav>
        <h1>Cook.</h1>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></div>
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

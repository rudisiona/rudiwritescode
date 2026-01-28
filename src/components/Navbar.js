import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css'

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <nav className="nav"style={{ display: "flex", gap: "20px", padding: "1rem" }}>
    
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div 
        className="dropdown" 
        onMouseEnter={() => setDropdownOpen(true)} 
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span className="dropdown-title">Projects ▼</span>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/projects/1">JavaScript</Link>
            <Link to="/projects/2">MEN Full Stack</Link>
            <Link to="/projects/3">Django Full Stack</Link>
          </div>
        )}
      </div>
      <Link to="/contact">Check Me Out</Link>
    </nav>
  );
}

export default Navbar;

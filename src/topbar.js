import { useState } from 'react';
import './Topbar.css';

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="topbar">
      {/* Burger Icon */}
      <div onClick={toggleMenu} className="burger">
        ☰
      </div>

      {/* Website Title */}
      <div className='topbar-center'>
        <h1 className="topbar-title">KOX SERVICE</h1>
      </div>
    
      <div className="topbar-right"></div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className={`sidebar ${menuOpen ? "open" : ""}`}>
          <a href="#" className="dropdown-link1">Hem</a>
          <a href="#" className="dropdown-link">Om oss</a>
          <a href="#" className="dropdown-link">Kontakta oss</a>
        </div>
      )}
    </div>
  );
}

export default Topbar;

import { Link } from 'react-router-dom';
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
       <Link to="home" className="sidebar-link1" onClick={toggleMenu}>Hem</Link>
       <Link to="about" className="sidebar-link" onClick={toggleMenu}>Om oss</Link>
       <Link to="contact" className="sidebar-link" onClick={toggleMenu}>Kontaktuppgifter</Link>
     </div>
      )}
    </div>
  );
}

export default Topbar;

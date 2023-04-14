import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useWishContext } from '../../contexts/WishContext';
import { Badge } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();

  const { getWish, wishLength } = useWishContext();

  const { getCart, cartLength } = useCartContext();

  const [showTooltip, setShowTooltip] = useState(false); // создаем состояние для отображения всплывающего окна

  const { user, logout, isAdmin } = useAuthContext();

  const handleMouseEnter = () => {
    setShowTooltip(true); // показываем всплывающее окно при наведении
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // скрываем всплывающее окно при уходе курсора
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    getWish();
  }, []);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="watch container">
        <Link to={'/'} className="watch-title">
          CHRONOS
        </Link>
        {isOpen && (
          <nav className="burger-menu__nav">
            <div className="burger-menu__item">
              <Link className="burger-menu__link" to="/watches">
                ALL WATCHES
              </Link>
              <Link className="burger-menu__link" to="/allbrand">
                BRANDS
              </Link>
              {isAdmin() ? (
                <Link className="burger-menu__link" to="/add">
                  ADD PRODUCT
                </Link>
              ) : null}
              {user ? (
                <Link className="burger-menu__link" to="/profile">
                  Hi {user.displayName}
                </Link>
              ) : (
                <Link className="burger-menu__link" to="/login">
                  LOGIN
                </Link>
              )}
            </div>
          </nav>
        )}
        <div className="burger-menu">
          <button
            className="burger-menu__toggle"
            onClick={() => handleToggle()}
          >
            <span className="burger-menu__icon"></span>
            <span className="burger-menu__icon"></span>
            <span className="burger-menu__icon"></span>
          </button>
        </div>
      </header>
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>

      <nav className="nav-watch container">
        <Link className="nav-title" to="/watches">
          ALL WATCHES
        </Link>
        <Link
          to="/allbrand"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          className="nav-title"
        >
          BRANDS
        </Link>
        {isAdmin() ? (
          <Link className="nav-title" to="/add">
            ADD PRODUCT
          </Link>
        ) : null}

        {user ? (
          <Link className="nav-title" to="/profile">
            Hi {user.displayName}
          </Link>
        ) : (
          <Link className="nav-title" to="/login">
            LOGIN
          </Link>
        )}
        <Badge
          className="badge"
          badgeContent={cartLength}
          sx={{ color: 'black' }}
        >
          <img
            onClick={() => navigate('/cart')}
            className="loveIcon"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTIV0T4yWyePGrL1gaegQkR0T24fAEOVR7Iw0CPFdjoGRwtl3l"
            alt="bag"
          />
        </Badge>
        <Badge
          className="badge"
          badgeContent={wishLength}
          sx={{ color: 'black' }}
        >
          <img
            src="https://svgsilh.com/svg_v2/24037.svg"
            className="loveIcon"
            onClick={() => navigate('/wish')}
            alt="wish"
          />
        </Badge>
      </nav>
      {showTooltip && (
        <div
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          className="nav-dropdown"
        >
          <div className="brand-title">
            <Link to="#">BRANDS A-Z</Link>
            <Link to="/allbrand">VIEW ALL BRANDS</Link>
          </div>
          <div className="brand-featured">
            <div className="brand-title-one">
              <span>FEATURED BRANDS</span>
              <Link to="/rolex">ROLEX</Link>
              <Link to="/debethune">DE BETHUNE</Link>
              <Link to="/cartier">CARTIER</Link>
            </div>
            <div className="brand-title-two">
              <Link to="/patek">PATEK PHILIPPE</Link>
              <Link to="/omega">OMEGA</Link>
              <Link to="/tudor">TUDOR</Link>
            </div>
            <div className="brand-title-three">
              <Link to="/jacob">JACOB & CO</Link>
              <Link to="/richard">RICHARD MILLE</Link>
              <Link to="/vacheron">VACHERON CONSTANTIN</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

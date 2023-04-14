import React from 'react';
import { useNavigate } from 'react-router-dom';
import './allbrandsPage.css';

function AllBrands() {
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <picture>
          <source
            srcSet="https://watchbox-sfcc.imgix.net/plp/2022_12_22_PLP+Handoff/PLP+Web+Crop/PLP+Updates_+Our+Brands+web.jpg?auto=compress,format"
            alt="brands"
          />
          <img className="allImg" src="#" alt="img" />
        </picture>
      </div>
      <div className="logocont">
          <h3 className="featured">Featured Brands</h3>
        <section className="logocontWidth">
          <div>
            <img
              onClick={() => navigate('/rolex')}
              className="rolexImg"
              src="https://1.bp.blogspot.com/-_bJHdIlHf1E/Wnti4pmtMyI/AAAAAAAArGw/-BJFsHjYQjsmwm5iBe8NEGQnccKjExUAQCLcBGAs/s3200/2018-Rolex-Logo.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() => navigate('/patek')}
              className="patekImg"
              src="https://1000logos.net/wp-content/uploads/2018/11/Patek-Philippe-Logo-1920s.png"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() => navigate('/omega')}
              className="omegaImg"
              src="https://www.icon-icon.com/wp-content/uploads/2020/06/icon-icon-logo-omega.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() => navigate('/jacob')}
              className="jacobImg"
              src="https://cloud.pandatells.com/brands/33/f/jacob-co.svg"
              alt=""
            />
          </div>
        </section>
      </div>
      <div className="allContainer">
        <h3 className="brandh2">All Brands</h3>
        <div className="alphabetBrand">
          <div className="alphStart">
            <h6>C</h6>
            <ul>
              <li onClick={() => navigate('/cartier')}>CARTIER</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>D</h6>
            <ul>
              <li onClick={() => navigate('/debethune')}>De Bethune</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>J</h6>
            <ul>
              <li onClick={() => navigate('/jacob')}>JACOB & Co</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>O</h6>
            <ul>
              <li onClick={() => navigate('/omega')}>OMEGA</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>P</h6>
            <ul>
              <li onClick={() => navigate('/patek')}>PATEK PHILIPPE</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>R</h6>
            <ul>
              <li onClick={() => navigate('/richard')}>RICHARD MILLE</li>
              <li onClick={() => navigate('/rolex')}>ROLEX</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>T</h6>
            <ul>
              <li onClick={() => navigate('/tudor')}>TUDOR</li>
            </ul>
          </div>
          <div className="alphStart">
            <h6>V</h6>
            <ul>
              <li onClick={() => navigate('/vacheron')}>VACHERON CONSTANTIN</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AllBrands;

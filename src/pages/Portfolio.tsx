
import "./Portfolio.css";
import { NavLink } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicPortal } from "react-icons/gi";



const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h3 className="portfolio-title">Portfolio</h3>
      <div className="line"></div>

      <div className="portfolio-grid">
         <NavLink to="https://smartmuscle.com.co" className='portfolio-link' target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item_bgimg5">
          <div className="portfolio-item">
            <p>SM</p>

            <p className="portfolio-item_title"> SMARTMUSCLE</p>
            <p className="portfolio-item_description">Ecommerce</p>
          </div>
        </div>
        </NavLink>
        <NavLink to="https://pokedex-2025-by-ale.netlify.app/pokedex" className='portfolio-link' target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item_bgimg">
          <div className="portfolio-item">
            <MdCatchingPokemon />
            <p>POKEDEX</p>
            <p className="portfolio-item_description">Web app</p>
          </div>
        </div>
        </NavLink>
         <NavLink to="https://rick-and-morty-2025.netlify.app" className='portfolio-link' target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item_bgimg4">
          <div className="portfolio-item">
            <GiMagicPortal   />

            <p className="portfolio-item_title"> RICK & MORTY</p>
            <p className="portfolio-item_description">Web app</p>
          </div>
        </div>
        </NavLink>
        <NavLink to="https://weather-app-2025-by-ale.netlify.app" className='portfolio-link' target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item_bgimg2">
          <div className="portfolio-item">
            <TiWeatherPartlySunny />

            <p className="portfolio-item_title">WEATHER</p>
            <p className="portfolio-item_description">Web app</p>
          </div>
        </div>
        </NavLink>
        
         <NavLink to="https://user-crup-app.netlify.app" className='portfolio-link' target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item_bgimg3">
          <div className="portfolio-item">
            <FaPeopleGroup  />

            <p className="portfolio-item_title">USER CRUD</p>
            <p className="portfolio-item_description">Web app</p>
            <p className="errors">Backend off</p>
          </div>
        </div>
        </NavLink>
        
        
       
      </div>
    </div>
  );
};

export default Portfolio;

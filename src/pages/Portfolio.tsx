import "./Portfolio.css";
import { NavLink } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicPortal } from "react-icons/gi";
import { FaPaw, FaHotel } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h3 className="portfolio-title">Portfolio</h3>
      <div className="line"></div>
      {/* Front-end section */}
      <div className="portfolio-front">
        <h3>FRONT-END</h3>
        <div className="portfolio-grid">
          <NavLink
            to="https://pet-center-cyan.vercel.app"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg6">
              <div className="portfolio-item">
                <FaPaw />
                <p className="portfolio-item_title"> PET-CARE</p>
                <p className="portfolio-item_description">Appointment app</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://smartmuscle.com.co"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg5">
              <div className="portfolio-item">
                <p>SM</p>
                <p className="portfolio-item_title"> SMARTMUSCLE</p>
                <p className="portfolio-item_description">Ecommerce</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://pokedex-2025-by-ale.netlify.app/pokedex"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg">
              <div className="portfolio-item">
                <MdCatchingPokemon />
                <p>POKEDEX</p>
                <p className="portfolio-item_description">Web app</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://rick-and-morty-2025.netlify.app"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg4">
              <div className="portfolio-item">
                <GiMagicPortal />

                <p className="portfolio-item_title"> RICK & MORTY</p>
                <p className="portfolio-item_description">Web app</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://weather-app-2025-by-ale.netlify.app"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg2">
              <div className="portfolio-item">
                <TiWeatherPartlySunny />

                <p className="portfolio-item_title">WEATHER</p>
                <p className="portfolio-item_description">Web app</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="https://user-crup-app.netlify.app"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimg3">
              <div className="portfolio-item">
                <FaPeopleGroup />

                <p className="portfolio-item_title">USER CRUD</p>
                <p className="portfolio-item_description">Web app</p>
                <p className="errors">Backend off</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Back-end section*/}
      <div className="portfolio-back">
        <h3>BACK-END</h3>
        <div className="portfolio-grid">
          <NavLink
            to="https://pet-center-cyan.vercel.app"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimgB">
              <div className="portfolio-item">
                <FaPaw />
                <p className="portfolio-item_title">PET-CARE</p>
                <p className="portfolio-item_description">Appointment app</p>
                <p className="portfolio-item_technologies">
                  Prisma and PostgreSQL
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://github.com/Alevas004/hotel-api"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimgB">
              <div className="portfolio-item">
                <FaHotel />
                <p className="portfolio-item_title">HOTEL</p>
                <p className="portfolio-item_description">RESTful API</p>
                <p className="portfolio-item_technologies">
                  Node.js, Express, Sequelize and PostgreSQL
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://github.com/Alevas004/ecommerce-backend"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-item_bgimgB">
              <div className="portfolio-item">
                <IoStorefrontOutline />

                <p className="portfolio-item_title">Ecommerce</p>
                <p className="portfolio-item_description">RESTful API</p>
                <p className="portfolio-item_technologies">
                  Node.js, Express, Sequelize and PostgreSQL
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

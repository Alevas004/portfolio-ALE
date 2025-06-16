import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./CardProfile.css";
import { useState } from "react";

const CardProfile = () => {
  const [isDown, setIsDown] = useState(true);
  return (
    <section className="card-profile">
      <div>
        <article className="card-profile__header">
          <div className="img_container relative">
            <img src="/bg.svg" alt="Profile" />
            <div className="card-profile__floating-button2">Available🟢</div>
          </div>
          <div>
            <h4 className="card-profile__name">Alejandro Vasquez</h4>
            <p className="card-profile__profession">Software Developer</p>
          </div>
          <button
            type="button"
            className=" card-profile__floating-button"
            onClick={() => setIsDown(!isDown)}
          >
            {isDown ? (
              <FaChevronUp color="white" />
            ) : (
              <FaChevronDown color="white" />
            )}
          </button>
        </article>
        <div className={` toggle-main toggle--${isDown ? "down" : "up"}`}>
          <article className="card-profile__contact-info">
            <div className="card-profile__each-info">
              <div className="card-profile__icon">💌</div>
              <div>
                <p className="card-profile__label">EMAIL</p>
                <p>aleinfocontent@gmail.com</p>
              </div>
            </div>
            <div className="card-profile__each-info">
              <div className="card-profile__icon">📞</div>
              <div>
                <p className="card-profile__label">PHONE</p>
                <p>+39 3513661457</p>
              </div>
            </div>
            <div className="card-profile__each-info">
              <div className="card-profile__icon">📍</div>
              <div>
                <p className="card-profile__label">LOCATION</p>
                <p>Pescara, Italy</p>
              </div>
            </div>
          </article>
          <article className="card-profile__social-media">
            <Link
              to="https://www.linkedin.com/in/alejandro-vasquez-8bb97b369/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={34} color={"var(--color-texto)"} />
            </Link>
            <Link
              to="https://github.com/Alevas004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={34} color={"var(--color-texto)"} />
            </Link>
            <Link
              to="https://app.netlify.com/teams/aleinfocontent/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNetlify size={34} color={"var(--color-texto)"} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CardProfile;

import "./AboutMe.css";

import {
  FaReact,
  FaAws,
  FaWordpress,
  FaDatabase,
  FaNodeJs,
  FaLaptopCode,
  FaGithubSquare,
  FaCloudflare,
  FaDigitalOcean,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  SiTailwindcss,
  SiNetlify,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiBrevo,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiCanva,
  SiExpress,
} from "react-icons/si";

import { MdSettingsApplications } from "react-icons/md";

const AboutMe = () => {
  return (
    <>
      <div className="about-me__title">
        <h2 className="title-main">About Me</h2>
        <div className="line"></div>
      </div>
      <section className="about-me">
        <div className="about-me__content">
          <p>
            I offer professional support in web development and digital
            environments, combining strong technical skills with excellent
            command of English, Italian and Spanish. My ability to adapt
            quickly, attention to detail, and effective communication across
            languages allow me to collaborate efficiently in international and
            multilingual contexts.
          </p>
        </div>
        <h3> What I do?</h3>
        <div className="services-container">
          <div className="services">
            <FaLaptopCode size={34} />
            <p className="services-name">Web Development</p>
            <p className="services-description">
              Creating responsive and interactive user interfaces with modern
              frontend technologies.
            </p>
          </div>
          <div className="services">
            <FaDatabase size={34} />
            <p className="services-name">Backend Development</p>
            <p className="services-description">
              Building scalable and efficient backend systems using Node.js and
              RESTful APIs.
            </p>
          </div>
        </div>
      </section>
      <div className="skills-container">
        <h3 className="title-skill">My Skills</h3>
        <div className="scroll-container">
          <div className="card">
            <FaReact size={50} />
            <p>React.js</p>
          </div>
          <div className="card">
            <FaNodeJs size={50} />
            <p>Node.js</p>
          </div>
          <div className="card">
            <RiNextjsLine size={50} />
            <p>Next.js</p>
          </div>
          <div className="card">
            <BiLogoPostgresql size={50} />
            <p>PostgreSQL</p>
          </div>
          <div className="card">
            <SiTailwindcss size={50} />
            <p>Tailwind CSS</p>
          </div>
          <div className="card">
            <SiExpress size={50} />
            <p>Express.js</p>
          </div>
          <div className="card">
            <FaAws size={50} />
            <p>AWS</p>
          </div>
          <div className="card">
            <MdSettingsApplications size={50} />
            <p>GSAP</p>
          </div>
          <div className="card">
            <FaWordpress size={50} />
            <p>WordPress</p>
          </div>
          <div className="card">
            <BiLogoTypescript size={50} />
            <p>TypeScript</p>
          </div>
          <div className="card">
            <FaGithubSquare size={50} />
            <p>GitHub</p>
          </div>
          <div className="card">
            <FaCloudflare size={50} />
            <p>Cloudflare</p>
          </div>
          <div className="card">
            <SiNetlify size={50} />
            <p>Netlify</p>
          </div>
          <div className="card">
            <FaDigitalOcean size={50} />
            <p>DigitalOcean</p>
          </div>
          <div className="card">
            <SiGoogletagmanager size={50} />
            <p>Google Tag Manager</p>
          </div>
          <div className="card">
            <SiGoogleanalytics size={50} />
            <p>Google Analytics</p>
          </div>
          <div className="card">
            <SiBrevo size={50} />
            <p>Brevo</p>
          </div>
          <div className="card">
            <SiAdobepremierepro size={50} />
            <p>Adobe Premiere Pro</p>
          </div>
          <div className="card">
            <SiAdobeaftereffects size={50} />
            <p>Adobe After Effects</p>
          </div>
          <div className="card">
            <SiCanva size={50} />
            <p>Canva</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CardProfile from "../components/CardProfile/CardProfile";
import { FaWhatsapp } from "react-icons/fa";

import "./MainLayout.css";
import { Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="main-layout ">
       
          <Link
            to="https://wa.me/393513661457"
            target="_blank"
            rel="noopener noreferrer"
            className="call-to-action"
          >
            <FaWhatsapp size={30} color="white" />
          </Link>
    

        <div className="main-content">
          <div className="main-content_profile">
            <CardProfile />
          </div>

          <section className="main-section">
            <div className="main-section_header">
              <Header />
            </div>
            <div className="main-section_content">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

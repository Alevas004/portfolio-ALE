import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const isActived = ({ isActive }: { isActive: boolean }) => {
   return isActive ? 'nav-link active' : 'nav-link'
  }
  return (
    <header className="header">
      <nav className="header-nav">
         <NavLink to={"/"} className={isActived}>Home</NavLink>
        <NavLink to={"/about"} className={isActived}>About me</NavLink>
        <NavLink to={"/portfolio"} className={isActived}>Portfolio</NavLink>
        <NavLink to={"/resume"} className={isActived}>Resume</NavLink>
       
      </nav>
    </header>
  );
};

export default Header;

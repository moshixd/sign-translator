import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "../Navbar/Navbar.css";

import logo from "./Logo.png";

const Navbar = ({ page }) => {
  // Adds a navbar with links to profile page and translation page when logged in.
  const { user } = useUser();
  return (
    <nav className="container">
      <div className="picture">
        <img id="logo-picture" src={logo} alt="logo" />
      </div>
      <h3 className="title">{page}</h3>
      {user !== null && (
        <div className="links">
          <NavLink className={"link-item"} to="/translation">
            Translations
          </NavLink>
          <NavLink className={"link-item"} to="/profile">
            Profile
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

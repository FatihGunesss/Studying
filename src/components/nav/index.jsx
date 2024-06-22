import { Button } from "components";
import Logo from "assets/image/icon/Logo.svg";

import "assets/styles/container.css";
import "assets/styles/all.css"
import "./style.css";

const Nav = () => {
  return (
    <div className="background-color">
      <div className="container">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-menu__and-buttons">
            <ul className="nav-info">
              <li className="nav-item">Home</li>
              <li className="nav-item">Careers</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">About Us</li>
            </ul>
            <div className="nav-buttons">
              <Button className={"nav-button1"} title={"Login"} />
              <Button className={"nav-button2"} title={"Sign Up"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

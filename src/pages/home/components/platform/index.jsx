import PlatformImg from "assets/image/platform.png";
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";
import { Button } from "components";

const Platform = () => {
  return (
    <div className="container">
      <div className="platform-wrapper">
        <div className="platform-left__info">
          <img className="platform-image" src={PlatformImg} alt="img" />
        </div>

        <div className="platform-right__info">
          <p className="platform-integ">
            <span className="platform-line"></span>INTEGRATIONS
          </p>
          <h3 className="platform-title">
            200+ educational tools and platform
            <span className="platform-span"> integrations</span>
          </h3>
          <p className="platform-desc">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
          <div>
            <Button className={"platform-btn"} title={"See All Integrations"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

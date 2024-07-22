import DiscussionsImg from "assets/image/discussions.png";

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";
import { Button } from "components";

const Discussions = () => {
  return (
    <div className="container">
      <div className="discussions-wrapper">
        <div className="discussions-left__info">
          <img className="discussions-image" src={DiscussionsImg} alt="img" />
        </div>

        <div className="discussions-right__info">
          <h3 className="discussions-title">
            One-on-One <span className="discussions-span">Discussions</span>
          </h3>
          <p className="discussions-desc">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>
      <div className="discussion-button">
      <Button className={"discussion-btn"} title={"See more features"}/>
      </div>
    </div>
  );
};

export default Discussions;

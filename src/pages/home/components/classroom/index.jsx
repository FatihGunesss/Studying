import ClassRoom from "assets/image/Group 5396.png";

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Classroom = () => {
  return (
    <div className="container">
      <div className="classroom-wrapper">
        <div className="classroom-left__info">
          <span className="classroom-circle"></span>
          <h4 className="classroom-title">
            <span className="classroom-span1">Everything you can do in a physical classroom,</span>
            <span className="classroom-span2"> you can do with Skilline</span>
          </h4>
          <p className="classroom-desc">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <span className="classroom-circle2"></span>
          <a className="classroom-link" href="/">Learn more</a>
        </div>
        <div className="classroom-right__info">
          <img className="classroom-image" src={ClassRoom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Classroom;

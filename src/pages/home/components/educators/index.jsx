import GadeBook from "assets/image/grade.png"
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Enducator = () => {
  return (
    <div className="container">
      <div className="enducator-wrapper">
        <div className="enducator-left__info">
          <h3 className="enducator-title">
            <span className="enducator-span">Class Management</span> Tools for
            Educators
          </h3>
          <p className="enducator-desc">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="enducator-right__info">
            <img className="enducator-image" src={GadeBook} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Enducator;

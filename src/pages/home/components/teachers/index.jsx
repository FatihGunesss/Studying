import TeachersImg from "assets/image/teachers.png"
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Teachers = () => {
  return (
    <div className="container">
      <div className="teachers-wrapper">
        <div className="teachers-left__info">
          <h3 className="teachers-left__title">
            <span className="teachers-span">Tools</span> For Teachers And Learners
          </h3>
          <p className="teachers-left__desc">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <div className="teachers-right__info">
            <img src={TeachersImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Teachers;

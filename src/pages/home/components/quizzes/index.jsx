import Answer from "assets/image/answer.png"
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";


const Quizzes = () => {
  return (
    <div className="container">
      <div className="quizzes-wrapper">
        <div className="quizzes-left__info">
            <img className="quizzes-image" src={Answer} alt="img" />
        </div>
        <div className="quizzes-right__info">
          <h3 className="quizzes-title">
            Assessments, <span className="quizzes-span">Quizzes</span>, Tests
          </h3>
          <p className="quizzes-desc">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;

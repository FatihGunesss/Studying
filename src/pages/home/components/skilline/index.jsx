import { Button } from "components";
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Skilline = () => {
  return (
    <div className="container">
      <div className="skilline-wrapper">
        <div className="skilline-td">
          <h3 className="skilline-title">
            <span className="skilline-span1">What is</span>
            <span className="skilline-span2"> Skilline?</span>
          </h3>
          <p className="skilline-desc">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="skilline-image__wrapper">
          <div className="skilline-image__left">
            <h5 className="skilline-image__title">FOR INSTRUCTORS</h5>
            <Button className={"skilline-btn__left"} title={"Start a class today"}/>
          </div>
          <div className="skilline-image__right">
            <h5 className="skilline-image__title">FOR STUDENTS</h5>
            <Button className={"skilline-btn__right"} title={"Enter access code"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilline;

import { RiPlayLargeFill } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";
import { Button } from "components";
import Qiz from "assets/image/studentka.png";
import Calendar from "assets/image/icon/calendar.svg";
import Diagram from "assets/image/icon/diagram.svg";
import User from "assets/image/user.png";
import Message from "assets/image/icon/message.svg"
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Hero = () => {
  return (
    <div className="background-box">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-left__info">
            <h1 className="hero-title">
              <span>Studying</span> Online is now much easier
            </h1>
            <p className="hero-desc">
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div className="btn-watch__desc-info">
              <div className="hero-btn1__wrapper">
                <Button className={"hero-btn"} title={"Join for free"} />
              </div>
              <div className="hero-btn2__wrapper">
                <Button
                  className={"hero-btn__play"}
                  title={<RiPlayLargeFill />}
                />
                <p className="btn-desc">Watch how it works</p>
              </div>
            </div>
          </div>
          <div className="hero-right__info">
            <img className="hero-qiz__image" src={Qiz} alt="" />
            <div className="hero-assisted">
              <img src={Calendar} alt="" />
              <div className="assisted-nd">
                <h5 className="assisted-number">250k</h5>
                <p className="assisted-desc">Assisted Student</p>
              </div>
            </div>
            <div className="hero-icon">
              <img src={Diagram} alt="" />
            </div>
            <div className="hero-user__class">
              <img className="hero-user__image" src={User} alt="" />
              <span className="hero-green__round"></span>

              <div className="hero-user__td">
                <h5 className="hero-user__title">User Experience Class</h5>
                <p className="hero-user__desc">Today at 12.00 PM</p>
                <Button className={"hero-user__btn"} title={"Join Now"} />
              </div>

              <div className="hero-user__button-wrapper"></div>
            </div>
            <div className="hero-message">
              <img src={Message} alt="" />
              <div className="hero-message__td">
                <h5 className="hero-message__title">Congratulations</h5>
                <GoCheckCircle className="hero-check" />
                <p className="hero-message__desc">Your admission completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

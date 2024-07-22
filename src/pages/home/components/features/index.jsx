import FeaturesImg1 from "assets/image/features-img1.png";
import FeaturesIcon1 from "assets/image/icon/features-icon1.svg";
import FeaturesIcon2 from "assets/image/icon/features-icon2.svg";
import FeaturesIcon3 from "assets/image/icon/features-icon3.svg";
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Features = () => {
  return (
    <div className="container">
      <div className="features-all__wrapper">
        <h3 className="features-title">
          Our
          <span className="features-span"> Features</span>
        </h3>
        <p className="features-desc">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="features-wrapper">
          <img className="features-left__info" src={FeaturesImg1} alt="" />

          <div className="features-right__info">
            <h3 className="features-right__title">
              A <span className="features-right__span">user interface </span>
              designed for the classroom
            </h3>
            <div className="features-desc__wrapper">
              <div className="features-desc__left">
                <img src={FeaturesIcon1} alt="Icon" />
                <img src={FeaturesIcon2} alt="Icon" />
                <img src={FeaturesIcon3} alt="Icon" />
              </div>

              <div className="features-desc__right-wrapper">
                <p className="features-right__desc">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
                <p className="features-right__desc">
                  TA’s and presenters can be moved to the front of the class.
                </p>
                <p className="features-right__desc">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

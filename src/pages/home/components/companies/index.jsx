import Google from "assets/image/icon/google.svg"
import Netflix from "assets/image/icon/netflix.svg"
import Airbnb from "assets/image/icon/airbnb.svg"
import Amazon from "assets/image/icon/amazon.svg"
import Facebook from "assets/image/icon/facebook.svg"
import Grab from "assets/image/icon/grab.svg"

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const Companies = () => {
  return (
    <div className="container">
      <div className="companies-wrapper">
            <p className="companies-title">Trusted by 5,000+ Companies Worldwide</p>

            <div className="companies-logo">
              <img className="companie-google" src={Google} alt="Google" />
              <img className="companie-netflix" src={Netflix} alt="Netflix" />
              <img className="companie-airbnb" src={Airbnb} alt="Airbnb" />
              <img className="companie-amazon" src={Amazon} alt="Amazon" />
              <img className="companie-facebook" src={Facebook} alt="Facebook" />
              <img className="companie-grab" src={Grab} alt="Grab" />
            </div>
      </div>
    </div>
  );
};

export default Companies;

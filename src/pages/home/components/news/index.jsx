import newsImage1 from "assets/image/newsImage1.png";
import newsImage2 from "assets/image/newsImage2.png";
import newsImage3 from "assets/image/newsImage3.png";
import newsImage4 from "assets/image/newsImage4.png";

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const News = () => {
  return (
    <div className="container">
      <div className="news-wrapper">
        <div className="news-td">
          <h3 className="news-title">Lastest News and Resources</h3>
          <p className="news-desc">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>

        <div className="news-box__wrapper">
          <div className="news-box__left-wrapper">
            <img className="news-image1" src={newsImage1} alt="img" />
            <span className="news-span1">News</span>
            <h4 className="news-box__title">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h4>
            <p className="news-box__desc">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a className="news-box__link" href="/">
              Read more
            </a>
          </div>
          <div className="news-box__right-wrapper">
            <div className="news-box__right-info">
              <div className="news-image__wrap">
                <img className="news-image2" src={newsImage2} alt="img" />
              </div>
              <div className="news-td__wrap">
                <span className="news-span2">PRESS RELEASE</span>
                <h4 className="news-box__right-title">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h4>
                <p className="news-box__right-desc">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </div>
            <div className="news-box__right-info">
              <div className="news-image__wrap">
                <img className="news-image2" src={newsImage3} alt="img" />
              </div>
              <div className="news-td__wrap">
                <span className="news-span3">NEWS</span>
                <h4 className="news-box__right-title">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h4>
                <p className="news-box__right-desc">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </p>
              </div>
            </div>
            <div className="news-box__right-info">
              <div className="news-image__wrap">
                <img className="news-image2" src={newsImage4} alt="img" />
              </div>
              <div className="news-td__wrap">
                <span className="news-span3">NEWS</span>
                <h4 className="news-box__right-title">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h4>
                <p className="news-box__right-desc">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

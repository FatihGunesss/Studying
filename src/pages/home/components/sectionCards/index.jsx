import File from "assets/image/icon/file.svg";
import Calendar2 from "assets/image/icon/calendar2.svg";
import Users from "assets/image/icon/users.svg";

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";

const SectionCards = () => {
  return (
    <div className="container">
      <div className="section-cards__wrapper">
        <div className="section-cards__td">
          <h3 className="section-cards__title">
            <span className="section-cards__span1">All-In-One</span>{" "}
            <span className="section-cards__span2">Cloud Software.</span>
          </h3>
          <p className="section-cards__desc">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>

        <div className="section-cards">
          <div className="section-card">
            <img className="section-cards__logo" src={File} alt="File-logo" />
            <h3 className="section-card__title">
              Online Billing, Invoicing, & Contracts
            </h3>
            <p className="section-card__desc">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div className="section-card">
            <img
              className="section-cards__logo"
              src={Calendar2}
              alt="Calendar-logo"
            />
            <h3 className="section-card__title">
              Easy Scheduling & Attendance Tracking
            </h3>
            <p className="section-card__desc">
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div className="section-card">
            <img className="section-cards__logo" src={Users} alt="Users-logo" />
            <h3 className="section-card__title">Customer Tracking</h3>
            <p className="section-card__desc">
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;

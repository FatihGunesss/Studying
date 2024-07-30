import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";

import Talaba from "assets/image/talaba.png";
import Arrow from "assets/image/icon/arrow.svg";
import Arrow2 from "assets/image/icon/arrow2.svg";

import { Button } from "components";
import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

const Say = () => {
  return (
    <div className="container">
      <div className="say-wrapper">
        <div className="say-left__info">
          <p className="say-testimonial">
            <span className="say-line"></span> TESTIMONIAL
          </p>
          <h3 className="say-title">What They Say?</h3>
          <p className="say-desc">
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className="say-desc">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="say-desc">Are you too? Please give your assessment</p>
          <div className="say-button">
            <Button className={"say-btn"} title={"Write your assessment"} />
            <img className="say-arrow" src={Arrow2} alt="img" />
          </div>
        </div>
        <div className="say-swiper">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={40}
            navigation={{
              nextEl: ".next",
            }}
            keyboard={true}
            modules={[Navigation, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="say-right__info">
                <img className="say-image" src={Talaba} alt="img" />
                <img className="say-image__arrow next" src={Arrow} alt="img" />
                  
                <div className="say-feedback__box">
                  <div className="say-feedback__left-line"></div>
                  <p className="say-feedback__desc">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. Skilline is exactly what our business has
                    been lacking."
                  </p>
                  <div className="say-feedback__rating-info">
                    <p className="say-feedback__name">Sherzod Qayum</p>
                    <div className="say-feedback__stars">
                      <p className="say-feedback__star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <p className="say-feedback__reviews">
                        12 reviews at Yelp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="say-right__info">
                <img className="say-image" src={Talaba} alt="img" />
                <img className="say-image__arrow next" src={Arrow} alt="img" />
                  
                <div className="say-feedback__box">
                  <div className="say-feedback__left-line"></div>
                  <p className="say-feedback__desc">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. Skilline is exactly what our business has
                    been lacking."
                  </p>
                  <div className="say-feedback__rating-info">
                    <p className="say-feedback__name">John Johns</p>
                    <div className="say-feedback__stars">
                      <p className="say-feedback__star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <p className="say-feedback__reviews">
                        22 reviews at Yelp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="say-right__info">
                <img className="say-image" src={Talaba} alt="img" />
                <img className="say-image__arrow next" src={Arrow} alt="img" />
                  
                <div className="say-feedback__box">
                  <div className="say-feedback__left-line"></div>
                  <p className="say-feedback__desc">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. Skilline is exactly what our business has
                    been lacking."
                  </p>
                  <div className="say-feedback__rating-info">
                    <p className="say-feedback__name">Jackie Chan</p>
                    <div className="say-feedback__stars">
                      <p className="say-feedback__star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <p className="say-feedback__reviews">
                        12 reviews at Yelp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="say-right__info">
                <img className="say-image" src={Talaba} alt="img" />
                <img className="say-image__arrow next" src={Arrow} alt="img" />
                  
                <div className="say-feedback__box">
                  <div className="say-feedback__left-line"></div>
                  <p className="say-feedback__desc">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. Skilline is exactly what our business has
                    been lacking."
                  </p>
                  <div className="say-feedback__rating-info">
                    <p className="say-feedback__name">James Bond</p>
                    <div className="say-feedback__stars">
                      <p className="say-feedback__star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <p className="say-feedback__reviews">
                        12 reviews at Yelp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Say;

import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Abbie from "../images/Abbie.png";
import Tom from "../images/Tom.png";
import Taylor from "../images/Taylor.png";
import column from "../images/column.png";
import "./Carousel.css";

const CarouselSlider = () => {
  return (
    <>
      <Carousel itemsToShow={1} className="carousel__button">
        <Item>
          <div className="carousel__container">
            <div className="carousel__first">
              <div className="carousel__img">
                <img src={Abbie} alt="abbie-img" className="abbie__img" />
              </div>
              <div className="carousel__content">
                <div className="carousel__column">
                  <p className="abbie__p">Abbie Harvey</p>
                  <img src={column} alt="column-img" className="column__img" />
                </div>
                <div className="carousel__lorem">
                  <p className="carousel__text_1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <p className="carousel__text"></p>
                  <p className="carousel__text_1">
                    Ut enim ad minim veniam, quis nostrud exercitation do.
                  </p>
                  <p className="carousel__text_1">
                    Lorem ipsum dolor sit amet, consectetur aliqua sed.!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Item>

        <Item>
          <div className="carousel__container">
            <div className="carousel__first">
              <div className="carousel__img">
                <img src={Tom} alt="abbie-img" className="tom__img" />
              </div>
              <div className="carousel__content">
                <div className="carousel__column">
                  <p className="abbie__p">Tom Hiddleston</p>
                  <img src={column} alt="column-img" className="column__img" />
                </div>
                <div className="carousel__lorem">
                  <p className="carousel__text_2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <p className="carousel__text"></p>
                  <p className="carousel__text_2">
                    Ut enim ad minim veniam, quis nostrud exercitation do.
                  </p>
                  <p className="carousel__text_2">
                    Lorem ipsum dolor sit amet, consectetur aliqua sed.!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Item>

        <Item>
          <div className="carousel__container">
            <div className="carousel__first">
              <div className="carousel__img">
                <img src={Taylor} alt="abbie-img" className="taylor__img" />
              </div>
              <div className="carousel__content">
                <div className="carousel__column">
                  <p className="abbie__p">Taylor Swift</p>
                  <img src={column} alt="column-img" className="column__img" />
                </div>
                <div className="carousel__lorem">
                  <p className="carousel__text_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <p className="carousel__text"></p>
                  <p className="carousel__text_3">
                    Ut enim ad minim veniam, quis nostrud exercitation do.
                  </p>
                  <p className="carousel__text_3">
                    Lorem ipsum dolor sit amet, consectetur aliqua sed.!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Item>
      </Carousel>
    </>
  );
};

export default CarouselSlider;

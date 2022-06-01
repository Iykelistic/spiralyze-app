import React from "react";
import "./Images.css";
import HoldHands from "../images/HoldHands.png";
import Smile from "../images/Smile.png";
import Friends from "../images/Friends.png";
import Understand from "../images/Understand.png";
import Arrow from "../images/Arrow.svg";
const Images = () => {
  return (
    <>
      <div className="images__container">
        <div className="images__content">
          <img src={HoldHands} alt="holdhands-img" className="holdhands__img" />
          <div className="images__text">
            <img
              src={Understand}
              alt="we__understand"
              className="images__understand"
            />
          </div>
        </div>
        <div className="images__content_1">
          <img src={Smile} alt="smile-img" className="smile__img" />
        </div>

        <div className="images__content_2">
          <img src={Friends} alt="holdhands-img" className="friends__img" />
        </div>
      </div>

      <div className="lorem__container">
        <div clasName="lorem__first">
          <p className="lorem__first_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="lorem__first_p">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
          <p className="lorem__first_p">
            enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
          </p>

          <p className="lorem__first_p">
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <p className="lorem__first_p">
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>

          <p className="lorem__first_p">veniam, quis nostrud exercitation.</p>
        </div>

        <div clasName="lorem__second">
          <p className="lorem__second_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="lorem__second_p">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
          <p className="lorem__second_p">
            enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
          </p>

          <p className="lorem__second_p">
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <p className="lorem__second_p">
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>

          <p className="lorem__second_p">veniam, quis nostrud exercitation.</p>
        </div>

        <div clasName="lorem__third">
          <p className="lorem__third_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="lorem__third_p">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
          <p className="lorem__third_p">
            enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="lorem__icon">
            <img src={Arrow} alt="arrow-svg" className="arrow__img" />
            <input
              type="text"
              placeholder="92% Success Rate"
              className="lorem__input"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;

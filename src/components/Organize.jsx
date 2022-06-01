import React, { useState } from "react";
import we from "../images/we.png";
import circle from "../images/circle.png";
import lorem from "../images/lorem.png";
import "./Organize.css";

const Organize = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="organize__container">
        <div className="organize__img">
          <img src={we} alt="we-img" className="we__img" />
        </div>

        <div className="organize__lorem">
          <div className="organize__content_1">
            <p className="organize__text_lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="organize__content_2">
            <p className="organize__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <p className="organize__text">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="organize__text">
              Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
              dolor sit amet,
            </p>
            <p className="organize__text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="organize__text">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div className="organize__content_3">
            <p className="organize__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <p className="organize__text">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="organize__text">
              Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
              dolor sit amet,
            </p>
            <p className="organize__text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="organize__text">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className="organize__boxes">
          <div className="organize__box_1">
            <div>
              <input
                type="text"
                placeholder="Needs Assessment"
                className="organize__input"
              />
            </div>

            <div className="organize__treatment">
              <input
                type="text"
                placeholder="Treatment Planning & Placement"
                className="organize__input"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Transportation & Logistics"
                className="organize__input"
              />
            </div>
            <div className="organize__input__text">
              <input
                type="text"
                placeholder="Insurance Advocacy"
                className="organize__input"
              />
            </div>
          </div>

          <div className="organize__box_2">
            <div className="organize__circle">
              <img
                src={circle}
                alt="circle-img"
                className="circle__img"
                onClick={() => setIsShown(true)}
              />
              <div className="organize__hidden">
                <input
                  type="text"
                  placeholder="Insurance Advocacy"
                  className="organize__input"
                />
              </div>

              {isShown && (
                <div className="box__hover">
                  <img src={lorem} alt="polygon-img" className="polygon__img" />
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Employement Advocacy"
                className="organize__input"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Aftercare Planning"
                className="organize__input"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organize;

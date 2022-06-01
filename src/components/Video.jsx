import React from "react";
import VideoPlayer from 'react-video-js-player';
import Visual from "../video/video.mp4";
import Player from "../images/Player.png";
import Checkmark from "../images/Checkmark.png";
import play from "../images/play.png";
import header from "../images/header.png";
import "./Video.css";

const Video = () => {
  const videoSrc = Visual;
  const poster = Player;
    return (
      <div>
        <div className="video__container">
          <div className="video__content">
            <div className="video__holder">
              <p className="video__text">
                {" "}
                Watch <span className="video__span"> the video</span>
              </p>

              <div className="video__watch">
                <div className="video__needs">
                  <img
                    src={Checkmark}
                    alt="check-icon"
                    className="check__icon"
                  />
                  <p className="video__asses">Needs Assesment</p>
                </div>
                <div className="video__lorem">
                  <p className="video__lorem_p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <p className="video__lorem_p">
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  <p className="video__lorem_p">aliqua.</p>
                </div>

                <div className="video__needs">
                  <img
                    src={Checkmark}
                    alt="check-icon"
                    className="check__icon"
                  />
                  <p className="video__asses">Insurance Advocacy</p>
                </div>

                <div className="video__lorem">
                  <p className="video__lorem_x">
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>

                <div className="video__needs">
                  <img
                    src={Checkmark}
                    alt="check-icon"
                    className="check__icon_1"
                  />
                  <p className="video__asses_text">
                    Treatment Planning & Placement
                  </p>
                </div>
                <div className="video__lorem">
                  <p className="video__lorem_l">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className="video__icon">
              {/*<img src={Player} alt="video-player" className="video__player" />*/}
              <VideoPlayer src={videoSrc} poster={Player} playbackRates={[0.5, 1, 3.85, 16 ]}/>
              <div className="video__icon_1">
                {/*<img src={play} alt="video-button" className="video__play" />*/}
              </div>
              <div className="video__getImg">
                <img src={header} alt="video-get" className="video__get" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Video;

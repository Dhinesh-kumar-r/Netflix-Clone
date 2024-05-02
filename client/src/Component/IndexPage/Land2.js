import React from "react";

function Land2() {
  return (
    <>
      <div className="section">
        <div className="container-2 medium-container">
          <div className="part-1 medium-part-1">
            <span className="head-2 head">Enjoy on your TV</span>
            <span className="para">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </span>
          </div>
          <div className="medium-part-2">
            <div className="part-2">
              <div className="video">
                <video autoPlay loop width={"400px"}>
                  <source src="./tv-video.mp4" type="video/mp4"></source>
                </video>
              </div>
              <img
                src="tv.png"
                alt="tv-pic"
                width={"500px"}
                className="tv"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
}

export default Land2;

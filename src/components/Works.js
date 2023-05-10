import React from "react";
import foody from "../img/foody.png";
import weather from "../img/weather.png";
import notetaker from "../img/notetaker.png";
import src from "../img/src.png";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

function Works() {
  return (
    <div className="right">
      <div style={styles.container}>
        <div className="img-wrapper">
          <img src={foody}></img>
        </div>
        <div className="img-wrapper">
          <img src={weather}></img>
        </div>
        <div className="img-wrapper">
          <img src={notetaker}></img>
        </div>
        <div className="img-wrapper">
          <img src={src}></img>
        </div>
      </div>
    </div>
  );
}

export default Works;

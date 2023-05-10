import React from "react";

const styles = {
  right: {
    backgroundColor: "white",
    height: "100%",
    width: "50%",
    marginLeft: "50%",
  },
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
        <div className="img-wrapper"></div>
        <div className="img-wrapper"></div>
        <div className="img-wrapper"></div>
        <div className="img-wrapper"></div>
        <div className="img-wrapper"></div>
        <div className="img-wrapper"></div>
      </div>
    </div>
  );
}

export default Works;

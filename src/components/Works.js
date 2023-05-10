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

  // box: {
  //   border: "1px solid black",
  //   marginTop: "30px",
  //   width: "48%",
  //   height: "30vh",
  // },
};

function Works() {
  return (
    <div style={styles.right}>
      <div style={styles.container}>
        <div className="img-wrapper" style={styles.box}></div>
        <div className="img-wrapper" style={styles.box}></div>
        <div className="img-wrapper" style={styles.box}></div>
        <div className="img-wrapper" style={styles.box}></div>
        <div className="img-wrapper" style={styles.box}></div>
        <div className="img-wrapper" style={styles.box}></div>
      </div>
    </div>
  );
}

export default Works;

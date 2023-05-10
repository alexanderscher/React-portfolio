import React from "react";

const styles = {
  right: {
    backgroundColor: "white",
    height: "100%",
    width: "50%",
    marginLeft: "50%",
  },
  container: {
    marginLeft: "30px",
    marginTop: "30px",
  },
  p: {
    display: "block",
    marginBottom: "10px",
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
  },
};

function Alex() {
  return (
    <div style={styles.right}>
      <div style={styles.container}>
        <p style={styles.p}>ALEX SCHER</p>
        <p style={styles.p}>ABOUT</p>
        <p style={styles.p}>WORKS</p>
        <p style={styles.p}>CONTACT</p>
      </div>
    </div>
  );
}

export default Alex;

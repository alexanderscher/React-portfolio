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

function About() {
  return (
    <div style={styles.right}>
      <div style={styles.container}>
        <p style={styles.p}>PROGRAMMER</p>
        <p style={styles.p}>MUSICIAN</p>
        <p style={styles.p}>CREATIVE</p>
        <p style={styles.p}>BASED IN LOS ANGELES</p>
      </div>
    </div>
  );
}

export default About;

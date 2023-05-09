import React from "react";
import Body from "./Body";

const styles = {
  left: {
    display: "flex",
    backgroundColor: "blue",
    height: "100vh",
    width: "50%",
  },
  container: {
    marginLeft: "30px",
    marginTop: "30px",
    fontWeight: "bold",
  },
  a: {
    display: "block",
    marginBottom: "10px",
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
  },
};

function Header({ handleAboutClick, handleContactClick, handleWorksClick }) {
  return (
    <div style={styles.left}>
      <div style={styles.container}>
        <p style={styles.a}>ALEX SCHER</p>
        <a style={styles.a} onClick={handleAboutClick}>
          ABOUT
        </a>
        <a style={styles.a} onClick={handleContactClick}>
          CONTACT
        </a>
        <a style={styles.a} onClick={handleWorksClick}>
          WORKS
        </a>
      </div>
    </div>
  );
}

export default Header;

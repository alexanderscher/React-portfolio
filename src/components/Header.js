import React from "react";
import Body from "./Body";
import "./styles.css";

const styles = {
  left: {
    backgroundColor: "blue",
    height: "100vh",
    width: "50%",
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "auto",
  },
  container: {
    marginLeft: "30px",
    marginTop: "30px",
  },
  p: {
    display: "block",
    marginBottom: "10px",
    color: "black",
    fontSize: "20px",
  },
};

function Header({ handleAboutClick, handleContactClick, handleWorksClick }) {
  return (
    <div style={styles.left}>
      <div style={styles.container}>
        <p className="header-options" style={styles.p}>
          ALEX SCHER
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleAboutClick}
        >
          ABOUT
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleWorksClick}
        >
          WORKS
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleContactClick}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Works from "./Works";

const styles = {
  content: {
    display: "flex",
  },
};

function Body() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showWorks, setShowWorks] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowWorks(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowWorks(false);
  };

  const handleWorksClick = () => {
    setShowWorks(true);
    setShowContact(false);
    setShowAbout(false);
  };

  return (
    <div style={styles.content}>
      <Header
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
        handleWorksClick={handleWorksClick}
      />
      {showAbout && <About />}
      {showContact && <Contact />}
      {showWorks && <Works />}
    </div>
  );
}

export default Body;

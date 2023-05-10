import React, { useState, useEffect } from "react";

import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Works from "./Works";
import Alex from "./Alex";

const styles = {
  content: {
    display: "flex",
  },
};

function Body() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [showAlex, setShowAlex] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowWorks(false);
    setShowAlex(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowWorks(false);
    setShowAlex(false);
  };

  const handleWorksClick = () => {
    setShowWorks(true);
    setShowContact(false);
    setShowAbout(false);
    setShowAlex(false);
  };

  const handleAlexClick = () => {
    setShowAlex(true);
    setShowWorks(false);
    setShowContact(false);
    setShowAbout(false);
  };

  useEffect(() => {
    setShowAlex(true);
  }, []);

  return (
    <div style={styles.content}>
      <Header
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
        handleWorksClick={handleWorksClick}
        handleAlexClick={handleAlexClick}
      />
      {showAlex && (
        <Alex
          handleAboutClick={handleAboutClick}
          handleContactClick={handleContactClick}
          handleWorksClick={handleWorksClick}
        />
      )}
      {showAbout && <About />}
      {showContact && <Contact />}
      {showWorks && <Works />}
    </div>
  );
}

export default Body;

import React, { useState } from "react";

const styles = {
  right: {
    backgroundColor: "white",
    height: "100%",
    width: "50%",
    marginLeft: "50%",
  },
  input: {
    border: "none",
    borderBottom: "1px solid grey",
    outline: "none",
    display: "block",
    marginTop: "30px",
    minWidth: "90%",
    fontFamily: "Arial",
  },
  textarea: {
    minWidth: "10%",
    outline: "none",
    display: "block",
    marginTop: "30px",
    maxWidth: "90%",
    minWidth: "90%",
    minHeight: "200px",
    fontFamily: "Arial",
    border: "1px solid grey",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
    border: "1px solid grey",
    minWidth: "15%",
    maxWidth: "15%",
    height: "26px",
    backgroundColor: "white",
    color: "grey",
  },
  errorStyle: {
    borderBottom: "1px solid red",
  },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputStyle, setInputStyle] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setInputStyle({ ...styles.input, ...styles.errorStyle });
      return;
    } else {
      alert(`Email sent`);
      setName("");
      setMessage("");
      setEmail("");
      setInputStyle(styles.input);
    }
  };

  return (
    <div style={styles.right}>
      <form style={styles.form}>
        <input
          style={styles.input}
          name="name"
          type="name"
          onChange={handleInputChange}
          placeholder="NAME"
        />
        <input
          style={styles.input}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="EMAIL"
        />
        <textarea
          style={styles.textarea}
          name="message"
          type="message"
          onChange={handleInputChange}
          placeholder="MESSAGE"
        />
        <button
          className="btn"
          style={styles.button}
          onClick={handleFormSubmit}
          type="button"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

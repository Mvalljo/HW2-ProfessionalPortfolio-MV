import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const styles = {
  background: {
    backgroundColor: "#555555"
  }
};

function AboutMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, message });
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email, message })
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
    }
  };
  return (
    <div className="py-5 container">
      <div className="row py-lg-5">
        <div
          className="col-lg-6 col-md-8 mx-auto border border-primary "
          style={styles.background}
        >
          <h2 className="text-center">Contact</h2>
          <p className="text-left">
            <FiPhone fontSize="30px" className="m-3" />
            (210)-630-2578
          </p>
          <p className="text-left">
            <HiOutlineMail fontSize="30px" className="m-3" />
            mvallejo14957@yahoo.com
          </p>
          <form onSubmit={submitRequest}>
            <h2 className="text-2xl pt-6 pb-10 text-center font-medium">
              Send a Message
            </h2>
            <div className="d-flex flex-column">
              <label className="mb-2" htmlFor="Email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="mb-4 text-dark"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label className="mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                type="text"
                className="mb-4 text-dark"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
              <button className="bg-primary rounded mb-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

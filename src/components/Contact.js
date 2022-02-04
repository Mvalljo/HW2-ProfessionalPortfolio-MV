import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const styles = {
  background: {
    backgroundColor: "#555555"
  }
};

function AboutMe() {
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
          <form
            action="https://formsubmit.co/917f416764b6c9ebf859d22ab47c261f"
            method="POST"
          >
            <h2 className="text-2xl pt-6 pb-10 text-center font-medium">
              Send a Message
            </h2>
            <div className="d-flex flex-column">
              <label className="mb-2" htmlFor="Name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="mb-4 text-dark"
                required
              />
              <label className="mb-2" htmlFor="Email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="mb-4 text-dark"
                required
              />
              <label className="mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                type="text"
                className="mb-4 text-dark"
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

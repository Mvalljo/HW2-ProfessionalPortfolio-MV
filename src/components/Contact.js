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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

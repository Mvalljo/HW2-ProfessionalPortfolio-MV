import React, {useRef} from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const styles = {
  background: {
    backgroundColor: "#555555"
  }
};

function AboutMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6f8o75z",
        "template_0d1rs1i",
        form.current,
        "3jrbxKH52s_qLdEAy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
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
            
          </p>
          <p className="text-left">
            <HiOutlineMail fontSize="30px" className="m-3" />
            mvallejo14957@yahoo.com
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="text-2xl pt-6 pb-10 text-center font-medium">
              Send a Message
            </h2>
            <div className="d-flex flex-column">
              <label className="mb-2">
                Name:
              </label>
              <input
                type="text"
                name="from_name"
                className="mb-4 text-dark"
                required
              />
              <label className="mb-2">
                Email:
              </label>
              <input
                type="email"
                name="from_email"
                className="mb-4 text-dark"
                required
              />
              <label className="mb-2">
                Message
              </label>
              <textarea
                name="message"
                type="text"
                className="mb-4 text-dark"
                required
              />
              <button
                className="bg-primary rounded mb-2"
                type="submit"
                value="Send"
              >
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

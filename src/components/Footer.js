import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const styles = {
  footer: {
    backgroundColor: "#555555"
  }
};

function Footer() {
  return (
    <footer id="contact" className="footer text-center" style={styles.footer}>
      <ul className="pb-3 pl-1">
        <li>
          <a href="https://github.com/Mvalljo">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maria-vallejo-8237a41a6/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://stackexchange.com/users/23686237/maria-vallejo">
            <BsStackOverflow />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

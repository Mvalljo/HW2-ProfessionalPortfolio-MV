import React from "react";

const styles = {
  footer: {
    backgroundColor: "#555555"
  }
};

function Footer() {
  return (
    <footer id="contact" className="text-center" style={styles.footer}>
      <h2>Contact Me</h2>
      <ul className="pb-3 pl-1">
        <li>
          <span className="fa fa-phone"></span>
          <a href="#">(210)630-2578</a>
        </li>
        <li>
          <span className="fa fa-paper-plane"></span>
          <a href="#">mvallejo14957@yahoo.com</a>
        </li>
        <li>
          <span className="fa fa-github"></span>
          <a href="https://github.com/Mvalljo">Github</a>
        </li>
        <li>
          <span className="fa fa-linkedin-square"></span>
          <a href="https://www.linkedin.com/in/maria-vallejo-8237a41a6/">
            Linkdln
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
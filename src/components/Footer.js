import React from "react";

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
          <span className="fa fa-github"></span>
          <a href="https://github.com/Mvalljo">Github</a>
        </li>
        <li>
          <span className="fa fa-linkedin-square"></span>
          <a href="https://www.linkedin.com/in/maria-vallejo-8237a41a6/">
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
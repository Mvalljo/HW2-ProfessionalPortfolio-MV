import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

function Footer() {
  return (
    <footer id="contact" className="footer text-center">
      <ul className="pb-3 pl-1">
        <li>
          <a href="https://github.com/Mvalljo">
            <BsGithub fontSize="40px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maria-vallejo-8237a41a6/">
            <BsLinkedin fontSize="40px" />
          </a>
        </li>
        <li>
          <a href="https://stackexchange.com/users/23686237/maria-vallejo">
            <BsStackOverflow fontSize="40px" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

import React from "react";
// import{faFontAwesome} from "@fortawesome/free-regular-svg-icons";
// import {faFontAwesome} from "@fortawesome/free-solid-svg-icons";
const HeaderSocials = () => {
  return (
    <div>
      <div className="home__socials">
        <a
          href="https://www.instagram.com"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
            <i class="fa fa-facebook"></i>
        </a>

        <a
          href="https://www.twitter.com"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.behance.com"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i class="fa-brands fa-behance"></i>
        </a>
        <a
          href="https://www.dribbble.com"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i class="fa-brands fa-dribbble"></i>
        </a>

        <a
          href="https://www.pinterest.com"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i class="fa-brands fa-pinterest"></i>
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;

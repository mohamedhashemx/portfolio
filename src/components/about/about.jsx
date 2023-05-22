import React from "react";
import "./about.css";
import About from "../../assets/avatar-2.svg";
import HTMLImg from "@/../../public/assets/images/free-html-5728485-4781249.png";
import Css from "@/../../public/assets/images/css-3.svg";
import JS from "@/../../public/assets/images/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png";
import ReactIMG from "@/../../public/assets/images/download.png";
import bootstrap from "@/../../public/assets/images/download1.png";

function about() {
  return (
    <>
    <section className="about container section " id="about ">
      <h2 className="section__title">
        About Me
        <div className="about__container grid">
          <img src={About} alt="##" className="about__img" />
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                I am <span>Mohamed hashem</span>, web developer from giza,
                Egypt. I have rich experience in web site design and
                building and customization, also I am good at WordPress.
              </p>
              <a href="#download" className="btn">
                Download cv
              </a>
              <div className="about__skills grid">
                <h1 className="skills__list grid">Skills</h1>
                <ul className="skills__list1 grid">
                  <li className="skills__list1__item">
                    <img
                      src={HTMLImg}
                      alt="HTML"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                    HTML5
                  </li>
                  <li className="skills__list1__item">
                    <img
                      src={Css}
                      alt="CSS"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                    CSS3
                  </li>
                  <li className="skills__list1__item">
                    <img
                      src={JS}
                      alt="JS"
                      style={{
                        widith: "50px",
                        height: "50px",
                      }}
                    />
                    JAVASCRIPT
                  </li>
                  <li className="skills__list1__item">
                    <img
                      src={ReactIMG}
                      alt="react"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                    REACT JS
                  </li>
                  <li className="skills__list1__item">
                    <img
                      src={bootstrap}
                      alt="bootStrap"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                    BOOTSTRAP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </section>
    
    </>
    
    
  );
}

export default about;

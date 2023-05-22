import React from "react";
import "./home.css";
import me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
// import Scrolldown from "./Scrolldown";
import Shapes from "./Shapes";

function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={me} alt="logo" className="home__img" />
          <h1 className="home__name">mohamed hashem</h1>
          <span className="home__education"> I'm a front end developer</span>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire me
          </a>
          {/* <Scrolldown/> */}
        </div>
        <Shapes />
      </section>
    </>
  );
}

export default Home;

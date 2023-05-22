import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/about";
// import Blog from "./components/blog/blog";
// import Contact from "./components/contact/contact";
// import Portfolio from "./components/portfolio/portfolio";
// import Resume from "./components/resume/resume";
import Service from "./components/service/service";
import Sidebar from "./components/sidebar/Sidebar";
// import Testimonial from "./components/testimonials/testimonial";
const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        {/* <Blog /> */}
        {/* <Contact /> */}
        {/* <Portfolio /> */}
        <Service />
        {/* <Resume /> */}
        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default App;

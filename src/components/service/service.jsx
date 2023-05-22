import React from "react";
import "./service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];
function service() {
  return (
    <>
      <section className="service container section">
        <h2 className="section__title">Services</h2>
        <div className="service__container grid">
          {data.map(({id,image,title,description})=>{
            return(
              <div className="service__card" key={id}>
                <img src={image} alt="##" className="service__img" />
                <h3 className="service__title">{title}</h3>
                <p className="service__description">{description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}

export default service;

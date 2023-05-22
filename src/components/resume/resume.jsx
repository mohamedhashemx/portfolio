import React from "react";
import "./resume.css";
import Data from "./Data";
function resume() {
  return (
    <>
      <section className="resume container section">
        <h2 className="section__title">Experience</h2>
        <div className="resume__container grid">
          <div className="timeline grid">
            {Data.map((val, id) => {
              if (val.category === "education") {
                // eslint-disable-next-line react/jsx-no-undef
                return <Card key={id} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default resume;

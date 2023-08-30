import React from "react";
import { tours } from "../data";
import Title from "./Title";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subTitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, name, desc, country, length, price } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{desc}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{length}</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;

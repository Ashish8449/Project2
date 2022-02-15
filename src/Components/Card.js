import React from "react";
import img from "../img/pexels-ivan-samkov-4240580.jpg";

export default function Card() {
  return (
    <div className="col-md-4 col-10 m-auto mt-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

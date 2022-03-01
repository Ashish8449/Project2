import React from "react";
import { Link } from "react-router-dom";

export default function Common(props) {
  return (
    <section className="header mt-4">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row  ">
              <div className="col-md-6 pt-5 pt-lg-0 mt-5 order-lg-1">
                <h1>
                  {props.title} <strong className="brand-name">Us</strong>
                </h1>
                <h2>we are the team of talented developer making websites</h2>
                <div className="mt-4">
                  <Link to="/contact" className="btn-get-started">
                    {" "}
                    {props.btntext}
                  </Link>
                </div>
              </div>
              <div className="col-md-6 pt-5 pt-lg-0  order-1 order-lg-2 headerimg">
                <img
                  src={props.img}
                
                  className="img-fluid animated"
                  alt="homeimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

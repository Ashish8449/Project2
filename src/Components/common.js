import React from 'react'

export default function common(props) {
  return (
    <section className="header mt-4">
    <div className="container-fluid">
      <div className="row ">
        <div className="col-10 mx-auto">
          <div className="row align-items-center ">
            <div className="col-md-6 pt-5 pt-lg-0  order-lg-1">
              <h1>
               { props.title}{" "}
                <strong className="brand-name">Us</strong>
              </h1>
              <h2>we are the team of talented developer making websites</h2>
              <div className="mt-4">
                <a href="" className="btn-get-started">
                  {" "}
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-md-6 pt-5 pt-lg-0  order-1 order-lg-2 headerimg">
              <img
                src={img}
                alt=""
                className="img-fluid animated"
                alt="homeimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

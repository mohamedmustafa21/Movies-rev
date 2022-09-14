import React from "react";

function About() {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-md-6 text-start ">
        <hr />
          <h2>Site <span className="text-success">overview</span></h2>
          <p className="text-muted">This is a website for a programmer who designed it as a small project to learn new things</p>
          <hr />
          <table>
            <thead>Languages ​​used</thead>
            <ul className="text-uppercase">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrab</li>
              <li>Java script</li>
              <li>Protact Route</li>
              <li>Rest Apis</li>
              <li className="text-info">FrameWork ReactJs</li>


            </ul>
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default About;

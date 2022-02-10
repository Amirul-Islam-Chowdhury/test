import React from "react";
import "./intro.css";
import Img from "../../img/me.jpg"

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hi! I am </h2>
          <h1 className="i-name">Amirul  Chowdhury</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">Mobile application</div>
              <div className="i-title-item"> React </div>
              <div className="i-title-item"> Java </div>
            </div>
          </div>

          <div className="i-desc">
            <p>I design amd develop for customer for all sizes, specializing in creating styling modern websites.</p>

          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg">
        <img src={Img} alt="" className="i-img"/>

        </div>
      </div>
    </div>
  );
}

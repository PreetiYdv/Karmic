import React from 'react'
import about1 from "../images/png/about_img1.png"
import about2 from "../images/png/about_img2.png"
import about3 from "../images/png/about_img3.png"

function About() {
  return (
    <div>
      <div className="container myContainer pb-5">
        <h2 className=" ff_Sunflowerlight fc_white fs_lg text-center text-uppercase">
          <span className="about_line">About</span>
        </h2>
        <p className=" fc_white ff_SpacegroteskBold fs_sm mw_570 text-center mx-auto">
          <b>Eros,</b> amet, feugiat sit nec duis. <b>Tellus</b> in faucibus
          consectetur dapibus. Eget sem eget nec tincidunt. Urna nulla
          scelerisque pretium diam aliquam montes, <b>interdum malesuada.</b>{" "}
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <img src={about1} alt="" className="w-100 about_img" />
          </div>
          <div className="col-md-6 col-lg-4">
            <img src={about2} alt="" className="w-100 about_img" />
          </div>
          <div className="col-md-6 col-lg-4">
            <img src={about3} alt="" className="w-100 about_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
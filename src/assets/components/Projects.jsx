import React from "react";
import Slider from "react-slick";
import img1 from "../images/png/project_img1.png";
import img3 from "../images/png/project_img3.png";
import img4 from "../images/png/project_img4.png";
import img5 from "../images/png/project_img5.png";
import img6 from "../images/png/project_img6.png";
import img7 from "../images/png/project_img7.png";
import img8 from "../images/png/project_img8.png";

function Projects() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: false,
    centerPadding: "60px",
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container myContainer py-5 my-5">
        <h2 className=" fc_Black ff_Sunflowerlight fs_lg text-center pt-5 text-uppercase">
          <span className="head_border">Projects</span>
        </h2>
        <p className=" ff_SpacegroteskReg fc_Black fs_sm text-center mw_532 mx-auto pt-2">
          Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
          egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
          id nisl quis vestibulum rhoncus.
        </p>
        <div className="project_slider">
          <Slider {...settings} className="py-4">
            <div className="px-2 project_img">
              <img src={img1} alt="" className=" w-100 " />
            </div>
            <div className="px-2">
              <img src={img8} alt="" className=" w-100 project_img" />
            </div>
            <div className="px-2">
              <img src={img3} alt="" className=" w-100 project_img" />
            </div>
            <div className="px-2">
              <img src={img4} alt="" className=" w-100 project_img" />
            </div>
          </Slider>
        </div>
        <Slider {...settings} className="pb-5 d-none d-xl-block">
          <div className="px-2">
            <img src={img5} alt="" className=" w-100 project_img" />
          </div>
          <div className="px-2">
            <img src={img6} alt="" className=" w-100 project_img" />
          </div>
          <div className="px-2">
            <img src={img7} alt="" className=" w-100 project_img" />
          </div>
          <div className="px-2">
            <img src={img8} alt="" className=" w-100 project_img" />
          </div>
        </Slider>
        <div className=" d-flex justify-content-center pb-3">
          <button className="view_btn fc_Black ff_SunflowerMed mb-5">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

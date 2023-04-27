import React from "react";
import Slider from "react-slick";
import burger from "../images/png/burger.png";
import guitar from "../images/png/guitar.png";
import candleQueen from "../images/png/candle_queen.png";
import img4 from "../images/png/upcoming_img_4.png";

function UpcomingProjects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container myContainer pt-5 mt-4">
        <h2 className=" text-center fc_white ff_Sunflowerlight fs_lg mb-5 text-uppercase">
          <span className="head_line">Upcoming Projects</span>
          {" "}
        </h2>
        <Slider {...settings}>
          <div className=" px-3">
            <div className="candle_card">
              <img src={burger} alt="" className="w-100" />
              <div className="d-flex justify-content-between pt-3">
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  Candle Queen
                </p>
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  15 : 54 : 12
                </p>
              </div>
              <p className=" fs_sm fc_white ff_SpacegroteskLight mb-0">NFT</p>
            </div>
          </div>
          <div className=" px-3">
            <div className="candle_card">
              <img src={guitar} alt="" className="w-100" />
              <div className="d-flex justify-content-between pt-3">
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  Candle Queen
                </p>
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  15 : 54 : 12
                </p>
              </div>
              <p className=" fs_sm fc_white ff_SpacegroteskLight mb-0">NFT</p>
            </div>
          </div>
          <div className=" px-3">
            <div className="candle_card">
              <img src={candleQueen} alt="" className="w-100" />
              <div className="d-flex justify-content-between pt-3">
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  Candle Queen
                </p>
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  15 : 54 : 12
                </p>
              </div>
              <p className=" fs_sm fc_white ff_SpacegroteskLight mb-0">NFT</p>
            </div>
          </div>
          <div className=" px-3">
            <div className="candle_card">
              <img src={img4} alt="" className="w-100" />
              <div className="d-flex justify-content-between pt-3">
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  Candle Queen
                </p>
                <p className=" fc_white ff_SunflowerMed fs_md mb-0">
                  15 : 54 : 12
                </p>
              </div>
              <p className=" fs_sm fc_white ff_SpacegroteskLight mb-0">NFT</p>
            </div>
          </div>
        </Slider>
        <div className="d-flex align-items-center justify-content-center pt-5">
          <button className=" ff_SunflowerMed fc_white viewall_btn">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default UpcomingProjects;

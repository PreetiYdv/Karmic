import React from "react";
import guitar from "../images/png/guitar.png";
import candleQueen from "../images/png/candle_queen.png";
import onion from "../images/png/onion.png";
import circle from "../images/svg/header_circle.svg";
import arrow from "../images/svg/downArrow.svg";

function Header() {
  return (
    <>
      <div className="container myContainer py-5 position-relative">
        <img src={arrow} alt="" className="arrow_position" />
        <div className="row justify-content-lg-between justify-content-center align-items-center pb-5 pb-lg-0">
          <div className="col-lg-6 pt-5">
            <h2 className=" fc_white ff_Sunflowerlight pt-5 mt-5 fs_xl text-uppercase">
              <span>We are believers decentralization </span>
              <span>
                and
                <span className="web_line"> Web3</span> .
              </span>
            </h2>
            <p className=" fc_white ff_SpacegroteskReg fs_sm">
              Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla
              erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus
              dis malesuada turpis non consequat ac.{" "}
            </p>
            <div className="d-flex mt-5 pb-5 mb-5">
              <button className="started_btn ff_SunflowerMed fc_Black fs_sm me-3">
                Get Started
              </button>
              <button className="read_btn ff_Sunflowerlight fc_white fs_sm ms-3">
                Read More
              </button>
            </div>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 pt-lg-5 pb-5 pb-lg-0">
            <div className=" position-relative">
              <img src={circle} alt="circle" className="circle_position" />

              <div className="candle_card mt-sm-5 queen_position z-index-10 position-relative mw_297 mx-auto">
                <img src={candleQueen} alt="" className="w-100 mw_265" />
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
              <div className="candle_card candle_card2 mt-sm-5">
                <img src={guitar} alt="" className="w-100 mw_265" />
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
              <div className="candle_card candle_card3 mt-sm-5">
                <img src={onion} alt="" className="w-100 mw_265" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

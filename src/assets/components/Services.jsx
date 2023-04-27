import React from "react";
import Slider from "react-slick";
import note from "../images/svg/clarity_contract-line.svg";
import proof from "../images/svg/icon-park_file-success-one.svg";
import nft from "../images/svg/ant-design_solution-outlined.svg";
import pc from "../images/svg/carbon_cloud-service-management.svg";

function Services() {
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
          slidesToShow: 1,
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
      <div className="container myContainer py-5">
        <h2 className=" ff_Sunflowerlight fc_white fs_lg text-center pb-5 text-uppercase">
         <span className="services_line">Services</span> 
        </h2>
          <Slider {...settings}>
          <div className=" pt-4 px-3">
            <div class="box">
              <div class="circle"></div>
              <div class="layer"></div>
              <img src={note} alt="" class="mb-4" />
              <h3 class=" ff_SpacegroteskBold fc_white fs_md">
                Smart Contract
              </h3>
              <p class=" ff_SpacegroteskReg fc_white fs_sm">
                Eu faucibus libero leo, malesuada justo, tortor pellentesque
                quis sit. Dui viverra at odio sodales duis integer rhoncus
                pulvinar. Commodo massa aliquam.
              </p>
            </div>
          </div>
          <div className=" pt-4 px-3">
            <div class="box">
              <div class="circle"></div>
              <div class="layer"></div>
              <img src={proof} alt="" class="mb-4" />
              <h3 class=" ff_SpacegroteskBold fc_white fs_md">Proof</h3>
              <p class=" ff_SpacegroteskReg fc_white fs_sm">
                Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo
                ultricies quam vitae pellentesque tellus felis. Elementum tortor
                quis est morbi ullamcorper.
              </p>
            </div>
          </div>
          <div className=" pt-4 px-3">
            <div class="box">
              <div class="circle"></div>
              <div class="layer"></div>
              <img src={nft} alt="" class="mb-4" />
              <h3 class=" ff_SpacegroteskBold fc_white fs_md">NFT solutions</h3>
              <p class=" ff_SpacegroteskReg fc_white fs_sm">
                Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
                egestas vehicula tellus. Molestie adipiscing diam nibh lectus.
                Magna id nisl quis vestibulum rhoncus.
              </p>
            </div>
          </div>
          <div className=" pt-4 px-3">
            <div class="box">
              <div class="circle"></div>
              <div class="layer"></div>
              <img src={pc} alt="" class="mb-4" />
              <h3 class=" ff_SpacegroteskBold fc_white fs_md">Support</h3>
              <p class=" ff_SpacegroteskReg fc_white fs_sm">
                Tellus id et fringilla auctor. Ac viverra ullamcorper nec,
                senectus at nulla. Metus sem egestas volutpat cras phasellus
                cursus augue sagittis, enim. Sit et cras.
              </p>
            </div>
          </div>
          </Slider>
      </div>
    </>
  );
}

export default Services;

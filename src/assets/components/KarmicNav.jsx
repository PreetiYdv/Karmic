import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import karmicLogo from "../images/svg/karmic_logo.svg";

function KarmicNav() {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <nav>
        <div className="container myContainer d-flex justify-content-between align-items-center pt-4">
          <a href="#">
            <img src={karmicLogo} alt="" />
          </a>

          <ul
            className={
              toggle
                ? "showNav px-0 myNav"
                : "d-flex gap-5 mb-0 px-0 align-items-center myNav"
            }
          >
            <li>
              <a
                onClick={shownavBar}
                href="#LetsFly"
                className="ff_SunflowerBold fs_sm fc_white text-decoration-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_SunflowerBold fs_sm fc_white text-decoration-none"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_SunflowerBold fs_sm fc_white text-decoration-none"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_SunflowerBold fs_sm fc_white text-decoration-none"
              >
                About
              </a>
            </li>
            <li>
              <button
                className={
                  toggle
                    ? "d-block connect_btn ff_SunflowerBold fs_sm fc_black"
                    : "d-lg-none connect_btn ff_SunflowerBold fs_sm fc_black"
                }
              >
                Connect Wallet
              </button>
            </li>
          </ul>
          <button
            className={
              toggle
                ? "d-none connect_btn ff_SunflowerBold fs_sm fc_black"
                : "d-lg-block d-none connect_btn ff_SunflowerBold fs_sm fc_black"
            }
          >
            Connect Wallet
          </button>

          <span onClick={shownavBar} className="nav_btn d-lg-none z-index-50">
            {toggle ? (
              <GrClose className="stroke_white" />
            ) : (
              <TiThMenuOutline className="fc_white" />
            )}
          </span>
        </div>
      </nav>
    </>
  );
}

export default KarmicNav;

import React from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img from "../../assets/Popular-img1.jpg";
import "./popular.css";

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From Historical cities to Natural spectaculars, come see the best
              of the world!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img} alt="Image Title" />
              <div className="overlayInfo">
                <h3>Some Text</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className="icon" />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;

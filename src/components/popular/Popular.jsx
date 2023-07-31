import React from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img1 from "../../assets/Popular-img1.jpg";
import img2 from "../../assets/Popular-img2.jpg";
import img3 from "../../assets/Popular-img3.jpg";
import img4 from "../../assets/Popular-img4.jpg";
import img5 from "../../assets/Popular-img5.jpg";
import "./popular.css";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
  },
];

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
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;

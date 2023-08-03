import React, { useEffect } from "react";
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../assets/Offer-img1.jpg";
import img2 from "../../assets/Offer-img2.jpg";
import img3 from "../../assets/Offer-img3.jpg";
import img4 from "../../assets/Offer-img4.jpg";
import "./offer.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Offers = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Machu Picchu",
    location: "Peru",
    price: "$7,452",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Guanajuato",
    location: "Mexico",
    price: "$5,450",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    price: "$6,540",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Taj Mahal",
    location: "India",
    price: "$3,800",
  },
];

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Special Offers
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            From historical cities to natural spectaculars, come see the best of
            the world!
          </p>
        </div>
        <div className="mainContent grid">
          {Offers.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singleOffer"
              >
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {location}</small>
                  </div>

                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;

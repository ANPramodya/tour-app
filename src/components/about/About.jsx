import React, { useEffect } from "react";
import img1 from "../../assets/Mountain-img.png";
import img2 from "../../assets/Climber-img.png";
import img3 from "../../assets/Customer-img.png";
import video from "../../assets/video.mp4";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why Hickings</h2>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={img1} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythems of daily routine life reduces stress and improves health
              and well-bieng.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={img2} alt="" />
            <h3>1000+ Hickings</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythems of daily routine life reduces stress and improves health
              and well-bieng.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={img3} alt="" />
            <h3>2000+ Customers</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythems of daily routine life reduces stress and improves health
              and well-bieng.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wonderfull House Experience nin there!</h2>
              <p>
                the Adventure subranking is based on an equally weighted average
                of scores from five countries
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted typeof="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

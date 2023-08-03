import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../assets/Blog-img1.jpg";
import img2 from "../../assets/Blog-img2.jpg";
import img3 from "../../assets/Blog-img3.jpg";
import img4 from "../../assets/Blog-img4.jpg";
import "./blog.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: "Beautiful Morocco, Let us tavel!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus culpa optio quisquam quas perferendis libero soluta illum itaque aliquid doloribus est nobis numquam nemo.",
  },
  {
    id: 2,
    postImage: img2,
    title: "Romantic moments under Eiffel Tower",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus culpa optio quisquam quas perferendis libero soluta illum itaque aliquid doloribus est nobis numquam nemo.",
  },
  {
    id: 3,
    postImage: img3,
    title: "Let us have an adventure outside Tunisia",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus culpa optio quisquam quas perferendis libero soluta illum itaque aliquid doloribus est nobis numquam nemo.",
  },
  {
    id: 4,
    postImage: img4,
    title: "Best Country in East Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus culpa optio quisquam quas perferendis libero soluta illum itaque aliquid doloribus est nobis numquam nemo.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An Insight tot the incredible experience in the world.
          </p>
        </div>
        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>
                <a
                  href=""
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

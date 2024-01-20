import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: (
      <button className="slick-prev" aria-label="Previous" type="button">
        Previous
      </button>
    ),
    nextArrow: (
      <button className="slick-next" aria-label="Next" type="button">
        Next
      </button>
    ),
  };
  return (
    <section className="slider">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="slide-item">
          <img src="design_img/slide-1.jpg" alt="" />
          <div id="slider-caption-1" className="nivo-html-caption">
            <div className="container">
              <div className="row">
                <div className="hero-slider-content col-xs-12">
                  <p
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Global Society of Ayush
                  </p>
                  <span
                    className="brdr wow animated fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  ></span>
                  <h1
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    For Ayurvedic & <br />
                    Healthcare courses
                  </h1>
                  <span
                    className="s-block wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  ></span>
                  <a
                    href=""
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide-item">
          <img src="design_img/slide-2.jpg" alt="" />
          <div id="slider-caption-2" className="nivo-html-caption">
            <div className="container">
              <div className="row">
                <div className="hero-slider-content col-xs-12">
                  <p
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Empowering Success
                  </p>
                  <span
                    className="brdr wow animated fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  ></span>
                  <h1
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Best Learning Experience <br />
                    for You
                  </h1>
                  <span
                    className="s-block wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  ></span>
                  <a
                    href=""
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide-item">
          <img src="design_img/slide-3.jpg" alt="" />
          <div id="slider-caption-3" className="nivo-html-caption">
            <div className="container">
              <div className="row">
                <div className="hero-slider-content col-xs-12">
                  <p
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Empowering Success
                  </p>
                  <span
                    className="brdr wow animated fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  ></span>
                  <h1
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Best Learning Experience <br />
                    for You
                  </h1>
                  <span
                    className="s-block wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  ></span>
                  <a
                    href=""
                    className="wow animated zoomIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomeSlider;

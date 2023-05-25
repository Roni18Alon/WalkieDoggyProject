import React from 'react';
import img_big_1 from "../dist/images/dogger_img_big_1.jpg";


const AboutSection = () => {
  return (
    <section className="site-section" id="about-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-5 align-self-center mr-auto text-left heading-section mb-5">
          <div className="paws ml-4">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-3">About Us</h2>
          <p className="lead">
            Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="text-muted mb-4">
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country,
            in which roasted parts of sentences fly into your mouth.
          </p>
          <ul className="list-unstyled ul-paw primary mb-0">
            <li>A small river named Duden flows</li>
            <li>It is a paradisematic country</li>
            <li>Roasted parts of sentences fly</li>
          </ul>
        </div>
        <div
          className="col-lg-6 text-left heading-section mb-5"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <a
            data-fancybox=""
            data-ratio="1.5"
            href="https://vimeo.com/317571768"
            className="video-img"
          >
            <span className="play">
              <span className="icon-play" />
            </span>
            <img src={img_big_1} alt="" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
import React from "react";

const WelcomeSection = () => {
  return (
    <section className="site-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center heading-section mb-5">
            <div className="paws">
              <span className="icon-paw" />
            </div>
            <h2 className="text-black mb-2">
              Welcome to Walkie Doggy Pet Care
            </h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row hover-1-wrap mb-5 mb-lg-0">
          <div className="col-12">
            <div className="row">
              <div
                className="mb-4 mb-lg-0 col-lg-6 order-lg-2"
                data-aos="fade-right"
              >
                <a href="/#" className="hover-1">
                  <img src={img_sm_3} alt="" className="img-fluid" />
                </a>
              </div>
              <div
                className="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1"
                data-aos="fade-left"
              >
                <h2 className="text-black">Love &amp; Care</h2>
                <p className="mb-4">
                  Far far away, behind the word mountains, Separated they live
                  in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row hover-1-wrap mb-5 mb-lg-0">
          <div className="col-12">
            <div className="row">
              <div className="mb-4 mb-lg-0 col-lg-6" data-aos="fade-left">
                <a href="/#" className="hover-1">
                  <img src={img_sm_1} alt="" className="img-fluid" />
                </a>
              </div>
              <div
                className="col-lg-5 ml-auto align-self-center"
                data-aos="fade-right"
              >
                <h2 className="text-black">Fearsome</h2>
                <p className="mb-4">
                  Far far away, behind the word mountains, Separated they live
                  in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row hover-1-wrap">
          <div className="col-12">
            <div className="row">
              <div
                className="mb-4 mb-lg-0 col-lg-6 order-lg-2"
                data-aos="fade-right"
              >
                <a href="/#" className="hover-1">
                  <img src={img_sm_2} alt="" className="img-fluid" />
                </a>
              </div>
              <div
                className="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1"
                data-aos="fade-left"
              >
                <h2 className="text-black">Beautiful</h2>
                <p className="mb-4">
                  Far far away, behind the word mountains, Separated they live
                  in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

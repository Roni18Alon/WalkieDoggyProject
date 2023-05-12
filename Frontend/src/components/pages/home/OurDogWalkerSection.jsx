import React from "react";
import trainer_1 from "../dist/images/dogger_trainer_1.jpg";
import trainer_2 from "../dist/images/dogger_trainer_2.jpg";
import trainer_3 from "../dist/images/dogger_trainer_3.jpg";

const OurDogWalkerSection = () => {
  return (
    <section className="site-section primary trainers" id="trainers-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-7 text-center heading-section mb-5">
            <div className="paws white">
              <span className="icon-paw" />
            </div>
            <h2 className="mb-2 heading">Our Dog Walkers</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 mb-4 col-lg-4"
            data-aos="fade-up"
            data-aos-delay=""
          >
            <div className="trainer">
              <figure>
                <img src={trainer_1} alt="" className="img-fluid" />
              </figure>
              <div className="px-md-3">
                <h3>Jessica White</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="trainer">
              <figure>
                <img src={trainer_2} alt="" className="img-fluid" />
              </figure>
              <div className="px-md-3">
                <h3>Valerie Elash</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-4"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="trainer">
              <figure>
                <img src={trainer_3} alt="" className="img-fluid" />
              </figure>
              <div className="px-md-3">
                <h3>Alicia Jones</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDogWalkerSection;

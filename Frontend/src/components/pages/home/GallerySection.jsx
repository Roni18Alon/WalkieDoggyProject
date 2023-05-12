import React from 'react';
import img_sm_1 from "../dist/images/dogger_img_sm_1.jpg";
import img_sm_2 from "../dist/images/dogger_img_sm_2.jpg";
import img_sm_3 from "../dist/images/dogger_img_sm_3.jpg";
import img_sm_4 from "../dist/images/dogger_img_sm_4.jpg";
import img_sm_5 from "../dist/images/dogger_img_sm_5.jpg";
import img_sm_6 from "../dist/images/dogger_img_sm_6.jpg";

const GallerySection = () => {
  return (
    <section className="site-section" id="gallery-section">
          <div className="container-fluid">
            <div className="row justify-content-center" data-aos="fade-up">
              <div className="col-lg-6 text-center heading-section mb-5">
                <div className="paws">
                  <span className="icon-paw" />
                </div>
                <h2 className="text-black mb-2">Photo Gallery</h2>
              </div>
            </div>
            <div className="row no-gutters">
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_1} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_2} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_3} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_4} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_5} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_6} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_1} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_2} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_3} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_4} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_5} alt="" className="img-fluid" />
              </a>
              <a
                className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block"
                data-aos="fade-up"
                data-aos-delay={100}
                href="/#"
                data-fancybox="gal"
              >
                <img src={img_sm_6} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </section>
  )
}

export default GallerySection
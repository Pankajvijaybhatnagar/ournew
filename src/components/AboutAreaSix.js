import React from 'react';

const AboutAreaSix = () => {
  return (
    <>
      {/* ================== AboutAreaSix start  ==================*/}
      <div className="about-area about-area-margin-bottom pd-top-120">
        <div className="container">
          <div className="box-shadow bg-white z-index-2 border-radius-5 p-xl-5 p-4">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-thumb-inner pe-xl-5 pb-5 me-xl-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <img
                    className="main-img"
                    src="assets/img/about/pic2.jpeg"
                    alt="Company Overview"
                  />
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mt-5 mt-lg-0 mb-0">
                  <h6 className="sub-title-sky-blue">ABOUT OUR COMPANY</h6>
                  <h2 className="title">Empowering Businesses Through Technology</h2>
                  <p className="content">
                    We specialize in cutting-edge web development, financial solutions, and news platforms, helping businesses thrive in the digital landscape. Our commitment to innovation and excellence drives us to create impactful solutions tailored to your needs.
                  </p>
                  <p className="small-title">
                    From intuitive website development to strategic financial consulting, we bridge the gap between technology and business success.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/25.png"
                            alt="Website Development"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Website Development</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/26.png"
                            alt="Financial Consulting"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Financial Consulting</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/27.png"
                            alt="News & Insights"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">News & Insights</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== AboutAreaSix End  ==================*/}
    </>
  );
};

export default AboutAreaSix;

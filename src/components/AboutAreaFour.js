const AboutAreaFour = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div className="about-area about-area_4 pd-top-120 pd-bottom-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner p-xl-5 pt-4 "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img
                  className="animate-main-img"
                  src="assets/img/about/14.png"
                  alt="img"
                />
                <img
                  className="main-img m-md-4"
                  src="assets/img/about/13.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center "
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  Empowering Businesses with <span>Technology & Innovation</span>
                </h2>
                <p className="content mb-4 mb-xl-5">
                  At Digi1Xprt, we specialize in cutting-edge software development, 
                  digital marketing, and financial solutions. Our expertise helps 
                  businesses thrive in the digital era with scalable technology and 
                  data-driven marketing strategies.
                </p>
                <div className="media box-shadow p-3 border-radius-5 mb-3">
                  <div className="media-left me-3">
                    <img src="assets/img/icon/31.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <div className="single-progressbar">
                      <h6>Software Development</h6>
                      <div className="skill">
                        <div
                          style={{ width: '90%' }}
                          className="skill-bar skill1 wow slideInLeft animated"
                        ></div>
                        <p className="skill-count1">
                          <span className="counter">90</span> %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media box-shadow p-3 border-radius-5 mb-3">
                  <div className="media-left me-3">
                    <img src="assets/img/icon/32.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <div className="single-progressbar">
                      <h6>Digital Marketing </h6>
                      <div className="skill">
                        <div
                          style={{ width: '80%' }}
                          className="skill-bar skill1 wow slideInLeft animated"
                        ></div>
                        <p className="skill-count1">
                          <span className="counter">80</span> %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaFour;

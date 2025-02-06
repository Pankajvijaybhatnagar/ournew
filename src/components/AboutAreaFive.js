import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five Start ===============*/}
      <div className="about-area about-area_5 pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                {/* <img
                  className="animate-img-3 z-index-2 top_image_bounce"
                  src="assets/img/about/digital-marketing.png"
                  alt="Digital Marketing"
                /> */}
                <img
                  className="main-img"
                  src="assets/img/about/aa.jpeg"
                  alt="Financial News"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h6 className="sub-title-sky-blue">ABOUT US</h6>
                <h2 className="title">
                  Stay Informed. Stay Ahead.
                </h2>
                <p className="content mb-4">
                  We bring you the latest insights on financial trends, digital 
                  marketing strategies, and business intelligence to help you 
                  make informed decisions in a rapidly evolving market.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> Expert Financial Analysis
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> Digital Marketing Insights
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> Latest Business News
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> Strategic Investment Tips
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="btn btn-base-color border-radius-5"
                  href="/about"
                >
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;

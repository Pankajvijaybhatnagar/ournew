import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutAreaSeven = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area pd-top-120 pd-bottom-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="main-img m-md-4"
                  src="assets/img/about/32.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0 mb-0 ps-lg-4">
                <h6 className="bg-none color-base mb-3">ABOUT US</h6>
                <h2 className="title">
                  Securing Your Digital Future with Advanced Solutions
                </h2>
                <p className="content mb-4">
                  At Digi1Xprt, we specialize in proactive cybersecurity measures, ensuring businesses stay ahead of potential threats. Our expertise in security protocols and risk management helps prevent cyber attacks before they happen.
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <img src="assets/img/about/31.png" alt="img" />
                  </div>
                  <div className="col-md-9 align-self-center">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Identifying vulnerabilities before exploitation
                      </li>
                      <li>
                        <FaCheckCircle /> Implementing advanced security solutions
                      </li>
                      <li>
                        <FaCheckCircle /> Enhancing data protection and privacy
                      </li>
                      <li>
                        <FaCheckCircle /> Providing continuous threat monitoring
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  <strong>
                    Protect your business with cutting-edge websecurity strategies.
                  </strong>
                </p>
                <Link className="btn btn-base mt-0 me-3" href="#">
                  Explore Now
                </Link>
                {/* <img src="assets/img/about/33.png" alt="img" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};


export default AboutAreaSeven;

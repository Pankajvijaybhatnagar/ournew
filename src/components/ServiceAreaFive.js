import Link from 'next/link';
import React from 'react';

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area service-area_5 bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title-sky-blue">Our Best Services</h6>
                <h2 className="title">
                  Empowering Businesses with Web, Finance, and News Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/7.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">Website Development</Link>
                  </h5>
                  <p className="mb-0">
                    Building responsive and high-performance websites tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/8.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">E-commerce Solutions</Link>
                  </h5>
                  <p className="mb-0">
                    Creating seamless online shopping experiences with secure payment integration.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/9.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">Custom Web Apps</Link>
                  </h5>
                  <p className="mb-0">
                    Developing powerful and scalable web applications for various industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="assets/img/about/pic.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/10.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">Financial Consulting</Link>
                  </h5>
                  <p className="mb-0">
                    Providing expert financial advice to help businesses grow and manage risks.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/11.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">Investment Strategies</Link>
                  </h5>
                  <p className="mb-0">
                    Helping clients make informed investment decisions with data-driven strategies.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/12.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link href="/service-details">News & Insights</Link>
                  </h5>
                  <p className="mb-0">
                    Delivering real-time financial and business news to keep you ahead in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;

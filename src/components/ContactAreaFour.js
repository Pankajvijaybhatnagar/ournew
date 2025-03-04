import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ContactAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className="contact-area pd-top-90 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-lg-end "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner ms-xl-5 p-xl-5 pt-4 ">
                <img
                  className="main-img m-4"
                  src="assets/img/about/19.gif"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-first "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">GET IN TOUCH</h6>
                <h2 className="title">
                  Take Your Business <span>to New Heights</span> with Us!
                </h2>
                <p className="content">
                  Looking for expert digital marketing or software development solutions?  
                  Our team at Digi1Xprt is here to help you grow and achieve success.  
                  Reach out to us today!
                </p>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Your Contact Number" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Your Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <textarea placeholder="How can we help you?" defaultValue={''} />
                      </div>
                    </div>
                    <div className="col-12">
                      <Link className="btn btn-border-gray mt-0" href="#">
                        Contact Us <FaPlus />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default ContactAreaFour;

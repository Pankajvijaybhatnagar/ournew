import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceAreaFour = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div
        className='service-area bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-8'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>WHAT WE OFFER</h6>
                <h2 className='title'>
                  Elevating Businesses with <span>Innovative Solutions</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-4'>
                  <img src='assets/img/icon/18.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Web Development</h5>
                  <p className='content mb-3'>
                    Crafting dynamic, responsive, and high-performing websites tailored to your business needs.
                  </p>
                  <Link className='read-more-text' href='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/16.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Big Data Analytics</h5>
                  <p className='content mb-3'>
                    Unlock valuable insights with data-driven strategies to enhance business growth and efficiency.
                  </p>
                  <Link className='read-more-text' href='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/17.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Websecurity</h5>
                  <p className='content mb-3'>
                    Providing robust security solutions to safeguard your digital assets from evolving threats.
                  </p>
                  <Link className='read-more-text' href='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/20.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Mobile App Development</h5>
                  <p className='content mb-3'>
                    Creating seamless and engaging mobile applications to enhance user experiences and business reach.
                  </p>
                  <Link className='read-more-text' href='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
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


export default ServiceAreaFour;

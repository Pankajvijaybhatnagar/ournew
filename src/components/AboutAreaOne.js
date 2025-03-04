import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}  
      <div className='about-area pd-top-120'>  
        <div className='container'>  
          <div className='row'>  
            <div className='col-lg-6'>  
              <div  
                className='about-thumb-inner pe-xl-5 me-xl-5 '  
                data-aos='fade-right'  
                data-aos-delay='100'  
                data-aos-duration='1500'  
              >  
                <img  
                  className='animate-img-2 left_image_bounce'  
                  src='assets/img/about/3.png'  
                  alt='img'  
                />  
                <img  
                  className='animate-img-3 top_image_bounce'  
                  src='assets/img/banner/5.svg'  
                  alt='img'  
                />  
                <img  
                  className='main-img'  
                  src='assets/img/about/1.gif'  
                  alt='img'  
                />  
              </div>  
            </div>  
            <div  
              className='col-lg-6 '  
              data-aos='fade-left'  
              data-aos-delay='100'  
              data-aos-duration='1500'  
            >  
              <div className='section-title mt-5 mt-lg-0'>  
                <h6 className='sub-title'>ABOUT US</h6>  
                <h2 className='title'>  
                  Empowering Businesses with <span>Digital Excellence</span>  
                </h2>  
                <p className='content mb-4 mb-xl-5'>  
                  At Digi1Xprt, we specialize in social media marketing, digital branding,  
                  and cutting-edge software solutions. Our expertise helps businesses  
                  thrive in the digital landscape by enhancing their online presence and  
                  streamlining operations through technology-driven solutions.  
                </p>  
                <div className='row'>  
                  <div className='col-md-6'>  
                    <div className='single-about-inner'>  
                      <div className='thumb mb-3'>  
                        <img src='assets/img/icon/2.png' alt='img' />  
                      </div>  
                      <div className='details'>  
                        <h5>Our Vision</h5>  
                        <p>  
                          To revolutionize digital marketing and software development  
                          by delivering innovative, result-driven solutions tailored  
                          to modern business needs.  
                        </p>  
                      </div>  
                    </div>  
                  </div>  
                  <div className='col-md-6'>  
                    <div className='single-about-inner'>  
                      <div className='thumb mb-3'>  
                        <img src='assets/img/icon/3.png' alt='img' />  
                      </div>  
                      <div className='details'>  
                        <h5>Our Mission</h5>  
                        <p>  
                          To empower brands with strategic digital marketing and  
                          high-quality software solutions, ensuring sustained growth  
                          and market dominance.  
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
      {/* ================== AboutAreaOne End  ==================*/}  
    </>  
  );  
};  

export default AboutAreaOne;

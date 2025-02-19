import React from 'react';

const WorkProcessSeven = () => {
  return (
    <>
      {/*==================== Work Process start ====================*/}
      <div className="work-process-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                <h6 className="bg-none color-base mb-3">OUR SIMPLE PROCESS</h6>
                <h2 className="title">
                  How Digi1Xprt Leverages Cutting-Edge Technologies
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-2 text-center">
                <div className="thumb block mb-3">
                  <img src="assets/img/blog/c.jpeg " alt="DeepSea AI" />
                  <p className="process-count">01</p>
                </div>
                <div className="details">
                  <h5 className="mb-3">DeepSea AI Integration</h5>
                  <p className="content">
                    We incorporate AI-driven solutions like DeepSea AI to optimize digital marketing, enhance financial analytics, and improve user engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-1 text-center">
                <div className="thumb block mb-3">
                  <img src="assets/img/blog/a.jpeg" alt="Blockchain" />
                  <p className="process-count"></p>
                </div>
                <div className="details">
                  <h5 className="mb-3">Blockchain Technology</h5>
                  <p className="content">
                    Secure financial transactions and ensure transparency with blockchain-based solutions tailored for businesses in the digital era.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-2 text-center">
                <div className="thumb block mb-3">
                  <img src="assets/img/blog/b.jpeg" alt="IoT Solutions" />
                  <p className="process-count">03</p>
                </div>
                <div className="details">
                  <h5 className="mb-3">IoT-Powered Automation</h5>
                  <p className="content">
                    Leverage IoT to streamline business operations, enhance data collection, and drive efficiency in various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process End ====================*/}
    </>
  );
};

export default WorkProcessSeven;

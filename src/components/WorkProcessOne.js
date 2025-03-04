import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>OUR SIMPLE PROCESS</h6>
            <h2 className='title'>
              The <span>Best Approach</span> to IT Solutions
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/9.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 01</p>
                  <h5 className='mb-3'>In-Depth Research</h5>
                  <p className='content'>
                    We analyze your requirements and conduct market research to ensure the best solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 02</p>
                  <h5 className='mb-3'>Innovative Development</h5>
                  <p className='content'>
                    Our expert team designs and develops custom software tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 03</p>
                  <h5 className='mb-3'>Seamless Implementation</h5>
                  <p className='content'>
                    We rigorously test and deploy the software for a smooth, hassle-free experience.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 04</p>
                  <h5 className='mb-3'>Launch & Support</h5>
                  <p className='content'>
                    After deployment, we provide ongoing support and updates to keep your software running flawlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;

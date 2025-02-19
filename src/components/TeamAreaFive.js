import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamAreaFive = () => {
  return (
    <>
      {/* team area start */}
      <div className="team-area  team-area_5 bg-relative pd-top-115">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title mb-3 bg-none">Our Partner</h6>
            <h2 className="title">digitalorra.com</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-20">
              <div className="single-team-inner style-4 text-center">
                <div className="thumb">
                  <img src="assets/img/home-7/15.jpg" alt="img" />
                  {/* <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul> */}
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Digital Orra</Link>
                  </h5>
                  {/* <p>Merketing Department</p> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-team-inner style-4 text-center">
                <div className="thumb">
                  <img src="assets/img/home-7/16.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Kathryn Murphy</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner style-4 text-center">
                <div className="thumb">
                  <img src="assets/img/home-7/17.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Kathryn Murphy</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div> */}
           
          </div>
        </div>
      </div>
      {/* team area end */}
    </>
  );
};

export default TeamAreaFive;

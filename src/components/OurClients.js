
"use client"

import React, { useEffect, useRef } from 'react';

const clientLogos = [
    './assets/img/clients/genesis-logo.png',
    './assets/img/clients/akira-logo.png',
    './assets/img/clients/sidhartihospital-logo.png',
    './assets/img/clients/gieo-gita.png',
    './assets/img/clients/dicekkr.png',
    './assets/img/clients/ks-convent-school-logo.jpeg',
 
];

export default function OurClients() {
  const sliderRef = useRef(null); // Reference to the slider container
  const slideTrackRef = useRef(null); // Reference to the slide track

  // Duplicate the logos to create the infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    const slider = sliderRef.current;
    const slideTrack = slideTrackRef.current;

    let animationFrameId;
    let scrollAmount = 0;
    const speed = 1; // Adjust the speed of the scroll

    const animate = () => {
      scrollAmount += speed;
      if (scrollAmount >= slideTrack.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll position to create infinite effect
      }
      slideTrack.style.transform = `translateX(-${scrollAmount}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Cleanup animation on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Styles object
  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
    slider: {
      width: '100%',
      overflow: 'hidden',
    },
    slideTrack: {
      display: 'flex',
      width: `${clientLogos.length * 200}px`, // Adjust based on the number of logos
      gap:10
    },
    slide: {
      width: '250px', // Adjust based on your logo size
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin:20
    },
    logo: {
      maxWidth: '80%',
      height: 'auto',
    },
  };

  return (
    <div className='container'>
        <div className="section-title text-center">
            <h6 className="sub-title mb-3 bg-none">Our Clients</h6>
            <h2 className="title">Trusted by Leading Brands for Secure Solutions.</h2>
          </div>
      <div style={styles.slider} ref={sliderRef}>
        <div style={styles.slideTrack} ref={slideTrackRef}>
          {duplicatedLogos.map((logo, index) => (
            <div style={styles.slide} key={index}>
              <img src={logo} alt={`Client Logo ${index}`} style={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
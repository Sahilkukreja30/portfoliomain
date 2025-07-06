import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { div } from 'framer-motion/client';

const CustomCursor = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5, 
        backgroundColor: 'white', 
        duration: 0.3,
      });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'white', 
        duration: 0.3,
      });
    };

    // Create ripple effect on click (on links and buttons)


    // Attach event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);

      });
    };
  }, []);

  return (
    <>
      {isMobile ? <div></div> : <div
      id="custom-cursor"
      style={{ 
        position: 'fixed',
        top: '0',
        left: '0',
        width: '30px',
        height: '30px',
        backgroundColor: 'white', 
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999', 
        mixBlendMode: 'difference',
      }}
    ></div>}
    </>
  );
};

export default CustomCursor;

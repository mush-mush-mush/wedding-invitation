/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import image from "./../images/quote.jpg";
// import Bird from "./bird";
import { useInView } from "react-intersection-observer";

function Quote() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <article ref={ref} className="quote container">
      <motion.section
        animate={animation}
        className=" d-flex justify-content-between align-items-center row"
      >
        <div className="quote--left col-sm-2 col-2">
          {
            // inView && <Bird />
          }
        </div>
        <img src={image} alt="" className="quote--img col-sm-6 col-8"></img>
        <div className="quote--text">
          <h2>“He has made everything beautiful in its time.”</h2>
          <h5>Ecclesiastes 3:11</h5>
        </div>
      </motion.section>
    </article>
  );
}

export default Quote;

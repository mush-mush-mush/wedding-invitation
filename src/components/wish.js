/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "./../images/wish.jpg";

function Wish() {
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
    console.log("inview =", inView);
  }, [inView]);

  return (
    <motion.article ref={ref} animate={animation} className="wish container">
      <section className="wish--container row px-0 d-flex justify-content-center">
        <div className="wish--image px-0 col-lg-6 col-md-4">
          <img src={image} alt="" className=""></img>
        </div>

        <div className="wish--body col-lg-6 col-md-8">
          <h3>Give a Wish</h3>
          <p>Our happiness will not be complete without your blessing</p>
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input type="telp" className="form-control" id="phone" />
            </div>
            <div className="mb-5">
              <label htmlFor="wish" className="form-label">
                Your Wish
              </label>
              <textarea className="form-control" id="wish" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </motion.article>
  );
}

export default Wish;

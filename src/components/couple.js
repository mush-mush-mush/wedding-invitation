/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import bride from "./../images/bride.jpg";
import groom from "./../images/groom.jpg";
import img01 from "./../images/img01.jpg";
import img02 from "./../images/img02.jpg";
import img03 from "./../images/img03.jpg";
import Wreath from "./wreath";

function Couple() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`couple container ${inView ? "show" : "hide"}`}
    >
      <section className={`row position-relative`}>
        {inView && <Wreath />}
        <div className="groom col-lg-6 col-md-10">
          <img src={groom} alt="" className="couple--img"></img>
          <div className="couple--text text-end">
            <h3>
              Belden Glen Kristianto<small>, B.Sc</small>
            </h3>
            <p>
              The first son of Mr. Arif Juwono Kristianto(
              <FontAwesomeIcon icon={faCross} />) & dr. Beatrice Idawati Sanusi
            </p>
          </div>
        </div>
        <div className="bride col-lg-6 col-md-10 ms-md-auto d-flex justify-content-end">
          <img src={bride} alt="" className="couple--img"></img>
          <div className="couple--text text-start">
            <h3>
              Priscillia Sebastian
              <small>, S.Hum</small>
            </h3>
            <p>
              The first daughter of Mr. Andy Suryadi & Mrs. Anastasia Sebastian
            </p>
          </div>
        </div>
        <div className="row"></div>
      </section>
      <section className="couple--gallery row justify-content-center">
        <img
          src={img01}
          alt=""
          className="col-lg-4 col-md-6 col-10 ms-auto"
        ></img>
        <img
          src={img02}
          alt=""
          className="col-lg-4 col-md-6 col-10 me-auto"
        ></img>
        <img
          src={img03}
          alt=""
          className="col-lg-4 col-md-6 col-10 ms-auto ms-md-0"
        ></img>
      </section>
    </article>
  );
}

export default Couple;

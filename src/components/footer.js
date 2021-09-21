import React from "react";
import img from "./../images/footer.png";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center">
      <section className="container row">
        <div className="col-sm-12 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start">
          <img src={img} alt="" className="footer--img"></img>
          <div className="text-sm-start text-center">
            <h3>Thank You</h3>
            <p>For being part of our special day</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

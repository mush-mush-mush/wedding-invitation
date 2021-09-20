/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "./../images/wish.jpg";

function Wish() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [wish, setWish] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [success, setSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submit = (e) => {
    e.preventDefault();
    setSending(true);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "wishForm",
        name: name,
        email: email,
        telp: telp,
        wish: wish,
      }),
    };

    fetch("/", options)
      .then(function (response) {
        setSent(true);
        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        setSent(true);
        setSuccess(false);
      });
  };

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
    <motion.article ref={ref} animate={animation} className="wish container">
      <section className="wish--container row px-0 d-flex justify-content-center">
        <div className="wish--image px-0 col-lg-6 col-md-4">
          <img src={image} alt="" className=""></img>
        </div>

        <div className="wish--body col-lg-6 col-md-8">
          <h3>Give a Wish</h3>
          <p>Our happiness will not be complete without your blessing</p>
          <form
            name="wishForm"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={submit}
          >
            <input type="hidden" name="form-name" value="wishForm" />
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="telp"
                className="form-control"
                id="phone"
                onChange={(e) => setTelp(e.target.value)}
                value={telp}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="wish" className="form-label">
                Your Wish
              </label>
              <textarea
                className="form-control"
                id="wish"
                rows="3"
                onChange={(e) => setWish(e.target.value)}
                value={wish}
                required
              ></textarea>
            </div>
            {sent ? (
              success ? (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Thank You!</strong> Your wish has been received.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              ) : (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Sorry!</strong> Your wish hasn't been sent.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )
            ) : (
              ""
            )}
            <button
              type="submit"
              className={`btn btn-primary w-50 d-flex align-items-center justify-content-center mx-auto mt-5 ${
                sent && "disabled"
              }`}
            >
              {sending ? (
                <>
                  <div className="spinner-border text-light me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Sending
                </>
              ) : (
                <>Send</>
              )}
            </button>
          </form>
        </div>
      </section>
    </motion.article>
  );
}

export default Wish;

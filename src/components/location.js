/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { BrowserRouter, Route } from "react-router-dom";
import Leaflet from "leaflet";
// import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const matrimonyIcon = ReactDOMServer.renderToString(
  <FontAwesomeIcon icon={faMapMarkerAlt} />
);
const matrimonyMarkerIcon = new Leaflet.DivIcon({
  html: matrimonyIcon,
});

const luncheonIcon = ReactDOMServer.renderToString(
  <FontAwesomeIcon icon={faMapMarkerAlt} />
);
const luncheonMarkerIcon = new Leaflet.DivIcon({
  html: luncheonIcon,
});

let months, days, hours, minutes, now, distance;
const countDownDate = new Date("Dec 19, 2021 09:00").getTime();

function Location() {
  const [count, setCount] = useState([99, 99, 99, 99]);

  const countdown = () => {
    now = new Date().getTime();

    distance = countDownDate - now;

    months = String(Math.floor(distance / (1000 * 60 * 60 * 24 * 30))).padStart(
      2,
      0
    );
    days = String(
      Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      )
    ).padStart(2, 0);
    hours = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, 0);
    minutes = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, 0);

    setCount([months, days, hours, minutes]);

    if (distance < 0) {
      setCount([null]);
    }
  };

  useEffect(() => {
    countdown();
  }, []);

  const { ref, inView } = useInView({ threshold: 0.15 });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //     });
  //   } else {
  //     animation.start({
  //       opacity: 0,
  //     });
  //   }
  // }, [inView]);

  // useEffect(() => {
  //   setInterval(countdown, 60000);
  // }, [count]);

  return (
    <article
      ref={ref}
      className={`location container ${inView ? "show" : "hide"}`}
      id="location"
    >
      <BrowserRouter>
        <section className={`location--container`}>
          <div className="location--date row">
            <div className="col-12 text-center">
              <h5>Sunday, 19 December 2021</h5>
              <div className="timer d-flex justify-content-center my-4">
                <div className="timer--month text-center">
                  <h1>{count[0]}</h1>
                  <p>months</p>
                </div>
                <div className="timer--week text-center">
                  <h1>{count[1]}</h1>
                  <p>days</p>
                </div>
                <div className="timer--hour text-center">
                  <h1>{count[2]}</h1>
                  <p>hours</p>
                </div>
                <div className="timer--minute text-center">
                  <h1>{count[3]}</h1>
                  <p>minutes</p>
                </div>
              </div>
              <Route path="/" exact>
                <select
                  className="form-select button--date my-5 mx-auto"
                  onChange={(e) => (window.location = e.target.value)}
                >
                  <option selected value="/" disabled>
                    Save the Date
                  </option>

                  <option value="https://calendar.google.com/event?action=TEMPLATE&tmeid=Mzg1MmYwaGt1dm9jdDU5N2o1bmtzMm9nYmMgYTA1bm44NDYybGx1dGhiNmNlYTJiOTE3YW9AZw&tmsrc=a05nn8462lluthb6cea2b917ao%40group.calendar.google.com">
                    Google Calender
                  </option>
                  <option value="webcal://p31-caldav.icloud.com/published/2/MTc0NzA3NjM5NjUxNzQ3MPMcgqPU3O3ST7OxEmPkkN8NiOgBiRURzCGSnMbaAK0Nx9Mg3QM64c-ZSwV29kpwCSf4olW2QqrPpkeKNMOiK28">
                    Apple iCalender
                  </option>
                </select>
              </Route>
              <Route path="/f">
                <select
                  className="form-select button--date my-5 mx-auto"
                  onChange={(e) => (window.location = e.target.value)}
                >
                  <option selected value="/" disabled>
                    Save the Date
                  </option>
                  <option value="https://calendar.google.com/event?action=TEMPLATE&tmeid=NW9xdHZoanEwMzNjZXVxODc3azNpczZzZ24gYjdjbW4zdDlydHEzN21rcDg3MWU2NnFob2NAZw&tmsrc=b7cmn3t9rtq37mkp871e66qhoc%40group.calendar.google.com">
                    Google Calender
                  </option>
                  <option value="webcal://p31-caldav.icloud.com/published/2/MTc0NzA3NjM5NjUxNzQ3MPMcgqPU3O3ST7OxEmPkkN900VP5daBhGMcFrM1dJPVP-Rg9Jm3sHygNdJ3AQLMUihu0UybqtV7p_PcOs7nuoIs">
                    Apple iCalender
                  </option>
                </select>
              </Route>
            </div>
          </div>
          <hr />
          <Route path="/" exact>
            <div className="location--places row align-items-center">
              <div className="places--details col-md-6">
                <div className="text--content mb-5">
                  <h3>Holy Matrimony</h3>
                  <hr />
                  <p>
                    <strong>Sunday, 19 Dec 2021</strong>
                    <br />
                    09:00 AM
                  </p>
                  <p>
                    <strong>Chapel of Regina Pacis</strong>
                    <br />
                    Jl. Ir. H. Juanda No.2, Pabaton, Bogor
                  </p>
                </div>
              </div>
              <div className="places--map col-md-6">
                <div className="map map-small">
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1XFWT9VQX9vp0GM63MTA0SXZ-_pMXHG6A"
                    className="button--map"
                  >
                    Open map
                  </a>
                  <MapContainer
                    center={[-6.5986, 106.8001728]}
                    zoom={14}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                    touchZoom={true}
                    zoomControl={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://api.mapbox.com/styles/v1/mushmushmush/cktpeon7j25vn17o4b45n6wiv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXVzaG11c2htdXNoIiwiYSI6ImNrdHBlcjN0NjBtNzEzMG1waHZwNXdkdGYifQ.H3Ys3dq8x9IUJzYAogX1nA"
                    />
                    <Marker
                      position={[-6.59262, 106.79645]}
                      icon={matrimonyMarkerIcon}
                    >
                      <Popup>
                        <strong>Holy Matrimony</strong>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/f">
            <div className="location--places row align-items-center">
              <div className="places--details col-md-6">
                <div className="text--content mb-5">
                  <h3>Holy Matrimony</h3>
                  <hr />
                  <p>
                    <strong>Sunday, 19 Dec 2021</strong>
                    <br />
                    09:00 AM
                  </p>
                  <p>
                    <strong>Chapel of Regina Pacis</strong>
                    <br />
                    Jl. Ir. H. Juanda No.2, Pabaton, Bogor
                  </p>
                </div>

                <div className="text--content mt-5">
                  <h3>Luncheon</h3>
                  <hr />
                  <p>
                    <strong>Sunday, 19 Dec 2021</strong>
                    <br />
                    12:00 AM
                  </p>
                  <p>
                    <strong>Djoeragan Resto</strong>
                    <br />
                    Jl. Suryakencana No.179-181, Babakan Ps., Bogor
                  </p>
                </div>
              </div>
              <div className="places--map col-md-6">
                <div className="map">
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1vAvhuexP1TvILn3JCjDtL5325n4-dRxY"
                    className="button--map"
                  >
                    Open map
                  </a>
                  <MapContainer
                    center={[-6.5986, 106.8001728]}
                    zoom={13}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                    touchZoom={true}
                    zoomControl={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://api.mapbox.com/styles/v1/mushmushmush/cktpeon7j25vn17o4b45n6wiv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXVzaG11c2htdXNoIiwiYSI6ImNrdHBlcjN0NjBtNzEzMG1waHZwNXdkdGYifQ.H3Ys3dq8x9IUJzYAogX1nA"
                    />
                    <Marker
                      position={[-6.59262, 106.79645]}
                      icon={matrimonyMarkerIcon}
                    >
                      <Popup>
                        <strong>Holy Matrimony</strong>
                      </Popup>
                    </Marker>
                    <Marker
                      position={[-6.60705, 106.80168]}
                      icon={luncheonMarkerIcon}
                    >
                      <Popup>
                        <strong>Luncheon</strong>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </Route>
        </section>
      </BrowserRouter>
    </article>
  );
}

export default Location;

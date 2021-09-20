/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Leaflet from "leaflet";
import { motion, useAnimation } from "framer-motion";
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

function Location() {
  const [count, setCount] = useState([99, 99, 99, 99]);

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

  useEffect(() => {
    var countDownDate = new Date("Dec 19, 2021 09:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var months = String(
        Math.floor(distance / (1000 * 60 * 60 * 24 * 30))
      ).padStart(2, 0);
      var days = String(
        Math.floor(
          (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        )
      ).padStart(2, 0);
      var hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, 0);
      var minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, 0);

      setCount([months, days, hours, minutes]);

      if (distance < 0) {
        clearInterval(x);
        setCount([null]);
      }
    }, 1000);
  }, [count]);

  return (
    <motion.article
      ref={ref}
      animate={animation}
      className="location container"
      id="location"
    >
      <section className="location--container">
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
                <p>weeks</p>
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
            <select
              class="form-select button--date my-5 mx-auto"
              onChange={(e) => (window.location = e.target.value)}
            >
              <option selected defaultValue="" disabled>
                Save the Date
              </option>
              <option value="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N2Q0bm43bjFndWdxdmE4MThqNzM5Y2E3b3IgbWFyY2VsbG8uc2ViYXN0aWFuMDlAbQ&amp;tmsrc=marcello.sebastian09%40gmail.com">
                Google Calender
              </option>
              <option value="webcal://p31-caldav.icloud.com/published/2/MTc0NzA3NjM5NjUxNzQ3MPMcgqPU3O3ST7OxEmPkkN900VP5daBhGMcFrM1dJPVP-Rg9Jm3sHygNdJ3AQLMUihu0UybqtV7p_PcOs7nuoIs">
                Apple iCalender
              </option>
            </select>
            {/* <a
              target="_blank"
              // href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N2Q0bm43bjFndWdxdmE4MThqNzM5Y2E3b3IgbWFyY2VsbG8uc2ViYXN0aWFuMDlAbQ&amp;tmsrc=marcello.sebastian09%40gmail.com"
              href="webcal://p31-caldav.icloud.com/published/2/MTc0NzA3NjM5NjUxNzQ3MPMcgqPU3O3ST7OxEmPkkN900VP5daBhGMcFrM1dJPVP-Rg9Jm3sHygNdJ3AQLMUihu0UybqtV7p_PcOs7nuoIs"
              className="button--date my-5"
              rel="noreferrer"
            >
              Save the Date
            </a> */}
          </div>
        </div>
        <hr />
        <div className="location--places row align-items-center">
          <div className="places--details col-md-6">
            <div className="text--content mb-5">
              <h3>Holy Matrimony</h3>
              <hr />
              <p>
                <strong>Sunday, Dec 19 2021</strong>
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
                <strong>Sunday, Dec 19 2021</strong>
                <br />
                12:00 AM
              </p>
              <p>
                <strong>Djoeragon Resto</strong>
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
      </section>
    </motion.article>
  );
}

export default Location;

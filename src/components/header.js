import React from "react";
import background from "./../images/main.jpg";

function header() {
  return (
    <article className="main container-fluid">
      <header
        className="main-in"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(204, 213, 174, 0.3), rgba(204, 213, 174, 0.3)), url(${background})`,
        }}
      >
        <div className="text-area">
          <h5>THE WEDDING OF</h5>
          <h1>Glen & Prisil</h1>
          <h4>2021.12.19</h4>
        </div>
      </header>
    </article>
  );
}

export default header;

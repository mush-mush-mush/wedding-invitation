import React from "react";
import background from "./../images/main.jpg";

// const headerParallax = () => {
//   const header = document.querySelector(".main");

//   const sectionObserver = function (entries, observer) {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     console.log(entries);
//   };

//   const observe = new IntersectionObserver(sectionObserver, {
//     root: null,
//     threshold: 0.15,
//   });

//   observe.observe(header);
//   console.log(header);
// };

function Header() {
  // useEffect(() => {
  //   headerParallax();
  // });

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

export default Header;

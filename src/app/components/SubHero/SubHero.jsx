import React from "react";
import "./SubHero.css";

export default function SubHero({ bgImage, title }) {
  return (
    <>
      <section
        className="sub-hero"
        style={{
          backgroundImage: `url("${bgImage}")`,
        }}
      >
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
    </>
  );
}

//   <section
//         className="sub-hero"
//         style={{ backgroundImage: 'url("/images/assets/sub-header.webp")' }}
//       >
//         <div className="container">
//           <h1>Get a Quote</h1>
//         </div>
//       </section>

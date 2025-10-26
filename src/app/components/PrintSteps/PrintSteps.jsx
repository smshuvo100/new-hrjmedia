import React from "react";
import Image from "next/image";
import "./PrintSteps.css";

export default function PrintSteps() {
  return (
    <>
      {/*  print-steps-section. PrintSteps */}
      <section className="print-steps-section">
        <div className="container">
          <div className="header-center">
            <h2>Print in 3 Easy Steps</h2>
            <p>
              “Getting your high-quality prints has never been easier. At
              <strong>HRJ Media</strong>, we make the process simple, fast, and
              stress-free. Just follow these three steps and your prints will be
              ready in no time.”
            </p>
          </div>
          <div className="grid-box">
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

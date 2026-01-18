import React from "react";
import Image from "next/image";
import "./PrintSteps.css";

import {
  FiFileText,
  FiShoppingCart,
  FiHeadphones,
  FiTruck,
  FiEdit,
} from "react-icons/fi";

export default function PrintSteps() {
  return (
    <>
      {/*  print-steps-section. PrintSteps */}
      <section className="print-steps-section">
        <div className="container">
          <div className="header-center">
            <h2>Easy Steps for Placing an Order</h2>
            <p>
              Getting your high-quality prints has been easier. HRJ Media make
              the process simple, fast and stress-free. Just follow these three
              steps and your prints will be ready in on time.
            </p>
          </div>

          <div className="grid-box">
            <div className="item">
              <FiFileText />
              <h2>Get A Quote 24/7</h2>
              <p>Contact us for bespoke quotation</p>
            </div>
            <div className="item">
              <FiShoppingCart />
              <h2>Order Online 24/7</h2>
              <p>Esily add items to your basket</p>
            </div>
            <div className="item">
              <FiHeadphones />
              <h2>Contact Us</h2>
              <p>Do you need any help?</p>
            </div>
            <div className="item">
              <FiTruck />
              <h2>Collection or Delivery</h2>
              <p>Store collection or delivery</p>
            </div>
            <div className="item">
              <FiEdit />
              <h2>Don’t Have Artwork</h2>
              <p>We can create the artwork for you?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

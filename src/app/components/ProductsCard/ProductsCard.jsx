import React from "react";
import Image from "next/image";
import "./ProductsCard.css";

export default function ProductsCard() {
  return (
    <>
      <section className="our-products-section">
        <div className="container">
          <div className="header-center">
            <h2>The Best Weekly Products</h2>
          </div>
          <div className="grid-box">
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

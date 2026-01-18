import React from "react";
import Image from "next/image";
import "./InStore.css";

export default function InStore() {
  return (
    <>
      {/*  print-steps-section. PrintSteps */}
      <section className="in-store-section">
        <div className="container">
          <div className="header-center">
            <h2>
              Instant (in-store collection), Same Day and Overnight Printing in
              London from HRJ Media
            </h2>
            <div className="content">
              <p>
                A reliable print partner is crucial for tight deadlines, saving
                time and preventing last-minute stress. We offers expert advice,
                handles fulfillment a meticulous attention to detail and
                maintains brand consistency. A highly experienced,
                customer-focused printing service that emphasizes quality, speed
                and precision. We understand the urgency of your print needs
                without preventing delays and keeping your projects on track
                with professional results, even under pressure.
              </p>
              <p>
                We offer Same-Day Printing Service, Overnight Printing Service,
                In-Person Store Printing Service, Online Printing Service. Most
                advanced high-quality printing techniques and streamlined
                workflows to deliver high-quality urgent printing requirments
                with impressive and stunning image quality. We cover a wide
                range of full colour printing, low-cost black & white printing,
                standard and customise sizes in digital formate printing, large
                formate printing, personalised clothing.{" "}
              </p>
              <p>
                Most popular printing we do Posters, Business Cards, Flyers,
                Leaflets, Folded Leaflets, PVC Banners, Vinyl Stickers, Rollup
                Banners, Foam Boards, Foamex Boards, Photo, Saddle Stitch
                Booklet, Wire O Bound Booklets, Back Lit Posters, Wateproof
                Posters, Postcards, A2 Posters, A1 Posters, A0 Posters,
                Transparent Stickers, Window Graphics, Car Sticker, Menus,
                Receipt Pads, T-Shirt, Color Document Print, Low Cost Balck and
                White Document Print, Document Scan, Lamination and many more
                ...
              </p>
            </div>
          </div>
          <div className="in-store-box">
            <div className="flax-box">
              <div className="item">
                <h3>In-Store</h3>
                <p>Instant Printing</p>
              </div>

              <div className="item">
                <h3>Same Day</h3>
                <p>Instant Printing</p>
              </div>

              <div className="item">
                <h3>Overnignt</h3>
                <p>Instant Printing</p>
              </div>

              <div className="item">
                <h3>Online</h3>
                <p>Instant Printing</p>
              </div>
            </div>
          </div>

          <div className="orderBanner">
            <div className="orderBanner__top">
              Place an order by providing the project details and attach any
              necessary files via email or our online quote form.
            </div>

            <div className="orderBanner__steps">
              <span className="step">Request a quote</span>
              <span className="arrow">⇒</span>

              <span className="step">Receive a Quote</span>
              <span className="arrow">⇒</span>

              <span className="step">Approve &amp; Pay</span>
              <span className="arrow">⇒</span>

              <span className="step">Printing Starts</span>
              <span className="arrow">⇒</span>

              <span className="step">Delivery or Store Pick-Up</span>
            </div>

            <div className="orderBanner__bottom">
              <b>Get in touch</b> to hear about our full range of printing
              products.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

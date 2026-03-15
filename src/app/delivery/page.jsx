import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./Delivery.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="Delivery Information"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <p>
              We offer high-quality printing with an incredible delivery service
              to make sure our customers receive their products when they need
              them.
            </p>

            <p>
              If you place your order and provide artwork before
              <strong> 12:00 PM</strong>, your job will be delivered the same
              day for Greater London and the next working day for the UK
              mainland.
            </p>

            <p>
              This excludes Scottish Highlands and UK islands. Orders from
              non-mainland UK customers may carry additional delivery charges
              and may take longer to arrive.
            </p>

            <div className="terms-block">
              <h2>Delivery Options</h2>

              <p>
                Choose your delivery options during checkout. Orders placed
                after <strong>12:00 PM</strong> will be dispatched the next
                working day (except premium overnight service).
              </p>

              <p>Standard services operate Monday to Friday only.</p>

              <p>
                Saturday, Sunday and premium overnight services are available
                within Greater London only (subject to postal area).
              </p>
            </div>

            <div className="terms-block">
              <h2>Courier Companies</h2>

              <p>
                Deliveries may be sent via
                <strong>
                  {" "}
                  Parcel Force, DPD, UK Mail, I-Post Parcel, DHL or Royal Mail
                </strong>
                , depending on parcel size, weight and delivery timeframe.
              </p>
            </div>

            <div className="terms-block">
              <h2>Delivery Times and Prices</h2>

              <p>
                <strong>Royal Mail</strong> – approximately 2-3 working days
                (untracked).
              </p>

              <p>
                <strong>Standard tracked courier</strong> – next day delivery
                (24 hour service).
              </p>

              <p>
                <strong>Economy tracked courier</strong> – 48 hour courier
                service.
              </p>
            </div>

            <div className="terms-block">
              <h2>Royal Mail Delivery</h2>

              <p>
                Royal Mail delivery at standard postal times costs
                <strong> £6.00 + VAT</strong> for parcels below 2kg.
              </p>
            </div>

            <div className="terms-block">
              <h2>Tracked Courier Services</h2>

              <p>
                Free delivery is available for orders over
                <strong> £150 + VAT</strong> within London.
              </p>

              <p>
                Standard and economy courier delivery costs
                <strong> £20 + VAT</strong> for UK mainland deliveries.
              </p>

              <p>
                Premium overnight and same day services are available within
                London only.
              </p>

              <p>Shop collection is available for all services.</p>

              <p>
                Delivery charges depend on parcel dimensions, weight and number
                of packages. The prices above apply to parcels up to
                <strong> 20kg</strong>. Additional parcels or heavier shipments
                may incur extra charges.
              </p>
            </div>

            <div className="terms-block">
              <h2>Location Restrictions</h2>

              <p>
                Some UK postcode areas may take an additional
                <strong> 2-3 days</strong> for delivery:
              </p>

              <p>Scottish postcodes: ab, fk, g83, iv, kw, pa, ph, hs, dd</p>

              <p>Isle of Wight: po30 – po41</p>

              <p>Channel Islands: Guernsey (gy), Jersey (je)</p>

              <p>Northern Ireland: bt</p>

              <p>
                Once your order has been dispatched you will receive a tracking
                number and an email with the estimated delivery time.
              </p>
            </div>

            <div className="terms-block">
              <h2>Please Note</h2>

              <p>
                We cannot take responsibility for failed deliveries if the
                recipient is not available at the delivery address.
              </p>

              <p>
                If delivery is attempted and fails, you will need to contact the
                courier service to rearrange delivery or collect the parcel at a
                suitable time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCta />
      <Footer />
    </>
  );
}

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./TermsConditions.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="Terms & Conditions"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <p>
              This website provided by <strong>HRJ MEDIA LTD</strong> contains
              Terms & Conditions which apply to all products listed on
              www.hrjmedia.com. It is provided for your use "as is" without any
              kind of warranties (whether direct or indirect).
            </p>

            <p>
              Please read these Terms & Conditions carefully before ordering any
              products from our website. By placing an order you agree to be
              bound by these Terms & Conditions.
            </p>

            {/* STATUS */}

            <div className="terms-block">
              <h2>Status</h2>

              <p>
                When placing an order through our website you confirm that you
                are legally capable of entering binding contracts.
              </p>

              <p>
                When providing personal information during registration or
                checkout, you must ensure all information is accurate, current,
                and complete. You must not impersonate another person.
              </p>

              <p>
                You may only provide third-party personal information if you
                have their authorisation.
              </p>
            </div>

            {/* PRICE */}

            <div className="terms-block">
              <h2>Price & Payment</h2>

              <p>
                Prices of products on our website may change from time to time.
                Although we try our best to ensure accuracy, pricing errors may
                occasionally occur.
              </p>

              <p>
                If we discover an incorrect price after your order has been
                placed, we will contact you as soon as possible with the option
                to continue with the corrected price or cancel the order.
              </p>

              <p>
                Prices shown on the website do not include VAT or delivery
                charges which will be added during checkout.
              </p>

              <p>
                Account customers must pay invoices within 28 days unless
                otherwise agreed. Non-account customers must complete payment
                before 4:00 PM on the day of dispatch.
              </p>
            </div>

            {/* PRODUCTS */}

            <div className="terms-block">
              <h2>Products</h2>

              <p>
                HRJ MEDIA reserves the right to modify details of advertised
                products without notice. We make every effort to accurately
                describe products but cannot guarantee complete accuracy.
              </p>
            </div>

            {/* PROOF APPROVAL */}

            <div className="terms-block">
              <h2>Approvals of Proofs</h2>

              <p>
                Proofs will be provided if requested. If artwork issues are
                detected we will notify you before printing.
              </p>

              <p>
                Once the proof has been approved, the order cannot be cancelled
                or changed. Customers are responsible for checking spelling,
                contact details, and design accuracy.
              </p>

              <p>
                Signed approval or confirmation email must be received before
                1PM for same-day proof processing.
              </p>
            </div>

            {/* ARTWORK */}

            <div className="terms-block">
              <h2>Artwork</h2>

              <p>
                Orders are completed based on the artwork and information
                supplied by the customer. Any artwork errors are the customer's
                responsibility and may incur additional charges.
              </p>

              <p>
                Customers have one hour to request changes before production
                begins.
              </p>
            </div>

            {/* DELIVERY */}

            <div className="terms-block">
              <h2>Delivery</h2>

              <p>
                Products will be dispatched using the delivery service selected
                during checkout unless exceptional circumstances occur.
              </p>

              <p>We currently do not offer international delivery.</p>

              <p>
                Dispatch times depend on the type and quantity of products
                ordered. Please check product pages for estimated timelines.
              </p>
            </div>

            {/* CLAIM */}

            <div className="terms-block">
              <h2>Claim</h2>

              <p>
                Claims for damage, shortages or non-delivery must be reported
                within <strong>48 hours</strong> of dispatch.
              </p>

              <p>
                HRJ MEDIA LTD will not accept liability unless notified within
                this time frame.
              </p>
            </div>

            {/* REFUND */}

            <div className="terms-block">
              <h2>Refunds</h2>

              <p>
                HRJ MEDIA LTD reserves the right to resolve defective work by
                reprinting rather than issuing refunds.
              </p>

              <p>
                Refunds, if approved, will take approximately
                <strong> 3-4 working days</strong>.
              </p>

              <p>Returned items must be unused and in original packaging.</p>
            </div>

            {/* COMPLAINT */}

            <div className="terms-block">
              <h2>Complaints</h2>

              <p>
                Complaints must be made within <strong>48 hours</strong> of
                receiving the products. After this period complaints will not be
                accepted.
              </p>
            </div>

            {/* RISK */}

            <div className="terms-block">
              <h2>Risk and Title</h2>

              <p>
                Products remain the property of HRJ MEDIA LTD until full payment
                has been received.
              </p>

              <p>Risk transfers to the customer upon delivery.</p>
            </div>

            {/* LAW */}

            <div className="terms-block">
              <h2>Law and Jurisdiction</h2>

              <p>
                These terms are governed by the laws of
                <strong> England and Wales</strong>.
              </p>

              <p>
                Any disputes shall be subject to the jurisdiction of the courts
                of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

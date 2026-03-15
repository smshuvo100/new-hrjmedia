import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";
import "./24-7-Printing.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="24/7 Printing Service"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <div className="terms-block">
              <h2>Production Turnaround Time for Print</h2>

              <p>
                Turnaround time is the production time. It starts once your
                order has been placed and your print-ready files have been
                uploaded, attached and approved. It does not include artwork
                design or delivery time. If you request artwork proof,
                turnaround will begin after approval of the proof has been
                received.
              </p>

              <p>
                All turnaround times are available for 24/7 service as we are
                open every day, including Saturday, Sunday and overnight.
              </p>
            </div>

            <div className="terms-block">
              <h2>Regular 3-5 Working Days Services</h2>
              <p>
                Our regular 3-5 working days service is a more cost-effective
                option for customers. It is suitable for large quantities,
                special finishing, and more flexible jobs.
              </p>
            </div>

            <div className="terms-block">
              <h2>Next Day Services</h2>
              <p>
                Our next day service applies to orders received with artwork and
                approved by 5:00 PM. These orders will be ready for collection
                or dispatched by the agreed estimated time on the next day.
              </p>
            </div>

            <div className="terms-block">
              <h2>Same Day Services</h2>
              <p>
                Our same day service applies to orders received with artwork and
                approved by 2:00 PM. These orders will be ready and dispatched
                by the agreed estimated time on the same day.
              </p>
            </div>

            <div className="terms-block">
              <h2>Premium Services</h2>
              <p>
                Our premium services are divided into two categories: 2-3 hours
                express service and overnight exclusive service. These are
                subject to stock availability, artwork readiness, quantity, and
                finishing requirements.
              </p>
            </div>

            <div className="terms-block">
              <h2>2-3 Hours Services</h2>
              <p>
                We offer an exciting 2-3 hours express service for our
                customers, including Saturday and Sunday. This service starts
                from the point of order confirmation and is one of the most
                valued parts of our 24/7 service.
              </p>
            </div>

            <div className="terms-block">
              <h2>Overnight Services</h2>
              <p>
                Our exclusive premium service is the overnight service,
                including Saturday and Sunday. We accept orders until 10:00 PM
                and may consider urgent jobs after 10:00 PM depending on your
                circumstances.
              </p>

              <p>
                Please call or email us to make an appointment for shop
                collection or delivery. The minimum order value for overnight
                services is £50.00 plus courier charges, if required.
              </p>
            </div>

            <div className="terms-block">
              <h2>24/7 Printing</h2>
              <p>
                At HRJ MEDIA we have a very strong work integrity. We operate
                24/7 for your business needs, whether for regular print
                requirements, last minute presentations, or projects involving
                global businesses in different time zones.
              </p>

              <p>
                Rely on our service and we will get your prints ready for
                collection or delivery to wherever suits you.
              </p>

              <p>
                Call us on <strong>020 8980 4585</strong> or email us at{" "}
                <strong>info@hrjmedia.com</strong> and we will respond as soon
                as possible, 24/7.
              </p>

              <p>
                Place your order by 9:00 PM to complete the order the same night
                or arrange early morning delivery or collection, so we can make
                a plan and avoid disappointment.
              </p>

              <p>
                For same day and within a few hours delivery services, timing
                depends on quantity, stock availability and delivery
                destination. We will always try our hardest to accommodate your
                project and provide the expected turnaround time for collection
                or delivery.
              </p>
            </div>

            <div className="terms-block">
              <h2>Note</h2>
              <p>
                Additional time may be required if you request lamination,
                creasing or folding for the products you have ordered.
              </p>

              <p>
                Large quantities and multiple finishing options also require
                extra turnaround time. Please contact us before placing any
                large quantity order so we can estimate how long it will take to
                complete.
              </p>

              <p>
                Delivery timing can also depend on approval of your artwork
                proof.
              </p>

              <p>
                <strong>
                  All collections, office visits and client meetings are by
                  appointment only.
                </strong>
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

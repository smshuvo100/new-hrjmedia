import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./PrivacyPolicy.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="Privacy Policy"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <p>
              HRJ MEDIA LTD respects your privacy and is committed to protecting
              your personal data. This Privacy Policy explains how we collect,
              use and protect your information when you visit our website
              <strong> www.hrjmedia.com</strong> or use our services.
            </p>

            <div className="terms-block">
              <h2>Information We Collect</h2>

              <p>
                When you use our website or place an order we may collect the
                following information:
              </p>

              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Delivery and billing address</li>
                <li>Payment related information</li>
                <li>Order details and artwork files</li>
                <li>
                  Technical information such as IP address and browser type
                </li>
              </ul>
            </div>

            <div className="terms-block">
              <h2>How We Use Your Information</h2>

              <p>Your information may be used for the following purposes:</p>

              <ul>
                <li>To process and deliver your orders</li>
                <li>To communicate with you regarding your order</li>
                <li>To provide customer support</li>
                <li>To improve our website and services</li>
                <li>To send important updates about our services</li>
              </ul>
            </div>

            <div className="terms-block">
              <h2>Cookies</h2>

              <p>
                Our website uses cookies to improve your browsing experience.
                Cookies help us understand how visitors use our website and
                allow us to improve website performance and functionality.
              </p>

              <p>
                You can disable cookies in your browser settings, however some
                parts of the website may not function properly.
              </p>
            </div>

            <div className="terms-block">
              <h2>How We Protect Your Data</h2>

              <p>
                We take appropriate security measures to protect your personal
                information from unauthorised access, loss or misuse.
              </p>

              <p>
                Your information is stored securely and only authorised staff
                have access to it when necessary to provide our services.
              </p>
            </div>

            <div className="terms-block">
              <h2>Sharing Your Information</h2>

              <p>
                We do not sell or rent your personal information to third
                parties.
              </p>

              <p>
                Your information may be shared with trusted service providers
                such as courier companies, payment processors or IT providers
                only when necessary to complete your order or operate our
                business.
              </p>
            </div>

            <div className="terms-block">
              <h2>Data Retention</h2>

              <p>
                We keep your personal information only for as long as necessary
                to provide our services and comply with legal obligations.
              </p>
            </div>

            <div className="terms-block">
              <h2>Your Rights</h2>

              <p>You have the right to:</p>

              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to certain types of data processing</li>
              </ul>

              <p>
                To exercise these rights please contact us using the details
                below.
              </p>
            </div>

            <div className="terms-block">
              <h2>Contact Us</h2>

              <p>
                If you have any questions regarding this Privacy Policy please
                contact us:
              </p>

              <p>
                <strong>HRJ MEDIA LTD</strong>
                <br />
                97 Burdett Road
                <br />
                London E3 4JN
                <br />
                Phone: 020 8980 4585
                <br />
                Email: info@hrjmedia.com
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

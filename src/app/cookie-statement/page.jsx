import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./CookieStatement.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="Cookie Statement"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <p>
              This Cookie Statement explains how <strong>HRJ MEDIA LTD</strong>
              uses cookies and similar technologies on our website
              <strong> www.hrjmedia.com</strong>. By using our website, you
              agree to the use of cookies in accordance with this policy.
            </p>

            <div className="terms-block">
              <h2>What Are Cookies</h2>

              <p>
                Cookies are small text files that are stored on your device when
                you visit a website. They help the website remember your
                preferences and improve your browsing experience.
              </p>

              <p>
                Cookies may collect information such as your browser type,
                device, IP address and pages visited on our website.
              </p>
            </div>

            <div className="terms-block">
              <h2>How We Use Cookies</h2>

              <p>We use cookies for several reasons including:</p>

              <ul>
                <li>To ensure the website functions properly</li>
                <li>To remember your preferences</li>
                <li>To analyse website traffic and performance</li>
                <li>To improve user experience</li>
                <li>To support security and prevent fraud</li>
              </ul>
            </div>

            <div className="terms-block">
              <h2>Types of Cookies We Use</h2>

              <p>Our website may use the following types of cookies:</p>

              <ul>
                <li>
                  <strong>Essential Cookies</strong> – Required for the website
                  to function properly.
                </li>
                <li>
                  <strong>Performance Cookies</strong> – Help us understand how
                  visitors interact with our website.
                </li>
                <li>
                  <strong>Functionality Cookies</strong> – Allow the website to
                  remember your preferences.
                </li>
                <li>
                  <strong>Analytics Cookies</strong> – Help us analyse website
                  traffic and improve our services.
                </li>
              </ul>
            </div>

            <div className="terms-block">
              <h2>Managing Cookies</h2>

              <p>
                Most web browsers allow you to control cookies through your
                browser settings. You can choose to block or delete cookies if
                you prefer.
              </p>

              <p>
                Please note that disabling cookies may affect how some parts of
                the website function.
              </p>
            </div>

            <div className="terms-block">
              <h2>Third Party Cookies</h2>

              <p>
                Some features on our website may use third-party services such
                as analytics tools or embedded content. These services may place
                cookies on your device to collect information about your
                interaction with the website.
              </p>
            </div>

            <div className="terms-block">
              <h2>Updates to This Cookie Statement</h2>

              <p>
                We may update this Cookie Statement from time to time to reflect
                changes in technology, legislation or our services.
              </p>

              <p>
                We encourage you to review this page periodically to stay
                informed about how we use cookies.
              </p>
            </div>

            <div className="terms-block">
              <h2>Contact Us</h2>

              <p>
                If you have any questions about this Cookie Statement please
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

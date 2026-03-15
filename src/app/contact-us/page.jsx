"use client";

import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import FooterCta from "../components/FooterCta/FooterCta";
import "./Contact.css";

export default function Page() {
  const [formData, setFormData] = useState({
    companyName: "",
    subject: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setArtwork(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = new FormData();
      payload.append("companyName", formData.companyName);
      payload.append("subject", formData.subject);
      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      if (artwork) {
        payload.append("artwork", artwork);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData({
        companyName: "",
        subject: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setArtwork(null);

      const fileInput = document.getElementById("artwork");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <SubHero bgImage="/images/assets/sub-header.webp" title="Contact Us" />

      <section className="contact-page-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-card">
              <h2>Send an email</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="companyName">Company name</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="phone">Mobile phone number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Enter your mobile phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="artwork">Upload Artwork</label>

                    <label className="upload-box" htmlFor="artwork">
                      <span className="upload-icon">↑</span>
                      <span>{artwork ? artwork.name : "Upload Files"}</span>
                    </label>

                    <input
                      id="artwork"
                      name="artwork"
                      type="file"
                      onChange={handleFileChange}
                      hidden
                    />
                  </div>
                </div>

                <div className="contact-message-column">
                  <div className="form-group full-width">
                    <label htmlFor="subject">Choose your subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose your subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Artwork Support">Artwork Support</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Urgent Printing">Urgent Printing</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="You can write your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="btn">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={loading}
                    >
                      <span>{loading ? "Sending..." : "Send"}</span>
                    </button>
                  </div>
                </div>

                {status.message ? (
                  <p className={`form-status ${status.type}`}>
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>

            <aside className="contact-info-card">
              <div className="contact-info-block">
                <h2>Contact Information</h2>
                <ul>
                  <li>
                    <span>Company:</span>
                    <strong>HRJ Media</strong>
                  </li>
                  <li>
                    <span>Address:</span>
                    <strong>97 Burdett Road, London E3 4JN</strong>
                  </li>
                  <li>
                    <span>Office:</span>
                    <strong>0208 123 4567</strong>
                  </li>
                  <li>
                    <span>24/7 Call / Chat:</span>
                    <strong>0758 987 6543</strong>
                  </li>
                  <li>
                    <span>Email:</span>
                    <strong>info@hrjmedia.com</strong>
                  </li>
                </ul>
              </div>

              <div className="contact-info-actions">
                <a href="/get-a-quote" className="info-action-btn">
                  Get a Quote
                </a>
                <a href="tel:02081234567" className="info-action-btn">
                  Call us: 0208 123 4567
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <GoogleMap />

      <FooterCta />
      <Footer />
    </>
  );
}

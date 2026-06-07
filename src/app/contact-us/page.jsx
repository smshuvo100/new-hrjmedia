"use client";

import React, { useState, useRef } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi"; // আইকন ইম্পোর্ট
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

  const [previews, setPreviews] = useState([]); // মাল্টিপল ইমেজ প্রিভিউ স্টেট
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ইমেজ হ্যান্ডেলার (লাইভ প্রিভিউ লজিক)
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setPreviews([...previews, ...newPreviews]);
  };

  // ইমেজ রিমুভ লজিক
  const removeFile = (index) => {
    const updated = [...previews];
    URL.revokeObjectURL(updated[index].url); // মেমোরি ক্লিনআপ
    updated.splice(index, 1);
    setPreviews(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) =>
        payload.append(key, formData[key]),
      );

      // সব প্রিভিউ ফাইলগুলো অ্যাড করা
      previews.forEach((item) => {
        payload.append("artwork", item.file);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Failed to send message.");

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
      setPreviews([]); // প্রিভিউ ক্লিয়ার
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
                      placeholder="Enter company name"
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
                      placeholder="Enter phone number"
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

                  {/* উন্নত আপলোড এবং প্রিভিউ এরিয়া */}
                  <div className="form-group full-width">
                    <label>Upload Artwork (Visual Preview)</label>
                    <div
                      className="upload-box"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <FiUploadCloud className="upload-icon" />
                      <span>
                        {previews.length > 0
                          ? `${previews.length} Files Selected`
                          : "Upload Files"}
                      </span>
                    </div>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      hidden
                    />

                    {/* ইমেজ প্রিভিউ গ্রিড */}
                    {previews.length > 0 && (
                      <div className="contact-preview-grid">
                        {previews.map((item, index) => (
                          <div className="contact-preview-item" key={index}>
                            <img src={item.url} alt="preview" />
                            <button
                              type="button"
                              className="contact-remove-img"
                              onClick={() => removeFile(index)}
                            >
                              <FiX />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
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
                      <option value="Urgent Printing">Urgent Printing</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="contact-submit-btn quote_submit_btn"
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Send"}</span>
                  </button>
                </div>

                {status.message && (
                  <p className={`form-status ${status.type}`}>
                    {status.message}
                  </p>
                )}
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

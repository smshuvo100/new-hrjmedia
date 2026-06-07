"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FiUploadCloud, FiX } from "react-icons/fi";
import "../../get-a-quote/get-a-quote.css";

export default function GetAQuoteWizard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [previews, setPreviews] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setPreviews([...previews, ...newPreviews]);
  };

  const removeFile = (index) => {
    const updated = [...previews];
    URL.revokeObjectURL(updated[index].url);
    updated.splice(index, 1);
    setPreviews(updated);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    previews.forEach((item) => formData.append("files", item.file));

    try {
      const res = await fetch("/api/get-a-quote", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Quote Request Sent Successfully!");
        setPreviews([]);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="quote_section">
      <div className="container">
        <div className="quote_layout">
          <div className="form_card">
            <h2>Send an email</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="quote_form">
              {/* Left Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <div className="input_group">
                  <label>Company name</label>
                  <input
                    {...register("companyName")}
                    placeholder="Enter company name"
                  />
                </div>
                <div className="input_group">
                  <label>First name *</label>
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="First name"
                  />
                </div>
                <div className="input_group">
                  <label>Last name</label>
                  <input {...register("lastName")} placeholder="Last name" />
                </div>
                <div className="input_group">
                  <label>Job Title / Role</label>
                  <input
                    {...register("jobTitle")}
                    placeholder="e.g. Manager, Designer"
                  />
                </div>
                <div className="input_group">
                  <label>Mobile phone number *</label>
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="input_group">
                  <label>Email address *</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="input_group">
                  <label>Preferred Delivery Date *</label>
                  <input
                    {...register("deliveryDate", { required: true })}
                    type="date"
                  />
                </div>
                <div className="input_group">
                  <label>Upload Artwork (Visual Preview)</label>
                  <div
                    className="upload_trigger"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <FiUploadCloud size={20} />
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
                  {previews.length > 0 && (
                    <div className="preview_grid">
                      {previews.map((item, index) => (
                        <div className="preview_item" key={index}>
                          <img src={item.url} alt="preview" />
                          <button
                            type="button"
                            className="remove_img"
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

              {/* Right Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <div className="input_group">
                  <label>Product Type *</label>
                  <div className="select_wrapper">
                    <select {...register("productType", { required: true })}>
                      <option value="">Select Product</option>
                      <option value="A4 Print">A4 Print</option>
                      <option value="A3 Print">A3 Print</option>
                      <option value="Banner">Banner</option>
                      <option value="Business Cards">Business Cards</option>
                      <option value="Posters">Posters</option>
                    </select>
                  </div>
                </div>
                <div className="input_group">
                  <label>Quantity *</label>
                  <input
                    {...register("quantity", { required: true })}
                    type="number"
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="input_group">
                  <label>Paper / Material Details</label>
                  <input
                    {...register("material")}
                    placeholder="e.g. 350gsm Silk, Gloss"
                  />
                </div>
                <div className="input_group">
                  <label>Delivery Method *</label>
                  <div className="select_wrapper">
                    <select {...register("deliveryMethod", { required: true })}>
                      <option value="">Select Method</option>
                      <option value="Store Collection">Store Collection</option>
                      <option value="Courier Delivery">Courier Delivery</option>
                    </select>
                  </div>
                </div>
                <div className="input_group">
                  <label>Turnaround Time *</label>
                  <div className="select_wrapper">
                    <select {...register("turnaround", { required: true })}>
                      <option value="">Select Turnaround</option>
                      <option value="Same Day">Same Day</option>
                      <option value="Overnight">Overnight</option>
                      <option value="Standard">Standard (2-3 Days)</option>
                    </select>
                  </div>
                </div>
                <div className="input_group">
                  <label>Message / Details *</label>
                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Describe extra details about your print order..."
                  />
                </div>
                <button type="submit" className="quote_submit_btn">
                  Send Request
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar - Updated to match Contact Us perfectly */}
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
                  <span>24/7 Support:</span>
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
  );
}

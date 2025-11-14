"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useFormStore } from "../store/useFormStore";
import "../get-a-quote.css";

export default function Step4Details() {
  const { setStep, formData } = useFormStore();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const fullData = {
      product: formData.product,
      delivery: formData.delivery,
      upload: formData.upload,
      userDetails: values,
    };

    try {
      const res = await fetch("/api/quote-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ Quote request sent successfully!");
      } else {
        alert("❌ Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Step 4 - Your Details</h2>

      <label className="label">Full Name*</label>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Enter your full name"
        className="input"
      />

      <label className="label">Email Address*</label>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="you@example.com"
        className="input"
      />

      <label className="label">Phone Number*</label>
      <input
        type="tel"
        {...register("phone", { required: true })}
        placeholder="e.g. +8801XXXXXXXXX"
        className="input"
      />

      <label className="label">Any extra notes?</label>
      <textarea
        {...register("instructions")}
        rows={3}
        placeholder="Add any special instructions..."
        className="input"
      ></textarea>

      <div className="btn-container">
        <button type="button" onClick={() => setStep(3)} className="btn-back">
          Back
        </button>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
}

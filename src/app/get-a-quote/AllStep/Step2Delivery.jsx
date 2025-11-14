// src/app/components/get-a-quote/AllStep/Step1Product.jsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useFormStore } from "../store/useFormStore";
import "../get-a-quote.css";

export default function Step2Delivery() {
  const { setStep, setFormData } = useFormStore();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData("delivery", data);
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Step 2 - Delivery Details</h2>

      <label className="label">Delivery Option*</label>
      <select
        {...register("deliveryOption", { required: true })}
        className="input"
      >
        <option value="">Select Delivery Option</option>
        <option value="Super Express">🚀 Super Express (Same Day)</option>
        <option value="Express">⚡ Express (Next Day)</option>
        <option value="Standard">📦 Standard (2 Working Days)</option>
      </select>

      <label className="label">Delivery Address*</label>
      <input
        type="text"
        {...register("address", { required: true })}
        placeholder="Enter full delivery address"
        className="input"
      />

      <div className="btn-container">
        <button type="button" onClick={() => setStep(1)} className="btn-back">
          Back
        </button>
        <button type="submit" className="btn-next">
          Next
        </button>
      </div>
    </form>
  );
}

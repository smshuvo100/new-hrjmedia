"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useFormStore } from "../store/useFormStore";
import "../get-a-quote.css";

export default function Step1Product() {
  const { setStep, setFormData } = useFormStore();
  const { register, handleSubmit, watch } = useForm();

  const selectedProduct = watch("productType");

  const onSubmit = (data) => {
    setFormData("product", data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Step 1 - Product</h2>

      <label className="label">Product Type*</label>
      <select
        {...register("productType", { required: true })}
        className="input"
      >
        <option value="">Select Product</option>
        <option value="A4 Print">A4 Print</option>
        <option value="A3 Print">A3 Print</option>
        <option value="Banner">Banner</option>
        <option value="Brochure/Booklet">Brochure/Booklet</option>
        <option value="Business Cards">Business Cards</option>
        <option value="Flyers">Flyers</option>
        <option value="Posters">Posters</option>
        <option value="Other">Other</option>
      </select>

      {/* Conditional Rendering for A4 Print */}
      {selectedProduct === "A4 Print" && (
        <div className="conditional-section">
          <p className="sub-title">A4 Print Options</p>

          <div className="field-group">
            <label className="label">Sides*</label>
            <div className="radio-card-group">
              <label>
                <input
                  type="radio"
                  {...register("sides")}
                  value="Single sided"
                />
                <div className="radio-card">
                  <span className="radio-dot"></span>
                  <p>Single sided</p>
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  {...register("sides")}
                  value="Double sided"
                />
                <div className="radio-card">
                  <span className="radio-dot"></span>
                  <p>Double sided</p>
                </div>
              </label>
            </div>
          </div>

          <div className="field-group">
            <label className="label">Colour*</label>
            <div className="radio-card-group">
              <label>
                <input
                  type="radio"
                  {...register("colour")}
                  value="Full Colour"
                />
                <div className="radio-card">
                  <span className="radio-dot"></span>
                  <p>Full Colour</p>
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  {...register("colour")}
                  value="Black & White"
                />
                <div className="radio-card">
                  <span className="radio-dot"></span>
                  <p>Black & White</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="btn-container">
        <button type="submit" className="btn-next">
          Next
        </button>
      </div>
    </form>
  );
}

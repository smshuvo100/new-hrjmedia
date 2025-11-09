"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useFormStore } from "../store/useFormStore";
import "../get-a-quote.css";

export default function Step3Upload() {
  const { setStep, setFormData } = useFormStore();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData("upload", data);
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Step 3 - Upload Design File</h2>

      <label className="label">Do you have a design file ready?*</label>
      <div className="radio-card-group">
        <label>
          <input type="radio" {...register("hasFile")} value="Yes" />
          <div className="radio-card">
            <span className="radio-dot"></span>
            <p>Yes, I’ll upload it now</p>
          </div>
        </label>

        <label>
          <input type="radio" {...register("hasFile")} value="No" />
          <div className="radio-card">
            <span className="radio-dot"></span>
            <p>No, please design for me</p>
          </div>
        </label>
      </div>

      <label className="label">Upload Files (optional)</label>
      <input type="file" multiple {...register("files")} className="input" />

      <div className="btn-container">
        <button type="button" onClick={() => setStep(2)} className="btn-back">
          Back
        </button>
        <button type="submit" className="btn-next">
          Next
        </button>
      </div>
    </form>
  );
}

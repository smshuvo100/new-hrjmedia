// src/app/components/get-a-quote/GetAQuoteWizard.jsx
"use client";
import React from "react";
import { useFormStore } from "./store/useFormStore";
import Step1Product from "./AllStep/Step1Product";
import Step2Delivery from "./AllStep/Step2Delivery";
import Step3Upload from "./AllStep/Step3Upload";
import Step4Details from "./AllStep/Step4Details";
import "./get-a-quote.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function Page() {
  const { step, setStep } = useFormStore();

  const steps = [
    { id: 1, title: "Product" },
    { id: 2, title: "Delivery" },
    { id: 3, title: "Upload" },
    { id: 4, title: "Your Details" },
  ];

  return (
    <>
      <Header />
      <div className="quote-wrapper">
        {/* Header */}
        <div className="quote-header-container">
          <div className="quote-header">
            <h2>Get a Quote</h2>
          </div>

          {/* Stepper */}
          <div className="stepper-modern">
            {steps.map((item) => (
              <div
                key={item.id}
                className={`stepper-modern-item ${
                  step === item.id ? "active" : ""
                } ${step > item.id ? "completed" : ""}`}
                onClick={() => setStep(item.id)}
              >
                <div className="step-circle">
                  {step > item.id ? "✓" : item.id}
                </div>
                <div className="step-label">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="quote-card">
          {step === 1 && <Step1Product />}
          {step === 2 && <Step2Delivery />}
          {step === 3 && <Step3Upload />}
          {step === 4 && <Step4Details />}
        </div>

        <div className="step-indicator">Step {step} of 4</div>
      </div>

      <Footer />
    </>
  );
}

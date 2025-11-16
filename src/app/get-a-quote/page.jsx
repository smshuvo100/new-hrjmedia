// src/app/components/get-a-quote/GetAQuoteWizard.jsx
"use client";
import React from "react";
import Image from "next/image";
import { useFormStore } from "./store/useFormStore";
import Step1Product from "./AllStep/Step1Product";
import Step2Delivery from "./AllStep/Step2Delivery";
import Step3Upload from "./AllStep/Step3Upload";
import Step4Details from "./AllStep/Step4Details";
import "./get-a-quote.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

import SubHero from "@/app/components/SubHero/SubHero";

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

      <SubHero bgImage="/images/assets/sub-header.webp" title="Get a Quote" />

      <section className="get-a-quote-section">
        <div className="container">
          <div className="quote-flex">
            <div className="quote-info">
              <h2 className="quote-title">
                How to Request a Quote Using This Form
              </h2>
              <p>
                We’ve created this simple 4-step form to help you request a
                print quote quickly and accurately. Just follow the steps below
                and provide the required details.
              </p>
              <ul>
                <li>
                  <div className="step-item">
                    <span className="num">1</span>
                    <div className="text">
                      <span className="title">Choose Your Product</span>
                      <p>
                        Select what you want to print—such as A4/A3 prints,
                        banners, flyers, business cards, or posters. Depending
                        on your selection, options like size, sides, and colour
                        may appear.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="step-item">
                    <span className="num">2</span>
                    <div className="text">
                      <span className="title">Select your delivery option</span>
                      <p>
                        Choose how quickly you need your order delivered,
                        whether it’s same-day delivery, next-day delivery, or
                        standard 2-day delivery.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="step-item">
                    <span className="num">3</span>
                    <div className="text">
                      <span className="title">
                        Upload your design file (optional)
                      </span>
                      <p>
                        If your artwork is ready, you can upload it here. If
                        not, simply choose No, and our design team will assist
                        you.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="step-item">
                    <span className="num">4</span>
                    <div className="text">
                      <span className="title">Enter your contact details</span>
                      <p>
                        Provide your name, email, phone number, and any
                        additional notes so we can prepare and send your quote
                        accurately.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// src/app/components/get-a-quote/GetAQuoteWizard.jsx
import React from "react";
import GetAQuoteWizard from "@/app/components/get-a-quote/GetAQuoteWizard";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./get-a-quote.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero bgImage="/images/assets/sub-header.webp" title="Get a Quote" />

      <GetAQuoteWizard />

      <FooterCta />
      <Footer />
    </>
  );
}

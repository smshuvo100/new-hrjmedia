// import React from "react";
// import Image from "next/image";
// import "./InStore.css";

// export default function InStore() {
//   return (
//     <>
//       {/*  print-steps-section. PrintSteps */}
//       <section className="in-store-section">
//         <div className="container">
//           <div className="header-center">
//             <h2>
//               Instant (in-store collection), Same Day and Overnight Printing in
//               London from HRJ Media
//             </h2>
//             <div className="content">
//               <p>
//                 A reliable print partner is crucial for tight deadlines, saving
//                 time and preventing last-minute stress. We offers expert advice,
//                 handles fulfillment a meticulous attention to detail and
//                 maintains brand consistency. A highly experienced,
//                 customer-focused printing service that emphasizes quality, speed
//                 and precision. We understand the urgency of your print needs
//                 without preventing delays and keeping your projects on track
//                 with professional results, even under pressure.
//               </p>
//               <p>
//                 We offer Same-Day Printing Service, Overnight Printing Service,
//                 In-Person Store Printing Service, Online Printing Service. Most
//                 advanced high-quality printing techniques and streamlined
//                 workflows to deliver high-quality urgent printing requirments
//                 with impressive and stunning image quality. We cover a wide
//                 range of full colour printing, low-cost black & white printing,
//                 standard and customise sizes in digital formate printing, large
//                 formate printing, personalised clothing.{" "}
//               </p>
//               <p>
//                 Most popular printing we do Posters, Business Cards, Flyers,
//                 Leaflets, Folded Leaflets, PVC Banners, Vinyl Stickers, Rollup
//                 Banners, Foam Boards, Foamex Boards, Photo, Saddle Stitch
//                 Booklet, Wire O Bound Booklets, Back Lit Posters, Wateproof
//                 Posters, Postcards, A2 Posters, A1 Posters, A0 Posters,
//                 Transparent Stickers, Window Graphics, Car Sticker, Menus,
//                 Receipt Pads, T-Shirt, Color Document Print, Low Cost Balck and
//                 White Document Print, Document Scan, Lamination and many more
//                 ...
//               </p>
//             </div>
//           </div>
//           <div className="in-store-box">
//             <div className="flax-box">
//               <div className="item">
//                 <h3>In-Store</h3>
//                 <p>Instant Printing</p>
//               </div>

//               <div className="item">
//                 <h3>Same Day</h3>
//                 <p>Instant Printing</p>
//               </div>

//               <div className="item">
//                 <h3>Overnignt</h3>
//                 <p>Instant Printing</p>
//               </div>

//               <div className="item">
//                 <h3>Online</h3>
//                 <p>Instant Printing</p>
//               </div>
//             </div>
//           </div>

//           <div className="orderBanner">
//             <div className="orderBanner__top">
//               Place an order by providing the project details and attach any
//               necessary files via email or our online quote form.
//             </div>

//             <div className="orderBanner__steps">
//               <span className="step">Request a quote</span>
//               <span className="arrow">⇒</span>

//               <span className="step">Receive a Quote</span>
//               <span className="arrow">⇒</span>

//               <span className="step">Approve &amp; Pay</span>
//               <span className="arrow">⇒</span>

//               <span className="step">Printing Starts</span>
//               <span className="arrow">⇒</span>

//               <span className="step">Delivery or Store Pick-Up</span>
//             </div>

//             <div className="orderBanner__bottom">
//               <b>Get in touch</b> to hear about our full range of printing
//               products.
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useMemo } from "react";
import "./InStore.css";
import { motion } from "framer-motion";

export default function InStore() {
  // ✅ Late trigger viewport (prevents early animation on fast load)
  const VIEWPORT = useMemo(
    () => ({
      once: true,
      amount: 0.1,
      margin: "0px 0px -30% 0px",
    }),
    [],
  );

  // ✅ Standard sequential animation system
  const wrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.2,
        },
      },
    }),
    [],
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  // ✅ tighter stagger for small items
  const gridWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.12,
        },
      },
    }),
    [],
  );

  const gridItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    [],
  );

  // ✅ banner step animation (horizontal, feels like flow)
  const stepItem = useMemo(
    () => ({
      hidden: { opacity: 0, x: -14 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    }),
    [],
  );

  return (
    <motion.section
      className="in-store-section"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={wrap}
    >
      <div className="container">
        {/* Header + Content */}
        <div className="header-center">
          <motion.h2 variants={item}>
            Instant (in-store collection), Same Day and Overnight Printing in
            London from HRJ Media
          </motion.h2>

          <motion.div className="content" variants={wrap}>
            <motion.p variants={item}>
              A reliable print partner is crucial for tight deadlines, saving
              time and preventing last-minute stress. We offers expert advice,
              handles fulfillment a meticulous attention to detail and maintains
              brand consistency. A highly experienced, customer-focused printing
              service that emphasizes quality, speed and precision. We
              understand the urgency of your print needs without preventing
              delays and keeping your projects on track with professional
              results, even under pressure.
            </motion.p>

            <motion.p variants={item}>
              We offer Same-Day Printing Service, Overnight Printing Service,
              In-Person Store Printing Service, Online Printing Service. Most
              advanced high-quality printing techniques and streamlined
              workflows to deliver high-quality urgent printing requirments with
              impressive and stunning image quality. We cover a wide range of
              full colour printing, low-cost black & white printing, standard
              and customise sizes in digital formate printing, large formate
              printing, personalised clothing.
            </motion.p>

            <motion.p variants={item}>
              Most popular printing we do Posters, Business Cards, Flyers,
              Leaflets, Folded Leaflets, PVC Banners, Vinyl Stickers, Rollup
              Banners, Foam Boards, Foamex Boards, Photo, Saddle Stitch Booklet,
              Wire O Bound Booklets, Back Lit Posters, Wateproof Posters,
              Postcards, A2 Posters, A1 Posters, A0 Posters, Transparent
              Stickers, Window Graphics, Car Sticker, Menus, Receipt Pads,
              T-Shirt, Color Document Print, Low Cost Balck and White Document
              Print, Document Scan, Lamination and many more ...
            </motion.p>
          </motion.div>
        </div>

        {/* 4 Boxes */}
        <motion.div className="in-store-box" variants={item}>
          <motion.div className="flax-box" variants={gridWrap}>
            {[
              { h: "In-Store", p: "Instant Printing" },
              { h: "Same Day", p: "Instant Printing" },
              { h: "Overnignt", p: "Instant Printing" },
              { h: "Online", p: "Instant Printing" },
            ].map((x, idx) => (
              <motion.div
                key={idx}
                className="item"
                variants={gridItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{x.h}</h3>
                <p>{x.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Order Banner */}
        <motion.div className="orderBanner" variants={wrap}>
          <motion.div className="orderBanner__top" variants={item}>
            Place an order by providing the project details and attach any
            necessary files via email or our online quote form.
          </motion.div>

          <motion.div className="orderBanner__steps" variants={gridWrap}>
            <motion.span className="step" variants={stepItem}>
              Request a quote
            </motion.span>
            <motion.span className="arrow" variants={stepItem}>
              ⇒
            </motion.span>

            <motion.span className="step" variants={stepItem}>
              Receive a Quote
            </motion.span>
            <motion.span className="arrow" variants={stepItem}>
              ⇒
            </motion.span>

            <motion.span className="step" variants={stepItem}>
              Approve &amp; Pay
            </motion.span>
            <motion.span className="arrow" variants={stepItem}>
              ⇒
            </motion.span>

            <motion.span className="step" variants={stepItem}>
              Printing Starts
            </motion.span>
            <motion.span className="arrow" variants={stepItem}>
              ⇒
            </motion.span>

            <motion.span className="step" variants={stepItem}>
              Delivery or Store Pick-Up
            </motion.span>
          </motion.div>

          <motion.div className="orderBanner__bottom" variants={item}>
            <b>Get in touch</b> to hear about our full range of printing
            products.
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

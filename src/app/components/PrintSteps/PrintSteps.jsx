// import React from "react";
// import Image from "next/image";
// import "./PrintSteps.css";

// import {
//   FiFileText,
//   FiShoppingCart,
//   FiHeadphones,
//   FiTruck,
//   FiEdit,
// } from "react-icons/fi";

// export default function PrintSteps() {
//   return (
//     <>
//       {/*  print-steps-section. PrintSteps */}
//       <section className="print-steps-section">
//         <div className="container">
//           <div className="header-center">
//             <h2>Easy Steps for Placing an Order</h2>
//             <p>
//               Getting your high-quality prints has been easier. HRJ Media make
//               the process simple, fast and stress-free. Just follow these three
//               steps and your prints will be ready in on time.
//             </p>
//           </div>

//           <div className="grid-box">
//             <div className="item">
//               <FiFileText />
//               <h2>Get A Quote 24/7</h2>
//               <p>Contact us for bespoke quotation</p>
//             </div>
//             <div className="item">
//               <FiShoppingCart />
//               <h2>Order Online 24/7</h2>
//               <p>Esily add items to your basket</p>
//             </div>
//             <div className="item">
//               <FiHeadphones />
//               <h2>Contact Us</h2>
//               <p>Do you need any help?</p>
//             </div>
//             <div className="item">
//               <FiTruck />
//               <h2>Collection or Delivery</h2>
//               <p>Store collection or delivery</p>
//             </div>
//             <div className="item">
//               <FiEdit />
//               <h2>Don’t Have Artwork</h2>
//               <p>We can create the artwork for you?</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import React, { useMemo } from "react";
import "./PrintSteps.css";
import {
  FiFileText,
  FiShoppingCart,
  FiHeadphones,
  FiTruck,
  FiEdit,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function PrintSteps() {
  // ✅ Late trigger viewport (prevents below-the-fold from animating on load)
  const VIEWPORT = useMemo(
    () => ({
      once: true,
      amount: 0.1, // ✅ at least 55% visible then trigger
      margin: "0px 0px -25% 0px", // ✅ shrink viewport bottom
    }),
    [],
  );

  // ✅ Sequential parent
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

  // ✅ Fade up item
  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 25 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  // ✅ Grid parent
  const gridWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.15,
        },
      },
    }),
    [],
  );

  const gridItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
      },
    }),
    [],
  );

  // ✅ Icon pop
  const iconPop = useMemo(
    () => ({
      hidden: { scale: 0.85, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    }),
    [],
  );

  const steps = useMemo(
    () => [
      {
        icon: <FiFileText />,
        title: "Get A Quote 24/7",
        desc: "Contact us for bespoke quotation",
      },
      {
        icon: <FiShoppingCart />,
        title: "Order Online 24/7",
        desc: "Esily add items to your basket",
      },
      {
        icon: <FiHeadphones />,
        title: "Contact Us",
        desc: "Do you need any help?",
      },
      {
        icon: <FiTruck />,
        title: "Collection or Delivery",
        desc: "Store collection or delivery",
      },
      {
        icon: <FiEdit />,
        title: "Don’t Have Artwork",
        desc: "We can create the artwork for you?",
      },
    ],
    [],
  );

  return (
    <motion.section
      className="print-steps-section"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={wrap}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="header-center" variants={wrap}>
          <motion.h2 variants={item}>Easy Steps for Placing an Order</motion.h2>

          <motion.p variants={item}>
            Getting your high-quality prints has been easier. HRJ Media make the
            process simple, fast and stress-free. Just follow these three steps
            and your prints will be ready in on time.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid-box" variants={gridWrap}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="item"
              variants={gridItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div variants={iconPop}>{step.icon}</motion.div>
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

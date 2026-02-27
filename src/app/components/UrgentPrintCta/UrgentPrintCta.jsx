// import React from "react";

// import { FiPhoneCall } from "react-icons/fi";
// import { MdPhoneIphone, MdEmail } from "react-icons/md";

// import "./UrgentPrintCta.css";

// export default function UrgentPrintCta() {
//   return (
//     <>
//       <section className="urgent-print-cta">
//         <div className="container">
//           <div className="cta-box">
//             {/* LEFT CONTENT */}
//             <div className="coll-left">
//               <p className="cta-text">
//                 For urgent and high quality print with quick turnaround, we will
//                 be happy to provide a personalised quote.
//               </p>

//               <div className="cta-contact">
//                 <a href="tel:02081234567">
//                   <FiPhoneCall />
//                   <span className="c-text">Office Hours: </span>
//                   <span className="c-number">0208 123 4567</span>
//                 </a>

//                 <a href="tel:07589876543">
//                   <MdPhoneIphone />

//                   <span className="c-text">Chat or Call (24/7): </span>
//                   <span className="c-number">0758 987 6543</span>
//                 </a>

//                 <a href="mailto:info@hrjmedia.com">
//                   <MdEmail />
//                   <span className="c-text">Email us: </span>
//                   <span className="c-number">info@hrjmedia.com</span>
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT BUTTON */}
//             <div className="coll-right">
//               <div className="btn">
//                 <a href="/get-a-quote" className="cta-btn">
//                   Get a Quote
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { FiPhoneCall } from "react-icons/fi";
import { MdPhoneIphone, MdEmail } from "react-icons/md";

import "./UrgentPrintCta.css";

export default function UrgentPrintCta() {
  // ✅ Viewport rule (same across all sections)
  const VIEWPORT_ONCE = useMemo(() => ({ once: true, amount: 0.25 }), []);

  // ✅ Standard sequential animation
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
      hidden: { opacity: 0, y: 22 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  return (
    <motion.section
      className="urgent-print-cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={VIEWPORT_ONCE}
    >
      {/* ✨ Animated Glow Layer (always subtle looping) */}
      <motion.div
        className="cta-bg-glow"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container">
        <div className="cta-box">
          {/* LEFT */}
          <div className="coll-left">
            <motion.div
              variants={wrap}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <motion.p className="cta-text" variants={item}>
                For urgent and high quality print with quick turnaround, we will
                be happy to provide a personalised quote.
              </motion.p>

              <motion.div className="cta-contact" variants={wrap}>
                <motion.a href="tel:02081234567" variants={item}>
                  <FiPhoneCall />
                  <span className="c-text">Office Hours: </span>
                  <span className="c-number">0208 123 4567</span>
                </motion.a>

                <motion.a href="tel:07589876543" variants={item}>
                  <MdPhoneIphone />
                  <span className="c-text">Chat or Call (24/7): </span>
                  <span className="c-number">0758 987 6543</span>
                </motion.a>

                <motion.a href="mailto:info@hrjmedia.com" variants={item}>
                  <MdEmail />
                  <span className="c-text">Email us: </span>
                  <span className="c-number">info@hrjmedia.com</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT BUTTON */}
          <div className="coll-right">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="btn"
            >
              <motion.a
                href="/get-a-quote"
                className="cta-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>Get a Quote</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

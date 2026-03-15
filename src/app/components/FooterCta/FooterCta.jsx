"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { MdPhoneIphone, MdEmail } from "react-icons/md";

import "./FooterCta.css";

export default function FooterCta() {
  const viewport = useMemo(
    () => ({
      once: true,
      amount: 0.25,
    }),
    [],
  );

  const sectionWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.18,
          delayChildren: 0.1,
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

  const gridWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.15,
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

  return (
    <motion.section
      className="container footer-cta"
      variants={sectionWrap}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.div className="urgent-print-cta" variants={item}>
        <motion.div className="cta-box" variants={item}>
          <motion.div className="coll-left" variants={item}>
            <motion.p className="cta-text" variants={item}>
              For urgent and high quality print with quick turnaround, we will
              be happy to provide a personalised quote.
            </motion.p>

            <motion.div className="cta-contact" variants={gridWrap}>
              <motion.a
                href="tel:02081234567"
                variants={gridItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhoneCall />
                <span className="c-text">Office Hours: </span>
                <span className="c-number">0208 123 4567</span>
              </motion.a>

              <motion.a
                href="tel:07589876543"
                variants={gridItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdPhoneIphone />
                <span className="c-text">Chat or Call (24/7): </span>
                <span className="c-number">0758 987 6543</span>
              </motion.a>

              <motion.a
                href="mailto:info@hrjmedia.com"
                variants={gridItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdEmail />
                <span className="c-text">Email us: </span>
                <span className="c-number">info@hrjmedia.com</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="coll-right" variants={item}>
            <motion.div className="btn" variants={item}>
              <motion.a
                href="/get-a-quote"
                className="cta-btn"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>Get a Quote</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

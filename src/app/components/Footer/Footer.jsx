// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "./Footer.css";

// import { FiPhoneCall } from "react-icons/fi";

// import { MdPhoneIphone, MdEmail } from "react-icons/md";

// import { FiMail, FiHeadphones } from "react-icons/fi";
// import { HiOutlineChatAlt2 } from "react-icons/hi";
// import { BiChat } from "react-icons/bi";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaXTwitter,
//   FaYoutube,
//   FaPinterestP,
//   FaLinkedinIn,
// } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <>
//       <footer className="footer">
//         {/* <div className="newsletter">
//           <div className="container">
//             <div className="flex-box">
//               <div className="newsletter-content">
//                 <h4>
//                   Sign up for our newsletter and get a 10% discount on your
//                   first order!
//                 </h4>
//                 <p>
//                   You&apos;ll be the first to know about irresistible offers &
//                   exclusive print deals!
//                 </p>
//               </div>
//               <div className="newsletter-form">
//                 <form>
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     required
//                   />
//                   <button type="submit">Submit</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <section className="container footer-cta">
//           <div className="urgent-print-cta">
//             <div className="cta-box">
//               {/* LEFT CONTENT */}
//               <div className="coll-left">
//                 <p className="cta-text">
//                   For urgent and high quality print with quick turnaround, we
//                   will be happy to provide a personalised quote.
//                 </p>

//                 <div className="cta-contact">
//                   <a href="tel:02081234567">
//                     <FiPhoneCall />
//                     <span className="c-text">Office Hours: </span>
//                     <span className="c-number">0208 123 4567</span>
//                   </a>

//                   <a href="tel:07589876543">
//                     <MdPhoneIphone />

//                     <span className="c-text">Chat or Call (24/7): </span>
//                     <span className="c-number">0758 987 6543</span>
//                   </a>

//                   <a href="mailto:info@hrjmedia.com">
//                     <MdEmail />
//                     <span className="c-text">Email us: </span>
//                     <span className="c-number">info@hrjmedia.com</span>
//                   </a>
//                 </div>
//               </div>

//               {/* RIGHT BUTTON */}
//               <div className="coll-right">
//                 <div className="btn">
//                   <a href="/get-a-quote" className="cta-btn">
//                     Get a Quote
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="google-review">
//           <div className="container">
//             <div className="flex-box">
//               <div className="info-box">
//                 <div className="avatar">
//                   <Image
//                     src="/images/assets/icon1.png"
//                     alt="products"
//                     width={50}
//                     height={50}
//                   />
//                 </div>

//                 <div className="text-wrap">
//                   <h4>Do you need help?</h4>
//                   <ul>
//                     <li>
//                       <a href="#" target="_blank">
//                         <BiChat />
//                         <span>Chat with us</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <FiMail />
//                         <span>Email us</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="mailto:tqBZU@example.com">
//                         <FiHeadphones />
//                         <span>Help Center</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="google-icon">
//                 <Image
//                   className="google-find-us"
//                   src="/images/assets/find-us-google.png"
//                   alt="products"
//                   width={200}
//                   height={84}
//                 />

//                 <Image
//                   className="google-verified-reviews"
//                   src="/images/assets/google-verified-reviews.png"
//                   alt="products"
//                   width={400}
//                   height={76}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="main-footer">
//           <div className="container">
//             <div className="flex-box">
//               <div className="footer-item sm1">
//                 <h4>Our services</h4>
//                 <ul>
//                   <li>
//                     <Link href="/">All products</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Request a quote</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Payment methods</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Store Collection & Fast Delivery</Link>
//                   </li>
//                   <li>
//                     <Link href="/">24/7 Printing Turnaround</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-item sm2">
//                 <h4>Who we are</h4>
//                 <ul>
//                   <li>
//                     <Link href="/">About Us</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Contact Us</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Reseller Solutions</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Artwork Information</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Newsroom</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-item sm3">
//                 <h4>Help Center</h4>
//                 <ul>
//                   <li>
//                     <Link href="/">Contact Us</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Frequently Asked Questions</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Don't Have Artwork?</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Same Day Store Collection</Link>
//                   </li>
//                   <li>
//                     <Link href="/">Overnight Store Collection</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-item sm4">
//                 <h4>Contact Us</h4>
//                 <ul>
//                   <li>
//                     <a href="#">HRJ Media</a>
//                   </li>
//                   <li>
//                     <a href="#">97 Burdett Road, London E3 4JN</a>
//                   </li>
//                   <li>
//                     <a href="#">Phone: 020 8980 4585</a>
//                   </li>
//                   <li>
//                     <a href="#">Email: info@hrjmedia.com</a>
//                   </li>
//                   <li>
//                     <a href="#">Web: www.hrjmedia.com</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-item sm5">
//                 <h4>Self Service</h4>
//                 <ul>
//                   <li>
//                     <a href="#">My account</a>
//                   </li>
//                   <li>
//                     <a href="#">My orders</a>
//                   </li>
//                   <li>
//                     <a href="#">My invoices</a>
//                   </li>
//                   <li>
//                     <a href="#">For Resellers</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="footer-copyright">
//           <div className="container">
//             <div className="footer-bottom-flex">
//               {/* LEFT: Logo */}
//               <div className="footer-logo">
//                 <a href="/">
//                   <Image
//                     src="/images/assets/HRJ-Media.gif"
//                     alt="HRJ Media"
//                     width={120}
//                     height={32}
//                   />
//                 </a>
//               </div>

//               {/* CENTER: Policy Links */}
//               <div className="footer-links">
//                 <a href="/terms-and-conditions">Terms &amp; Conditions</a>
//                 <a href="/cookie-statement">Cookie Statement</a>
//                 <a href="/privacy-policy">Privacy policy</a>
//               </div>

//               {/* CENTER: Payments */}
//               <div className="footer-payments">
//                 <Image
//                   src="/images/assets/img6.webp"
//                   alt="Payments"
//                   width={303}
//                   height={24}
//                 />
//               </div>

//               {/* RIGHT: Social */}
//               <div className="footer-social">
//                 <span className="social-title">Social Media</span>

//                 <div className="social-icons">
//                   <a href="#" aria-label="Facebook">
//                     <FaFacebookF />
//                   </a>
//                   <a href="#" aria-label="Instagram">
//                     <FaInstagram />
//                   </a>
//                   <a href="#" aria-label="X">
//                     <FaXTwitter />
//                   </a>
//                   <a href="#" aria-label="YouTube">
//                     <FaYoutube />
//                   </a>
//                   <a href="#" aria-label="Pinterest">
//                     <FaPinterestP />
//                   </a>
//                   <a href="#" aria-label="LinkedIn">
//                     <FaLinkedinIn />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

import { motion } from "framer-motion";

import { FiPhoneCall, FiMail, FiHeadphones } from "react-icons/fi";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { BiChat } from "react-icons/bi";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  // ✅ Late trigger viewport (prevents early trigger on load)
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
          staggerChildren: 0.18,
          delayChildren: 0.15,
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

  // ✅ Tighter grid stagger
  const gridWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
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
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={wrap}
    >
      {/* CTA inside footer */}
      <motion.section className="container footer-cta" variants={item}>
        <div className="urgent-print-cta">
          <div className="cta-box">
            {/* LEFT CONTENT */}
            <div className="coll-left">
              <motion.p className="cta-text" variants={item}>
                For urgent and high quality print with quick turnaround, we will
                be happy to provide a personalised quote.
              </motion.p>

              <motion.div className="cta-contact" variants={gridWrap}>
                <motion.a href="tel:02081234567" variants={gridItem}>
                  <FiPhoneCall />
                  <span className="c-text">Office Hours: </span>
                  <span className="c-number">0208 123 4567</span>
                </motion.a>

                <motion.a href="tel:07589876543" variants={gridItem}>
                  <MdPhoneIphone />
                  <span className="c-text">Chat or Call (24/7): </span>
                  <span className="c-number">0758 987 6543</span>
                </motion.a>

                <motion.a href="mailto:info@hrjmedia.com" variants={gridItem}>
                  <MdEmail />
                  <span className="c-text">Email us: </span>
                  <span className="c-number">info@hrjmedia.com</span>
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT BUTTON */}
            <div className="coll-right">
              <motion.div className="btn" variants={item}>
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

      {/* Google Review Bar */}
      <motion.div className="google-review" variants={item}>
        <div className="container">
          <div className="flex-box">
            <motion.div className="info-box" variants={gridWrap}>
              <motion.div className="avatar" variants={gridItem}>
                <Image
                  src="/images/assets/icon1.png"
                  alt="products"
                  width={50}
                  height={50}
                />
              </motion.div>

              <motion.div className="text-wrap" variants={gridItem}>
                <h4>Do you need help?</h4>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <BiChat />
                      <span>Chat with us</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiMail />
                      <span>Email us</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:tqBZU@example.com">
                      <FiHeadphones />
                      <span>Help Center</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="google-icon" variants={gridWrap}>
              <motion.div variants={gridItem}>
                <Image
                  className="google-find-us"
                  src="/images/assets/find-us-google.png"
                  alt="products"
                  width={200}
                  height={84}
                />
              </motion.div>

              <motion.div variants={gridItem}>
                <Image
                  className="google-verified-reviews"
                  src="/images/assets/google-verified-reviews.png"
                  alt="products"
                  width={400}
                  height={76}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Links */}
      <motion.div className="main-footer" variants={item}>
        <div className="container">
          <motion.div className="flex-box" variants={gridWrap}>
            <motion.div className="footer-item sm1" variants={gridItem}>
              <h4>Our services</h4>
              <ul>
                <li>
                  <Link href="/">All products</Link>
                </li>
                <li>
                  <Link href="/">Request a quote</Link>
                </li>
                <li>
                  <Link href="/">Payment methods</Link>
                </li>
                <li>
                  <Link href="/">Store Collection & Fast Delivery</Link>
                </li>
                <li>
                  <Link href="/">24/7 Printing Turnaround</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-item sm2" variants={gridItem}>
              <h4>Who we are</h4>
              <ul>
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Reseller Solutions</Link>
                </li>
                <li>
                  <Link href="/">Artwork Information</Link>
                </li>
                <li>
                  <Link href="/">Newsroom</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-item sm3" variants={gridItem}>
              <h4>Help Center</h4>
              <ul>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Frequently Asked Questions</Link>
                </li>
                <li>
                  <Link href="/">Don't Have Artwork?</Link>
                </li>
                <li>
                  <Link href="/">Same Day Store Collection</Link>
                </li>
                <li>
                  <Link href="/">Overnight Store Collection</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-item sm4" variants={gridItem}>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="#">HRJ Media</a>
                </li>
                <li>
                  <a href="#">97 Burdett Road, London E3 4JN</a>
                </li>
                <li>
                  <a href="#">Phone: 020 8980 4585</a>
                </li>
                <li>
                  <a href="#">Email: info@hrjmedia.com</a>
                </li>
                <li>
                  <a href="#">Web: www.hrjmedia.com</a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-item sm5" variants={gridItem}>
              <h4>Self Service</h4>
              <ul>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">My orders</a>
                </li>
                <li>
                  <a href="#">My invoices</a>
                </li>
                <li>
                  <a href="#">For Resellers</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div className="footer-copyright" variants={item}>
        <div className="container">
          <div className="footer-bottom-flex">
            {/* LEFT: Logo */}
            <motion.div className="footer-logo" variants={gridItem}>
              <a href="/">
                <Image
                  src="/images/assets/HRJ-Media.gif"
                  alt="HRJ Media"
                  width={120}
                  height={32}
                />
              </a>
            </motion.div>

            {/* CENTER: Policy Links */}
            <motion.div className="footer-links" variants={gridItem}>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
              <a href="/cookie-statement">Cookie Statement</a>
              <a href="/privacy-policy">Privacy policy</a>
            </motion.div>

            {/* Payments */}
            <motion.div className="footer-payments" variants={gridItem}>
              <Image
                src="/images/assets/img6.webp"
                alt="Payments"
                width={303}
                height={24}
              />
            </motion.div>

            {/* Social */}
            <motion.div className="footer-social" variants={gridItem}>
              <span className="social-title">Social Media</span>

              <div className="social-icons">
                <motion.a
                  href="#"
                  aria-label="Facebook"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Instagram"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="X"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaXTwitter />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="YouTube"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Pinterest"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPinterestP />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}

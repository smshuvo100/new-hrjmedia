// // File: src/app/components/Header/Header.jsx

// import React from "react";
// import { FaHeadset } from "react-icons/fa6";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { FiLogIn } from "react-icons/fi";
// import { IoMdSearch } from "react-icons/io";
// import Image from "next/image";
// import Link from "next/link";
// import "./Header.css";
// import { MainHeader } from "./MainHeader";
// import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

// export default function Header() {
//   return (
//     <>
//       <header className="header">
//         <div className="top-header-1">
//           <div className="container">
//             <div className="flex-box">
//               <div className="top-left-header">
//                 <p>
//                   <strong>Same Day</strong> and <strong>Overnight </strong>
//                   printing services in London.
//                 </p>
//               </div>
//               <div className="top-right-header-menu">
//                 <div className="header-buttons">
//                   <div className="btn2">
//                     <button className="login-btn">
//                       <FiLogIn /> Login / Register
//                     </button>
//                   </div>
//                   <button className="cart-btn">
//                     <IoCartOutline /> Basket{" "}
//                     <span className="cart-icon">(Empty)</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="top-header">
//           <div className="container">
//             <div className="flex-box">
//               <div className="logo">
//                 <Link href="/">
//                   <Image
//                     src="/images/assets/HRJ-Media.gif"
//                     alt="products"
//                     width={140}
//                     height={37}
//                   />
//                 </Link>
//               </div>

//               <div className="search-form">
//                 <form>
//                   <input type="email" placeholder="Search . . ." required />
//                   <button type="submit">
//                     <IoMdSearch />
//                   </button>
//                 </form>
//               </div>

//               <div className="header-right">
//                 <ul>
//                   <li>
//                     <a href="tel:02081234567">
//                       <FaPhoneAlt />
//                       <span>0208 123 4567</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="tel:07589876543">
//                       <FaMobileAlt />
//                       <span>0758 987 6543</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="mailto:info@hrjmedia.com">
//                       <FaEnvelope />
//                       <span>info@hrjmedia.com</span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* MainHeader */}
//         <MainHeader />

//         <div className="last-header">
//           <div className="container">
//             <div className="last-header-all">
//               <div className="left-box">
//                 <div className="left-box-card1">
//                   <a href="#">
//                     🤑{" "}
//                     <span>
//                       Quick <strong>Turnaround</strong>
//                     </span>
//                   </a>
//                 </div>

//                 <div className="left-box-card2">
//                   <a href="#">
//                     🔥{" "}
//                     <span>
//                       High <strong>Quality Printing</strong>
//                     </span>
//                   </a>
//                 </div>

//                 <div className="left-box-card3">
//                   <a href="#">
//                     👍{" "}
//                     <span>
//                       <strong>Same Day Print</strong> Service
//                     </span>
//                   </a>
//                 </div>

//                 <div className="left-box-card4">
//                   <a href="#">
//                     ⏰{" "}
//                     <span>
//                       <strong>Overnight Print</strong> Service
//                     </span>
//                   </a>
//                 </div>

//                 <div className="left-box-card5">
//                   <a href="#">
//                     💯{" "}
//                     <span>
//                       100% <strong>Satisfaction</strong>
//                     </span>
//                   </a>
//                 </div>
//                 <div className="left-box-card6">
//                   <a href="#">
//                     📅{" "}
//                     <span>
//                       7 Days a Week <strong>(24/7)</strong>
//                     </span>
//                   </a>
//                 </div>
//               </div>

//               <div className="right-box">
//                 <div className="info-box">
//                   <div className="avatar">
//                     <Image
//                       src="/images/assets/icon1.png"
//                       alt="products"
//                       width={43}
//                       height={43}
//                     />
//                   </div>

//                   <div className="text-wrap">
//                     <h4>Do you need help?</h4>
//                     <ul>
//                       <li>
//                         <a href="#" target="_blank">
//                           Chat with us
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }
// File: src/app/components/Header/Header.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeadset } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { MainHeader } from "./MainHeader";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const headerIn = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, delay } },
  });

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <>
      <motion.header
        className="header"
        variants={headerIn}
        initial="hidden"
        animate="visible"
      >
        <div className="top-header-1">
          <div className="container">
            <div className="flex-box">
              <div className="top-left-header">
                <p>
                  <strong>Same Day</strong> and <strong>Overnight </strong>
                  printing services in London.
                </p>
              </div>

              <div className="top-right-header-menu">
                <div className="header-buttons">
                  <div className="btn2">
                    {/* button tag unchanged, only motion wrapper */}
                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button className="login-btn">
                        <FiLogIn /> Login / Register
                      </button>
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <button className="cart-btn">
                      <IoCartOutline /> Basket{" "}
                      <span className="cart-icon">(Empty)</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-header">
          <div className="container">
            <div className="flex-box">
              <motion.div
                className="logo"
                variants={fadeIn(0.1)}
                initial="hidden"
                animate="visible"
              >
                <Link href="/">
                  <Image
                    src="/images/assets/HRJ-Media.gif"
                    alt="products"
                    width={140}
                    height={37}
                  />
                </Link>
              </motion.div>

              <motion.div
                className="search-form"
                variants={fadeIn(0.2)}
                initial="hidden"
                animate="visible"
              >
                <form>
                  <input type="text" placeholder="Search . . ." required />
                  <button type="submit">
                    <IoMdSearch />
                  </button>
                </form>
              </motion.div>

              {/* keep ul/li/a EXACT same, only wrap li with motion.li */}
              <div className="header-right">
                <motion.ul
                  variants={listStagger}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={itemUp}>
                    <a href="tel:02081234567">
                      <FaPhoneAlt />
                      <span>0208 123 4567</span>
                    </a>
                  </motion.li>

                  <motion.li variants={itemUp}>
                    <a href="tel:07589876543">
                      <FaMobileAlt />
                      <span>0758 987 6543</span>
                    </a>
                  </motion.li>

                  <motion.li variants={itemUp}>
                    <a href="mailto:info@hrjmedia.com">
                      <FaEnvelope />
                      <span>info@hrjmedia.com</span>
                    </a>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>

        {/* MainHeader unchanged */}
        <MainHeader />

        <div className="last-header">
          <div className="container">
            {/* keep last-header-all intact */}
            <div className="last-header-all">
              <div className="left-box">
                {/* keep each card markup EXACT same, just wrap the card div */}
                <motion.div
                  className="left-box-card1"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    🤑{" "}
                    <span>
                      Quick <strong>Turnaround</strong>
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  className="left-box-card2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    🔥{" "}
                    <span>
                      High <strong>Quality Printing</strong>
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  className="left-box-card3"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    👍{" "}
                    <span>
                      <strong>Same Day Print</strong> Service
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  className="left-box-card4"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    ⏰{" "}
                    <span>
                      <strong>Overnight Print</strong> Service
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  className="left-box-card5"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    💯{" "}
                    <span>
                      100% <strong>Satisfaction</strong>
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  className="left-box-card6"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#">
                    📅{" "}
                    <span>
                      7 Days a Week <strong>(24/7)</strong>
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* right-box kept intact */}
              <div className="right-box">
                <motion.div
                  className="info-box"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                >
                  <div className="avatar">
                    <Image
                      src="/images/assets/icon1.png"
                      alt="products"
                      width={43}
                      height={43}
                    />
                  </div>

                  <div className="text-wrap">
                    <h4>Do you need help?</h4>
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          Chat with us
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

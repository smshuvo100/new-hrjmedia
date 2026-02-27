// import React from "react";
// import Image from "next/image";
// import "./BestWeeklySellers.css";

// export default function ProductCategory() {
//   return (
//     <>
//       <section className="best-weekly-sellers-section">
//         <div className="container">
//           <div className="header-center">
//             <h2>
//               Best Weekly Sellers
//               <span>(Same Day Store Collection or Delivery)</span>
//             </h2>
//           </div>

//           <div className="grid-box">
//             <div className="item">
//               <Image
//                 src="/images/assets/roller-banners.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Roller Banners</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/staple-booklets.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Staple Booklets</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/leaflet-and-flyers.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Leaflet and Flyers</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/transparent-sticker.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Transparent Sticker</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/business-cards.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Business Cards</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/posters.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Posters</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/a4-document-print.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>A4 Document Print</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/backlit-poster.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Backlit Poster</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/wire-bound-booklet.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Wire Bound Booklet</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/pvc-banner.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>PVC Banner</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/foam-board.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Foam Board</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/foamex-boards.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Foamex Boards</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/window-vinyl-sticker.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Window Vinyl Sticker</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/comb-bound-booklet.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Comb Bound Booklet</h5>
//             </div>

//             <div className="item">
//               <Image
//                 src="/images/assets/name-cards.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Name Cards</h5>
//             </div>
//             <div className="item">
//               <Image
//                 src="/images/assets/t-shirt.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>T-Shirt</h5>
//             </div>
//             <div className="item">
//               <Image
//                 src="/images/assets/vinyl-print-shape-cut.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Vinyl Print & Shape Cut</h5>
//             </div>
//             <div className="item">
//               <Image
//                 src="/images/assets/folded-leaflets.jpg"
//                 alt="Event & Festival"
//                 width={250}
//                 height={287}
//               />
//               <h5>Folded Leaflets</h5>
//             </div>
//             {/*  */}
//             {/*  */}
//             {/*  */}
//             {/*  */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import "./BestWeeklySellers.css";
import { motion } from "framer-motion";

export default function ProductCategory() {
  // ✅ Late trigger viewport (prevents early animation)
  const VIEWPORT = useMemo(
    () => ({
      once: true,
      amount: 0.1,
      margin: "0px 0px -30% 0px",
    }),
    [],
  );

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
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  // ✅ Grid stagger (a bit tighter)
  const gridWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.08,
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
        transition: { duration: 0.45, ease: "easeOut" },
      },
    }),
    [],
  );

  const products = useMemo(
    () => [
      { src: "/images/assets/roller-banners.jpg", title: "Roller Banners" },
      { src: "/images/assets/staple-booklets.jpg", title: "Staple Booklets" },
      {
        src: "/images/assets/leaflet-and-flyers.jpg",
        title: "Leaflet and Flyers",
      },
      {
        src: "/images/assets/transparent-sticker.jpg",
        title: "Transparent Sticker",
      },
      { src: "/images/assets/business-cards.jpg", title: "Business Cards" },
      { src: "/images/assets/posters.jpg", title: "Posters" },
      {
        src: "/images/assets/a4-document-print.jpg",
        title: "A4 Document Print",
      },
      { src: "/images/assets/backlit-poster.jpg", title: "Backlit Poster" },
      {
        src: "/images/assets/wire-bound-booklet.jpg",
        title: "Wire Bound Booklet",
      },
      { src: "/images/assets/pvc-banner.jpg", title: "PVC Banner" },
      { src: "/images/assets/foam-board.jpg", title: "Foam Board" },
      { src: "/images/assets/foamex-boards.jpg", title: "Foamex Boards" },
      {
        src: "/images/assets/window-vinyl-sticker.jpg",
        title: "Window Vinyl Sticker",
      },
      {
        src: "/images/assets/comb-bound-booklet.jpg",
        title: "Comb Bound Booklet",
      },
      { src: "/images/assets/name-cards.jpg", title: "Name Cards" },
      { src: "/images/assets/t-shirt.jpg", title: "T-Shirt" },
      {
        src: "/images/assets/vinyl-print-shape-cut.jpg",
        title: "Vinyl Print & Shape Cut",
      },
      { src: "/images/assets/folded-leaflets.jpg", title: "Folded Leaflets" },
    ],
    [],
  );

  return (
    <motion.section
      className="best-weekly-sellers-section"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={wrap}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="header-center" variants={wrap}>
          <motion.h2 variants={item}>
            Best Weekly Sellers
            <span>(Same Day Store Collection or Delivery)</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid-box" variants={gridWrap}>
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              className="item"
              variants={gridItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={p.src} alt={p.title} width={250} height={287} />
              <h5>{p.title}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import "./HeroSlider.css";

// export default function HeroSlider({ slides }) {
//   // ✅ Initialize Embla with Autoplay plugin
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
//   ]);

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollTo = useCallback(
//     (index) => {
//       if (emblaApi) {
//         emblaApi.scrollTo(index);
//         const autoplay = emblaApi.plugins()?.autoplay;
//         if (autoplay) autoplay.reset();
//       }
//     },
//     [emblaApi],
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="hero-section">
//       <div className="container">
//         <div className="embla" ref={emblaRef}>
//           <div className="embla__container">
//             {slides.map((slide) => (
//               <div
//                 className="embla__slide"
//                 key={slide.id}
//                 style={{
//                   backgroundImage: `url(${slide.bg})`,
//                 }}
//               >
//                 <div className="hero-all">
//                   <div className="hero-left">
//                     <div className="hero-left-text">
//                       <div className="left-title">
//                         <div className="text">
//                           <h1>
//                             <strong>{slide.titleStrong}</strong>{" "}
//                             {slide.titleRest}
//                           </h1>
//                           {/* <h4>{slide.subtitle}</h4> */}
//                           <p>{slide.paragraph}</p>
//                         </div>
//                         <div className="btn">
//                           <button>{slide.buttonText}</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hero-center"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ✅ Fixed Right Buttons */}
//         <div className="hero-right">
//           {slides.map((btn, index) => (
//             <button
//               key={btn.id}
//               onClick={() => scrollTo(index)}
//               className={selectedIndex === index ? "active" : ""}
//             >
//               <h5>
//                 <strong>{btn.titleStrong}</strong> {btn.titleRest}
//               </h5>
//               <p>{btn.subtitle}</p>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import "./HeroSlider.css";

export default function HeroSlider({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        const autoplay = emblaApi.plugins()?.autoplay;
        if (autoplay) autoplay.reset();
      }
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  /* =========================
     RIGHT BOX (slightly faster)
  ========================== */

  const rightBoxWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.18, // 🔥 slightly faster (was 0.28)
          delayChildren: 0.25,
        },
      },
    }),
    [],
  );

  const rightBoxItem = useMemo(
    () => ({
      hidden: { opacity: 0, x: 35 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.55, // 🔥 slightly faster (was 0.75)
          ease: "easeOut",
        },
      },
    }),
    [],
  );

  /* =========================
     HERO TEXT SEQUENTIAL
  ========================== */

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22, // one after another
        delayChildren: 0.2,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div
                className="embla__slide"
                key={slide.id}
                style={{
                  backgroundImage: `url(${slide.bg})`,
                }}
              >
                <div className="hero-all">
                  <div className="hero-left">
                    <div className="hero-left-text">
                      <div className="left-title">
                        {/* 🔥 Sequential Animation Here */}
                        <motion.div
                          variants={textContainer}
                          initial="hidden"
                          animate="show"
                        >
                          <motion.h1 variants={textItem}>
                            <strong>{slide.titleStrong}</strong>{" "}
                            {slide.titleRest}
                          </motion.h1>

                          <motion.p variants={textItem}>
                            {slide.paragraph}
                          </motion.p>

                          <motion.div className="btn" variants={textItem}>
                            <motion.button
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                            >
                              <span> {slide.buttonText}</span>
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Right 4 Boxes */}
        <motion.div
          className="hero-right"
          variants={rightBoxWrap}
          initial="hidden"
          animate="show"
        >
          {slides.map((btn, index) => (
            <motion.button
              key={btn.id}
              variants={rightBoxItem}
              onClick={() => scrollTo(index)}
              className={selectedIndex === index ? "active" : ""}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <h5>
                <strong>{btn.titleStrong}</strong> {btn.titleRest}
              </h5>
              <p>{btn.subtitle}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

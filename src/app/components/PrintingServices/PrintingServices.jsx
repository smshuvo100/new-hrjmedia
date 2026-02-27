// "use client";
// import React, { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import "./PrintingServices.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import Link from "next/link";

// const PrintingServices = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "start",
//       skipSnaps: false,
//       slidesToScroll: 1,
//     },
//     [Autoplay({ delay: 5000 })],
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);
//   //
//   //
//   const data = [
//     {
//       title: "Business Cards",
//       img: "/images/assets/business-cards1.jpg",
//       paragraph:
//         "Instantly provide contact details and convey professionalism.",
//       buttonLink: "/quote/flyers",
//     },
//     {
//       title: "Boards",
//       img: "/images/assets/boards.jpg",
//       paragraph:
//         "Instantly provide contact details and convey professionalism.",
//       buttonLink: "/quote/booklets",
//     },
//     {
//       title: "Flyers",
//       img: "/images/assets/flyers-and-leaflets.jpg",
//       paragraph: "High-quality flayers to promote your business and events.",
//       buttonLink: "/quote/brochure",
//     },
//     {
//       title: "Booklets",
//       img: "/images/assets/booklets.jpg",
//       paragraph: "Custom booklets for events, presentation, marketing more...",
//       buttonLink: "/quote/posters",
//     },
//     {
//       title: "Banner",
//       img: "/images/assets/banner.jpg",
//       paragraph: "Eye-catching banners to capture attention instantly.",
//       buttonLink: "/quote/banners",
//     },
//     {
//       title: "Posters",
//       img: "/images/assets/posters1.jpg",
//       paragraph: "Spread the news about an event or advertise a product.",
//       buttonLink: "/quote/cards",
//     },
//     {
//       title: "Stickers",
//       img: "/images/assets/stickers1.jpg",
//       paragraph: "Product information, Brand Visibility and Loyalty Packaging.",
//       buttonLink: "/quote/cards",
//     },
//   ];

//   return (
//     <section className="printing-services">
//       <div className="container">
//         <div className="header-center">
//           <h2>
//             In-store and online Printing Services Made Easy with HRJ Media
//           </h2>
//           <p>
//             We are your 'one-stop' Instant and Same Day print in London. We
//             offer a wide range of in-store and online printing with personalised
//             print products to enhance your brand and marketing efforts, catering
//             to all your professional and personal printing needs. Our printing
//             services in London offer Regular or Custom sized high quality
//             Digital Printing, Large Format Printing and T-Shirt Printing. Open 7
//             Days in a week including Bank holidays and 24 Hours including
//             Saturday and Sunday.
//           </p>
//         </div>

//         <div className="slider-wrapper">
//           <div className="embla" ref={emblaRef}>
//             <div className="embla__container">
//               {data.map((item, i) => (
//                 <div className="embla__slide" key={i}>
//                   <div className="item">
//                     <div className="img-box">
//                       <Image
//                         src={item.img}
//                         alt={item.title}
//                         width={305}
//                         height={172}
//                       />
//                     </div>
//                     <div className="inner-box">
//                       <h4>{item.title}</h4>
//                       <p>{item.paragraph}</p>
//                       <div className="btn btn2">
//                         <Link href={item.buttonLink}>Get a Quote</Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="embla__controls">
//             <button className="embla__prev" onClick={scrollPrev}>
//               <IoIosArrowBack />
//             </button>
//             <button className="embla__next" onClick={scrollNext}>
//               <IoIosArrowForward />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrintingServices;

"use client";

import React, { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./PrintingServices.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

const PrintingServices = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000 })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const data = [
    {
      title: "Business Cards",
      img: "/images/assets/business-cards1.jpg",
      paragraph:
        "Instantly provide contact details and convey professionalism.",
      buttonLink: "/quote/flyers",
    },
    {
      title: "Boards",
      img: "/images/assets/boards.jpg",
      paragraph:
        "Instantly provide contact details and convey professionalism.",
      buttonLink: "/quote/booklets",
    },
    {
      title: "Flyers",
      img: "/images/assets/flyers-and-leaflets.jpg",
      paragraph: "High-quality flayers to promote your business and events.",
      buttonLink: "/quote/brochure",
    },
    {
      title: "Booklets",
      img: "/images/assets/booklets.jpg",
      paragraph: "Custom booklets for events, presentation, marketing more...",
      buttonLink: "/quote/posters",
    },
    {
      title: "Banner",
      img: "/images/assets/banner.jpg",
      paragraph: "Eye-catching banners to capture attention instantly.",
      buttonLink: "/quote/banners",
    },
    {
      title: "Posters",
      img: "/images/assets/posters1.jpg",
      paragraph: "Spread the news about an event or advertise a product.",
      buttonLink: "/quote/cards",
    },
    {
      title: "Stickers",
      img: "/images/assets/stickers1.jpg",
      paragraph: "Product information, Brand Visibility and Loyalty Packaging.",
      buttonLink: "/quote/cards",
    },
  ];

  // ✅ Separate viewport rules (THIS IS THE FIX)
  const VIEWPORT_HEADER = useMemo(() => ({ once: true, amount: 0.1 }), []);

  // Cards should NOT trigger early on load
  const VIEWPORT_CARDS = useMemo(
    () => ({
      once: true,
      amount: 0.1, // need more visible to trigger
      margin: "0px 0px -35% 0px", // shrink bottom viewport -> prevents early trigger
    }),
    [],
  );

  // ✅ Our standard sequential animation system
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

  // Cards stagger
  const cardWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    }),
    [],
  );

  const cardItem = useMemo(
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
    <section className="printing-services">
      <div className="container">
        {/* ✅ Header (visible on load) */}
        <motion.div
          className="header-center"
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_HEADER}
        >
          <motion.h2 variants={item}>
            In-store and online Printing Services Made Easy with HRJ Media
          </motion.h2>

          <motion.p variants={item}>
            We are your 'one-stop' Instant and Same Day print in London. We
            offer a wide range of in-store and online printing with personalised
            print products to enhance your brand and marketing efforts, catering
            to all your professional and personal printing needs. Our printing
            services in London offer Regular or Custom sized high quality
            Digital Printing, Large Format Printing and T-Shirt Printing. Open 7
            Days in a week including Bank holidays and 24 Hours including
            Saturday and Sunday.
          </motion.p>
        </motion.div>

        <div className="slider-wrapper">
          <div className="embla" ref={emblaRef}>
            {/* ✅ Cards animate ONLY when you scroll to them */}
            <motion.div
              className="embla__container"
              variants={cardWrap}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_CARDS}
            >
              {data.map((itemData, i) => (
                <motion.div
                  className="embla__slide"
                  key={i}
                  variants={cardItem}
                >
                  <motion.div
                    className="item"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="img-box">
                      <Image
                        src={itemData.img}
                        alt={itemData.title}
                        width={305}
                        height={172}
                      />
                    </div>

                    <div className="inner-box">
                      <h4>{itemData.title}</h4>
                      <p>{itemData.paragraph}</p>

                      <div className="btn btn2">
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={itemData.buttonLink}>
                            <span>Get a Quote</span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls (optional: you can keep without animation too) */}
          <div className="embla__controls">
            <button className="embla__prev" onClick={scrollPrev}>
              <IoIosArrowBack />
            </button>
            <button className="embla__next" onClick={scrollNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;

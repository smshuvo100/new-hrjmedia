// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaCheckCircle,
// } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import "./GoogleReviews.css";

// function ReviewCard({ review, expanded, onToggle }) {
//   const maxLength = 150;
//   const reviewText = review?.text || "";
//   const shouldShowReadMore = reviewText.length > maxLength;

//   const displayText =
//     expanded || !shouldShowReadMore
//       ? reviewText
//       : reviewText.slice(0, maxLength).trim() + "...";

//   const isVerified =
//     review?.verified === true ||
//     review?.is_verified === true ||
//     review?.verified_review === true;

//   return (
//     <article className="google-review-card">
//       <div className="google-review-card-top">
//         <div className="google-review-user-box">
//           <div className="google-review-avatar">
//             {review?.profile_photo_url ? (
//               <img
//                 src={review.profile_photo_url}
//                 alt={review?.author_name || "Reviewer"}
//               />
//             ) : (
//               <div className="google-review-avatar-fallback">
//                 {(review?.author_name || "G").charAt(0).toUpperCase()}
//               </div>
//             )}
//           </div>

//           <div className="google-review-meta">
//             <h3 className="google-review-name">
//               {review?.author_name || "Google User"}
//             </h3>
//             <p className="google-review-time">
//               {review?.relative_time_description || "1 month ago"}
//             </p>
//           </div>
//         </div>

//         <div className="google-review-google-icon">
//           <FcGoogle />
//         </div>
//       </div>

//       <div className="google-review-rating-row">
//         <div className="google-review-stars">
//           {[...Array(5)].map((_, index) => (
//             <FaStar key={index} />
//           ))}
//         </div>

//         {isVerified && (
//           <div className="google-review-verified">
//             <FaCheckCircle />
//             <span>Verified</span>
//           </div>
//         )}
//       </div>

//       <p className="google-review-text">{displayText}</p>

//       {shouldShowReadMore && (
//         <button className="google-review-readmore-btn" onClick={onToggle}>
//           {expanded ? "Read less" : "Read more"}
//         </button>
//       )}
//     </article>
//   );
// }

// export default function GoogleReviews() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [expandedReviews, setExpandedReviews] = useState({});

//   const autoplay = useMemo(
//     () =>
//       Autoplay({
//         delay: 3500,
//         stopOnInteraction: false,
//         stopOnMouseEnter: true,
//       }),
//     [],
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "start",
//       dragFree: false,
//     },
//     [autoplay],
//   );

//   useEffect(() => {
//     const loadReviews = async () => {
//       try {
//         const res = await fetch("/api/google-reviews", { cache: "no-store" });
//         const json = await res.json();

//         if (!res.ok) {
//           throw new Error(json.error || "Failed to load reviews");
//         }

//         setData(json);
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadReviews();
//   }, []);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const toggleExpanded = useCallback((key) => {
//     setExpandedReviews((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   }, []);

//   const fiveStarReviews =
//     data?.reviews?.filter((review) => Number(review.rating) === 5) || [];

//   if (loading) {
//     return (
//       <section className="google-reviews-section">
//         <div className="google-reviews-wrap">
//           <p className="google-reviews-loading">Loading reviews...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="google-reviews-section">
//         <div className="google-reviews-wrap">
//           <p className="google-reviews-error">Error: {error}</p>
//         </div>
//       </section>
//     );
//   }

//   if (!fiveStarReviews.length) return null;

//   return (
//     <section className="google-reviews-section">
//       <div className="container">
//         <div className="google-reviews-wrap ">
//           <div className="google-reviews-main-header">
//             <h2>Google Customer Reviews</h2>

//             <div className="google-reviews-navigation">
//               <button
//                 type="button"
//                 className="google-reviews-nav-btn"
//                 onClick={scrollPrev}
//                 aria-label="Previous review"
//               >
//                 <FaChevronLeft />
//               </button>

//               <button
//                 type="button"
//                 className="google-reviews-nav-btn"
//                 onClick={scrollNext}
//                 aria-label="Next review"
//               >
//                 <FaChevronRight />
//               </button>
//             </div>
//           </div>

//           <div className="google-reviews-slider" ref={emblaRef}>
//             <div className="google-reviews-track">
//               {fiveStarReviews.map((review, index) => {
//                 const reviewKey = `${review.author_name}-${index}`;

//                 return (
//                   <div className="google-reviews-slide" key={reviewKey}>
//                     <ReviewCard
//                       review={review}
//                       expanded={!!expandedReviews[reviewKey]}
//                       onToggle={() => toggleExpanded(reviewKey)}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="google-reviews-footer">
//             <p>What our happy customers say...</p>
//           </div>
//         </div>{" "}
//       </div>
//     </section>
//   );
// }

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./GoogleReviews.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function ReviewCard({ review, expanded, onToggle, index }) {
  const maxLength = 150;
  const reviewText = review?.text || "";
  const shouldShowReadMore = reviewText.length > maxLength;

  const displayText =
    expanded || !shouldShowReadMore
      ? reviewText
      : reviewText.slice(0, maxLength).trim() + "...";

  const isVerified =
    review?.verified === true ||
    review?.is_verified === true ||
    review?.verified_review === true;

  return (
    <motion.article
      className="google-review-card"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="google-review-card-top">
        <div className="google-review-user-box">
          <motion.div
            className="google-review-avatar"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {review?.profile_photo_url ? (
              <img
                src={review.profile_photo_url}
                alt={review?.author_name || "Reviewer"}
              />
            ) : (
              <div className="google-review-avatar-fallback">
                {(review?.author_name || "G").charAt(0).toUpperCase()}
              </div>
            )}
          </motion.div>

          <div className="google-review-meta">
            <h3 className="google-review-name">
              {review?.author_name || "Google User"}
            </h3>
            <p className="google-review-time">
              {review?.relative_time_description || "1 month ago"}
            </p>
          </div>
        </div>

        <motion.div
          className="google-review-google-icon"
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <FcGoogle />
        </motion.div>
      </div>

      <motion.div
        className="google-review-rating-row"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="google-review-stars">
          {[...Array(5)].map((_, starIndex) => (
            <motion.span
              key={starIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12 + starIndex * 0.05, duration: 0.2 }}
            >
              <FaStar />
            </motion.span>
          ))}
        </div>

        {isVerified && (
          <motion.div
            className="google-review-verified"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, duration: 0.25 }}
          >
            <FaCheckCircle />
            <span>Verified</span>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          className="google-review-text"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {displayText}
        </motion.p>
      </AnimatePresence>

      {shouldShowReadMore && (
        <motion.button
          className="google-review-readmore-btn"
          onClick={onToggle}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.97 }}
        >
          {expanded ? "Read less" : "Read more"}
        </motion.button>
      )}
    </motion.article>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState({});

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay],
  );

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await fetch("/api/google-reviews", { cache: "no-store" });
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Failed to load reviews");
        }

        setData(json);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleExpanded = useCallback((key) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const fiveStarReviews =
    data?.reviews?.filter((review) => Number(review.rating) === 5) || [];

  if (loading) {
    return (
      <section className="google-reviews-section">
        <div className="container">
          <div className="google-reviews-wrap">
            <p className="google-reviews-loading">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="google-reviews-section">
        <div className="container">
          <div className="google-reviews-wrap">
            <p className="google-reviews-error">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!fiveStarReviews.length) return null;

  return (
    <motion.section
      className="google-reviews-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div className="google-reviews-wrap" variants={itemVariants}>
          <motion.div
            className="google-reviews-main-header"
            variants={itemVariants}
          >
            <motion.h2
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              Google Customer Reviews
            </motion.h2>

            <motion.div
              className="google-reviews-navigation"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <motion.button
                type="button"
                className="google-reviews-nav-btn"
                onClick={scrollPrev}
                aria-label="Previous review"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaChevronLeft />
              </motion.button>

              <motion.button
                type="button"
                className="google-reviews-nav-btn"
                onClick={scrollNext}
                aria-label="Next review"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaChevronRight />
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="google-reviews-slider" ref={emblaRef}>
            <div className="google-reviews-track">
              {fiveStarReviews.map((review, index) => {
                const reviewKey = `${review.author_name}-${index}`;

                return (
                  <div className="google-reviews-slide" key={reviewKey}>
                    <ReviewCard
                      review={review}
                      expanded={!!expandedReviews[reviewKey]}
                      onToggle={() => toggleExpanded(reviewKey)}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            className="google-reviews-footer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <p>What our happy customers say...</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

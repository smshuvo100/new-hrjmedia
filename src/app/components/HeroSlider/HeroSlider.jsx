"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Same Day",
    titleRest: "Printing",
    desc: "Need urgent printing?",
  },
  {
    id: 2,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Digital / Litho",
    titleRest: "Printing",
    desc: "Professional and fast printing services.",
  },
  {
    id: 3,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Large Format",
    titleRest: "Print",
    desc: "High-quality banners and posters.",
  },
  {
    id: 4,
    bg: "/images/assets/hero1.webp",
    titleStrong: "T-Shirt and",
    titleRest: "Hi Vis Vest",
    desc: "Custom apparel printing on demand.",
  },
];

export default function HeroSlider() {
  // ✅ Initialize Embla with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        // যখন ইউজার ম্যানুয়ালি ক্লিক করবে, autoplay আবার reset হবে
        const autoplay = emblaApi.plugins()?.autoplay;
        if (autoplay) autoplay.reset();
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
                        <h1>
                          <strong>{slide.titleStrong}</strong> {slide.titleRest}
                        </h1>
                        <div className="btn">
                          <button>Get a Quote</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Fixed Right Buttons */}
        <div className="hero-right">
          {slides.map((btn, index) => (
            <button
              key={btn.id}
              onClick={() => scrollTo(index)}
              className={selectedIndex === index ? "active" : ""}
            >
              <h5>
                <strong>{btn.titleStrong}</strong> {btn.titleRest}
              </h5>
              <p>{btn.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

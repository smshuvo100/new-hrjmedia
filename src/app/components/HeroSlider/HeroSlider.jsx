"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./HeroSlider.css";

export default function HeroSlider({ slides }) {
  // ✅ Initialize Embla with Autoplay plugin
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
                        {/* <h4>{slide.subtitle}</h4> */}
                        <p>{slide.paragraph}</p>
                        <div className="btn">
                          <button>{slide.buttonText}</button>
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
              <p>{btn.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

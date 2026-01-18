"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./PrintingServices.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

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
      title: "Flyers",
      img: "/images/assets/img2.webp",
      paragraph: "High-quality flyers to promote your business and events.",
      buttonLink: "/quote/flyers",
    },
    {
      title: "Booklets",
      img: "/images/assets/img2.webp",
      paragraph: "Custom booklets for marketing, events, and publications.",
      buttonLink: "/quote/booklets",
    },
    {
      title: "Brochure",
      img: "/images/assets/img2.webp",
      paragraph: "Professional brochures to showcase your products.",
      buttonLink: "/quote/brochure",
    },
    {
      title: "Posters",
      img: "/images/assets/img2.webp",
      paragraph: "Eye-catching posters to capture attention instantly.",
      buttonLink: "/quote/posters",
    },
    {
      title: "Banners",
      img: "/images/assets/img2.webp",
      paragraph: "Durable banners for indoor and outdoor promotions.",
      buttonLink: "/quote/banners",
    },
    {
      title: "Cards",
      img: "/images/assets/img2.webp",
      paragraph: "Personalized business and greeting cards for all occasions.",
      buttonLink: "/quote/cards",
    },
  ];

  return (
    <section className="printing-services">
      <div className="container">
        <div className="header-center">
          <h2>
            In-store and online Printing Services Made Easy with HRJ Media
          </h2>
          <p>
            We are your 'one-stop' Instant and Same Day print in London. We
            offer a wide range of in-store and online printing with personalised
            print products to enhance your brand and marketing efforts, catering
            to all your professional and personal printing needs. Our printing
            services in London offer Regular or Custom sized high quality
            Digital Printing, Large Format Printing and T-Shirt Printing. Open 7
            Days in a week including Bank holidays and 24 Hours including
            Saturday and Sunday.
          </p>
        </div>

        <div className="slider-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {data.map((item, i) => (
                <div className="embla__slide" key={i}>
                  <div className="item">
                    <div className="img-box">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={305}
                        height={172}
                      />
                    </div>
                    <div className="inner-box">
                      <h4>{item.title}</h4>
                      <p>{item.paragraph}</p>
                      <div className="btn btn2">
                        <Link href={item.buttonLink}>Get a Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

// import React from "react";
// import Image from "next/image";

// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import SubHero from "../components/SubHero/SubHero";
// import GoogleReviews from "../components/GoogleReviews/GoogleReviews";
// import FooterCta from "../components/FooterCta/FooterCta";
// import "./About.css";

// export default function page() {
//   return (
//     <>
//       <Header />
//       <SubHero bgImage="/images/assets/sub-header.webp" title="About Us" />

//       <section className="left-right-sec sm-left">
//         <div className="container">
//           <div className="flex-box">
//             <div className="image-wrapper">
//               <Image
//                 src="/images/assets/about4.webp"
//                 alt="About Us"
//                 width={600}
//                 height={700}
//                 style={{ height: "350px" }}
//               />
//             </div>
//             <div className="content-wrapper">
//               <h2>Who We Are</h2>
//               <p>
//                 At Digital Press, our mission is to cultivate relationships and
//                 provide uncompromising personal service with a relentless
//                 passion for quality, communication, success, and teamwork. We
//                 value our clients and build lifelong partnerships, based on our
//                 commitment to serving, with the standards of excellence that
//                 each and every client deserves.
//               </p>
//               <p>
//                 Our mission is to provide you with the highest-quality products
//                 and services possible in a timely fashion and at a competitive
//                 price. We promise to listen to you and help you achieve your
//                 business goals. We will always be there with you by providing
//                 honest, expert advice and quick, friendly customer service. Our
//                 goal is to meet and exceed your expectations. We Could deliver
//                 order Cheaper, Faster and Easier.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="left-right-sec sm-right">
//         <div className="container">
//           <div className="flex-box">
//             <div className="image-wrapper">
//               <Image
//                 src="/images/assets/about4.webp"
//                 alt="About Us"
//                 width={600}
//                 height={700}
//                 style={{ height: "675px" }}
//               />
//             </div>
//             <div className="content-wrapper">
//               <h2>What We Do</h2>

//               <p>
//                 Our Printing team is extremely passionate about delivering a
//                 prompt and reliable service. With over a decade of combined team
//                 experience in the industry, we are focused on delivering quality
//                 products at a super speedy rate. Day, night, weekend or bank
//                 holiday, we’ll work hard to bring your project to authenticity.
//               </p>

//               <p>
//                 Our state of the art in-house technology includes all the
//                 equipment we need to produce outstanding printing projects. We
//                 are dedicated to providing a high standard of customer service
//                 paired with a high quality of reasonably priced printing and
//                 promotional products. In addition to producing everyday
//                 essentials such as Business cards, letterheads, compliment
//                 slips, flyers, envelopes, postcards, leaflets, brochures, price
//                 lists, menus, invoice pads, delivery notes, multi-part NCR
//                 forms, tickets, labels, invitations Card, Calendar, booklets,
//                 Customise Presentation Folder, Book Binding (wire and Comb)
//                 etc., we also produce Different Sizes and Qualities of posters,
//                 Banner, Roller (pop-up) banners, Sticker, Clear Sticker, Foamex
//                 Board, Window Graphics, Car Sticker, Canvas, Fabrics, T-Shirt
//                 Printing (for your any events). while you wait.
//               </p>

//               <p>
//                 All our printing that are carried out on-site gives us an
//                 opportunity to manage a large workload and produce the finished
//                 result at exceptionally quick rates. This means we can oversee
//                 every detail of the printing process and offer same day delivery
//                 printing on the majority of our products and services. If you’re
//                 within the London area, we strive to get your project delivered
//                 to you with a few hours.
//               </p>

//               <p>
//                 We have a highly skilled graphic designer in our location who
//                 can help with any artwork and design needs creating professional
//                 looking brands to promote your business.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="left-right-sec sm-left">
//         <div className="container">
//           <div className="flex-box">
//             <div className="image-wrapper">
//               <Image
//                 src="/images/assets/about4.webp"
//                 alt="About Us"
//                 width={600}
//                 height={700}
//                 style={{ height: "350px" }}
//               />
//             </div>
//             <div className="content-wrapper">
//               <h2>24/7 Printing:</h2>
//               <p>
//                 At HRJ MEDIA we have a very strong work integrity. We operate
//                 24/7 for your business needs either for regular print
//                 requirement, last minute presentations, or you work with global
//                 businesses in different time zone, rely on our service and we
//                 will get your prints ready for collection or delivery to
//                 anywhere suits you. Call us or email us and we will respond soon
//                 possible 24/7!
//               </p>
//               <p>
//                 Place your order by 9:00 PM to complete the order same night or
//                 early in the morning delivery or collection, so we can make a
//                 plan to avoid any disappointment. Also, for the same day and
//                 within a few hours’ delivery services depends on the quantity,
//                 stock availability, delivery destination. we will always try our
//                 hardest to accommodate your project and will give you the
//                 turnaround time for delivery or collection for the order.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-bottom-60"></div>
//       <GoogleReviews />
//       {/*  section */}
//       <FooterCta />
//       <Footer />
//     </>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import GoogleReviews from "../components/GoogleReviews/GoogleReviews";
import FooterCta from "../components/FooterCta/FooterCta";
import "./About.css";

const servicesData = [
  {
    title: "Printing & Photocopying",
    items: ["A4 Document Printing", "A3 Document Printing"],
  },
  {
    title: "Printing & Binding",
    items: [
      "Documents Printing",
      "Dissertation Printing",
      "Portfolio Printing",
    ],
  },
  {
    title: "Binding Service",
    items: [
      "Staple Binding",
      "Plastic Comb Binding",
      "Wire o Binding",
      "Hard Cover Binding",
      "Perfect Binding",
    ],
  },
  {
    title: "Scanning Service",
    items: [
      "A4 Scanning (High Res)",
      "A3 Scanning (High Res)",
      "Document Scanning",
    ],
  },
  {
    title: "Lamination & Encapsulation",
    items: ["A5, A4, A3, A2, A1", "Custom Sized"],
  },
  {
    title: "Photo and Picture Print",
    items: [],
  },
  {
    title: "Flyer & Leaflets",
    items: [
      "A3 Flyers & Leaflets",
      "A4 Flyers & Leaflets",
      "A5 Flyers & Leaflets",
      "A6 Flyers & Leaflets",
      "A7 Flyers & Leaflets",
      "DL Flyers & Leaflets",
      "Custom Sized Leaflets",
    ],
  },
  {
    title: "Folded Flyers & Leaflets",
    items: ["Half-Fold Leaflets", "Tri-fold Leaflets", "Roll-Fold Leaflets"],
  },
  {
    title: "Business Cards",
    items: [
      "Classic Business Card",
      "Laminated Business Card",
      "Luxury Business Card",
    ],
  },
  {
    title: "Cards & Vouchers",
    items: [
      "Name Cards",
      "Reservation Cards",
      "Thank You Cards",
      "Wedding Cards",
      "Post Cards",
      "Cards & Invites",
      "Loyalty Cards",
      "Gift Vouchers",
    ],
  },
  {
    title: "Booklets",
    items: [
      "Stapled Booklets",
      "Wire o Binding Booklets",
      "Comb Binding Booklets",
      "Perfect Bound Booklets",
      "Books and Booklets",
      "Funeral Booklets",
      "Order of Service Booklets",
    ],
  },
  {
    title: "Envelopes",
    items: ["C6 Envelopes", "C5 Envelopes", "C4 Envelopes", "DL Envelopes"],
  },
  {
    title: "Calendars",
    items: [
      "Wall Calendars",
      "Desk Calendars",
      "CD Calendars",
      "Magnecote Calendars",
    ],
  },
  {
    title: "Letterheads",
    items: [],
  },
  {
    title: "Notepads",
    items: [],
  },
  {
    title: "Compliment Slips",
    items: [],
  },
  {
    title: "Posters",
    items: [
      "Standard Posters",
      "Blueback Posters",
      "Waterproof PVC Posters",
      "Lightbox Backlit Posters",
      "Wallpaper",
      "Custom Size Posters",
    ],
  },
  {
    title: "Roller Banners",
    items: ["Self Standing Roller Banner"],
  },
  {
    title: "PVC Banners",
    items: [
      "Regular Sized PVC Banner",
      "Custom Sized PVC Banner",
      "PVC Mesh Banner",
    ],
  },
  {
    title: "Signs and Panels",
    items: ["Foam Boards", "Foamex Boards", "Dibond Aluminium Boards"],
  },
  {
    title: "Vinyl Stickers & Labels",
    items: [
      "Vinyl Stickers",
      "Transparent Stickers",
      "Window Stickers",
      "Frosted Window Graphics",
      "Floor Stickers",
      "Wall Stickers",
      "Custom Shape Stickers",
      "Vinyl Letter Cutting",
      "Paper Stickers",
    ],
  },
  {
    title: "Restaurant Corner",
    items: [
      "Takeaway Menus",
      "Flyers and Leaflets",
      "Table Menus",
      "NCR Receipt Pads",
      "Opening Banner",
      "Outside A Boards",
      "Window Vinyl Sticker",
      "Leather Menu Cover",
      "Backlit Poster",
      "Sign Board",
      "Business Cards",
      "Voucher",
      "Loyalty Cards",
      "Seasons Greetings Cards",
      "Calendars",
    ],
  },
  {
    title: "Pavement Signs",
    items: ["A-Boards", "Waterproof Poster"],
  },
  {
    title: "Personalised Clothing",
    items: [
      "T-Shirts",
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "Caps",
      "Tote Bag",
    ],
  },
  {
    title: "Personalised Mugs",
    items: [],
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <SubHero bgImage="/images/assets/sub-header.webp" title="About Us" />

      <section className="left-right-sec sm-left">
        <div className="container">
          <div className="flex-box">
            <div className="image-wrapper">
              <Image
                src="/images/assets/about4.webp"
                alt="About Us"
                width={600}
                height={700}
                style={{ height: "350px" }}
              />
            </div>
            <div className="content-wrapper">
              <h2>Who we are</h2>
              <p>
                Our mission is to cultivate relationships and provide
                uncompromising personal service with a relentless passion for
                quality, communication, success, and teamwork. We value our
                clients and build lifelong partnerships, based on our commitment
                to serving, with the standards of excellence that each and every
                client deserves.
              </p>
              <p>
                We provide with the highest-quality products and services
                possible in a timely fashion and at a competitive price. We
                promise to listen to you and help you achieve your business
                goals. We will always be there with you by providing honest,
                expert advice and quick, friendly customer service.
              </p>
              <p>
                Our goal is to meet and exceed your expectations. We Could
                deliver order Cheaper, Faster and Easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-showcase">
        <div className="container">
          <div className="services-showcase-head">
            <span className="services-badge">Our Services</span>
            <h2>What we do</h2>

            <p>
              Our Printing team is extremely passionate about delivering a
              prompt and reliable service. With over a decade of combined team
              experience in the industry, we are focused on delivering quality
              products at a super speedy rate. Day, night, weekend or bank
              holiday, we’ll work hard to bring your project to authenticity.
            </p>

            <p>
              Our state of the art in-house technology includes all the
              equipment we need to produce outstanding printing projects. We are
              dedicated to providing a high standard of customer service paired
              with a high quality of reasonably priced printing and promotional
              products. In addition to producing everyday essentials for your
              any events while you wait. All our printing that are carried out
              on-site gives us an opportunity to manage a large workload and
              produce the finished result at exceptionally quick rates. This
              means we can oversee every detail of the printing process and
              offer same day delivery printing on the majority of our products
              and services. If you’re within the London area, we strive to get
              your project delivered to you with a few hours.
            </p>
            <p>
              We have a highly skilled graphic designer in our location who can
              help with any artwork and design needs creating professional
              looking brands to promote your business.
            </p>
          </div>

          <div className="services-grid masonry-layout">
            {servicesData.map((service, index) => (
              <article
                className="service-card"
                key={`${service.title}-${index}`}
              >
                <h3>{service.title}</h3>

                {service.items.length > 0 ? (
                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={`${item}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="service-single-tag">Available on request</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="left-right-sec sm-left">
        <div className="container">
          <div className="flex-box">
            <div className="image-wrapper">
              <Image
                src="/images/assets/about4.webp"
                alt="24/7 Printing"
                width={600}
                height={700}
                style={{ height: "350px" }}
              />
            </div>
            <div className="content-wrapper">
              <h2>24/7 Printing</h2>
              <p>
                At HRJ MEDIA we have a very strong work integrity. We operate
                24/7 for your business needs either for regular print
                requirement, last minute presentations, or you work with global
                businesses in different time zone, rely on our service and we
                will get your prints ready for collection or delivery to
                anywhere suits you. Call us or email us and we will respond soon
                possible 24/7!
              </p>
              <p>
                Place your order by 9:00 PM to complete the order same night or
                early in the morning delivery or collection, so we can make a
                plan to avoid any disappointment. Also, for the same day and
                within a few hours’ delivery services depends on the quantity,
                stock availability, delivery destination. we will always try our
                hardest to accommodate your project and will give you the
                turnaround time for delivery or collection for the order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-bottom-60"></div>
      <GoogleReviews />
      <FooterCta />
      <Footer />
    </>
  );
}

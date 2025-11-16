import React from "react";
import Image from "next/image";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import SubHero from "@/app/components/SubHero/SubHero";

export default function page() {
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
              <h2>Who We Are</h2>
              <p>
                At Digital Press, our mission is to cultivate relationships and
                provide uncompromising personal service with a relentless
                passion for quality, communication, success, and teamwork. We
                value our clients and build lifelong partnerships, based on our
                commitment to serving, with the standards of excellence that
                each and every client deserves.
              </p>
              <p>
                Our mission is to provide you with the highest-quality products
                and services possible in a timely fashion and at a competitive
                price. We promise to listen to you and help you achieve your
                business goals. We will always be there with you by providing
                honest, expert advice and quick, friendly customer service. Our
                goal is to meet and exceed your expectations. We Could deliver
                order Cheaper, Faster and Easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-sec sm-right">
        <div className="container">
          <div className="flex-box">
            <div className="image-wrapper">
              <Image
                src="/images/assets/about4.webp"
                alt="About Us"
                width={600}
                height={700}
                style={{ height: "675px" }}
              />
            </div>
            <div className="content-wrapper">
              <h2>What We Do</h2>

              <p>
                Our Printing team is extremely passionate about delivering a
                prompt and reliable service. With over a decade of combined team
                experience in the industry, we are focused on delivering quality
                products at a super speedy rate. Day, night, weekend or bank
                holiday, we’ll work hard to bring your project to authenticity.
              </p>

              <p>
                Our state of the art in-house technology includes all the
                equipment we need to produce outstanding printing projects. We
                are dedicated to providing a high standard of customer service
                paired with a high quality of reasonably priced printing and
                promotional products. In addition to producing everyday
                essentials such as Business cards, letterheads, compliment
                slips, flyers, envelopes, postcards, leaflets, brochures, price
                lists, menus, invoice pads, delivery notes, multi-part NCR
                forms, tickets, labels, invitations Card, Calendar, booklets,
                Customise Presentation Folder, Book Binding (wire and Comb)
                etc., we also produce Different Sizes and Qualities of posters,
                Banner, Roller (pop-up) banners, Sticker, Clear Sticker, Foamex
                Board, Window Graphics, Car Sticker, Canvas, Fabrics, T-Shirt
                Printing (for your any events). while you wait.
              </p>

              <p>
                All our printing that are carried out on-site gives us an
                opportunity to manage a large workload and produce the finished
                result at exceptionally quick rates. This means we can oversee
                every detail of the printing process and offer same day delivery
                printing on the majority of our products and services. If you’re
                within the London area, we strive to get your project delivered
                to you with a few hours.
              </p>

              <p>
                We have a highly skilled graphic designer in our location who
                can help with any artwork and design needs creating professional
                looking brands to promote your business.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <h2>24/7 Printing:</h2>
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

      <Footer />
    </>
  );
}

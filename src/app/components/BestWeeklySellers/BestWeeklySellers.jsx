import React from "react";
import Image from "next/image";
import "./BestWeeklySellers.css";

export default function ProductCategory() {
  return (
    <>
      <section className="best-weekly-sellers-section">
        <div className="container">
          <div className="header-center">
            <h2>
              Best Weekly Sellers
              <span>(Same Day Store Collection or Delivery)</span>
            </h2>
          </div>

          <div className="grid-box">
            <div className="item">
              <Image
                src="/images/assets/roller-banners.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Roller Banners</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/staple-booklets.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Staple Booklets</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/leaflet-and-flyers.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Leaflet and Flyers</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/transparent-sticker.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Transparent Sticker</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/business-cards.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Business Cards</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/posters.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Posters</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/a4-document-print.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>A4 Document Print</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/backlit-poster.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Backlit Poster</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/wire-bound-booklet.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Wire Bound Booklet</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/pvc-banner.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>PVC Banner</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/foam-board.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Foam Board</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/foamex-boards.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Foamex Boards</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/window-vinyl-sticker.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Window Vinyl Sticker</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/comb-bound-booklet.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Comb Bound Booklet</h5>
            </div>

            <div className="item">
              <Image
                src="/images/assets/name-cards.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Name Cards</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/t-shirt.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>T-Shirt</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/vinyl-print-shape-cut.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Vinyl Print & Shape Cut</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/folded-leaflets.jpg"
                alt="Event & Festival"
                width={250}
                height={287}
              />
              <h5>Folded Leaflets</h5>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}

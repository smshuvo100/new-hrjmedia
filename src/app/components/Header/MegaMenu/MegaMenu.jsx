"use client";

import React, { useEffect, useMemo, useState } from "react";
import "./mega-menu.css";
import { FaChevronRight } from "react-icons/fa";
import megaMenuData from "./megaMenuData.json";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiSmartphone } from "react-icons/fi";

/* ✅ LEFT SIDE CATEGORIES (Products mega menu only) */
const sideCategories = [
  { id: "all-products", label: "Same Day Printing" },
  { id: "print-scan", label: "Print & Scan" },
  { id: "flyers-leaflets", label: "Flyers & Leaflets" },
  { id: "booklets", label: "Booklets" },
  { id: "cards", label: "Cards" },
  { id: "posters", label: "Posters" },
  { id: "banners", label: "Banners" },
  { id: "sign-display", label: "Sign & Display" },
  { id: "stickers", label: "Stickers" },
  { id: "envelopes", label: "Envelopes" },
  { id: "calenders", label: "Calenders" },
  { id: "photo", label: "Photo" },
  { id: "lamination", label: "Lamination" },
  { id: "binding", label: "Binding" },
  { id: "clothing", label: "Clothing" },
  { id: "restaurent-corner", label: "Restaurent Corner" },
  { id: "student-corner", label: "Student Corner" },
];

/* ✅ SIMPLE SUBMENUS (Top menu only, not Products sidebar) */
const SIMPLE_SUBMENUS = {
  cards: {
    sections: [
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
    ],
  },

  "flyers-leaflets": {
    sections: [
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
        items: [
          "Half-Fold Leaflets",
          "Tri-fold Leaflets",
          "Roll-Fold Leaflets",
        ],
      },
    ],
  },

  posters: {
    sections: [
      {
        title: "Posters",
        items: [
          "A0 Poster",
          "A1 Poster",
          "A2 Poster",
          "A3 Poster",
          "Standard Posters",
          "Blueback Posters Paper",
          "Waterproof Posters",
          "Wallpaper",
          "Custom Size Posters",
        ],
      },
    ],
  },

  booklets: {
    sections: [
      {
        title: "Booklets",
        items: [
          "Stapled Booklets",
          "Wire-O Binding Booklets",
          "Comb Binding Booklets",
          "Perfect Bound Booklets",
          "Books and Booklets",
          "Funeral Booklets",
          "Order of Service Booklets",
        ],
      },
    ],
  },

  banners: {
    sections: [
      { title: "Roller Banners", items: ["Self Standing Roller Banners"] },
      {
        title: "PVC Banners",
        items: [
          "Regular Sized PVC Banner",
          "Custom Sized PVC Banner",
          "PVC Mesh Banner",
        ],
      },
    ],
  },

  stickers: {
    sections: [
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
    ],
  },

  "sign-display-board": {
    sections: [
      {
        title: "Signs and Panels",
        items: ["Foam Boards", "Foamex Boards", "Dibond Aluminium Boards"],
      },
      { title: "Pavement Signs", items: ["A-Boards", "Waterproof Poster"] },
    ],
  },

  clothing: {
    sections: [
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
      { title: "Personalised Mugs", items: [] },
    ],
  },
};

/* ✅ Quotations mega panel (No change) */
function QuotationsMegaPanel() {
  return (
    <div className="quote-mega-wrap">
      <div className="quote-mega-inner">
        <h2 className="quote-mega-title">SAME DAY PRINTING SERVICE</h2>

        <p className="quote-mega-subtitle">
          For urgent and high quality print with quick turnaround, we will be
          happy to provide a personalised quote.
        </p>

        <div className="quote-mega-contacts">
          <a href="tel:02081234567" className="quote-contact">
            <span className="icon">
              <FiPhoneCall />
            </span>
            <span className="label">Office Hours</span>
            <span className="value">020 8123 4567</span>
          </a>

          <a href="tel:07589876543" className="quote-contact">
            <span className="icon">
              <FiSmartphone />
            </span>
            <span className="label">Chat or Call (24/7)</span>
            <span className="value">07589 876543</span>
          </a>

          <a href="mailto:info@hrjmedia.com" className="quote-contact">
            <span className="icon">
              <FiMail />
            </span>
            <span className="label">Email us</span>
            <span className="value">info@hrjmedia.com</span>
          </a>
        </div>

        <div className="quote-mega-btn-row">
          <Link href="/get-a-quote" className="quote-mega-btn">
            GET AN INSTANT QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ✅ SIMPLE SUBMENU PANEL */
function SimpleSubMenuPanel({ activeKey }) {
  const menu = SIMPLE_SUBMENUS?.[activeKey];
  if (!menu || !menu.sections) return null;

  return (
    <div className="sub-menu-wrap">
      <div className="sub-menu-body">
        {menu.sections.map((section) => (
          <div key={section.title} className="sub-menu-section">
            <h4 className="sub-menu-title">{section.title}</h4>

            {section.items?.length > 0 && (
              <ul className="sub-menu-list">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link href="/get-a-quote">{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="sub-menu-cta">
        <Link href="/get-a-quote" className="sub-menu-cta-btn">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

/**
 * ✅ Products sidebar context এর Flyers & Leaflets (PDF-like single column)
 * - JSON untouched
 * - Same Day Printing / All Products untouched
 */
const PRODUCTS_FLYERS_LEAFLETS_SINGLE_COLUMN = {
  id: "products-flyers-leaflets-single",
  sections: [
    {
      title: "Flyers & Leaflets",
      link: "/flyers-leaflets",
      items: [
        { label: "A3 Flyers & Leaflets", link: "/a3-flyers-leaflets" },
        { label: "A4 Flyers & Leaflets", link: "/a4-flyers-leaflets" },
        { label: "A5 Flyers & Leaflets", link: "/a5-flyers-leaflets" },
        { label: "A6 Flyers & Leaflets", link: "/a6-flyers-leaflets" },
        { label: "A7 Flyers & Leaflets", link: "/a7-flyers-leaflets" },
        { label: "DL Flyers & Leaflets", link: "/dl-flyers-leaflets" },
        { label: "Custom Sized Leaflets", link: "/custom-sized-leaflets" },
      ],
    },
    {
      title: "Folded Flyers & Leaflets",
      link: "/folded-leaflets",
      items: [
        { label: "Half-Fold Leaflets", link: "/half-fold-leaflets" },
        { label: "Tri-fold Leaflets", link: "/tri-fold-leaflets" },
        { label: "Roll-Fold Leaflets", link: "/roll-fold-leaflets" },
      ],
    },
    {
      title: "Business Cards",
      link: "/business-cards",
      items: [
        { label: "Classic Business Card", link: "/classic-business-card" },
        { label: "Laminated Business Card", link: "/laminated-business-card" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
      ],
    },
    {
      title: "Roller Banners",
      link: "/roller-banners",
      items: [
        {
          label: "Self Standing Roller Banners",
          link: "/self-standing-roller-banners",
        },
      ],
    },
    {
      title: "PVC Banners",
      link: "/pvc-banners",
      items: [
        {
          label: "Regular Sized PVC Banner",
          link: "/regular-sized-pvc-banner",
        },
        { label: "Custom Sized PVC Banner", link: "/custom-sized-pvc-banner" },
      ],
    },
  ],
};

/**
 * ✅ Products sidebar context এর Booklets (PDF-like single column)
 * - JSON untouched
 */
const PRODUCTS_BOOKLETS_SINGLE_COLUMN = {
  id: "products-booklets-single",
  sections: [
    {
      title: "Booklets",
      link: "/booklets",
      items: [
        { label: "Stapled Booklets", link: "/stapled-booklets" },
        { label: "Wire-O Binding Booklets", link: "/wire-o-booklets" },
        { label: "Comb Binding Booklets", link: "/comb-binding-booklets" },
        { label: "Perfect Bound Booklets", link: "/perfect-bound-booklets" },
        { label: "Books and Booklets", link: "/books-and-booklets" },
        { label: "Funeral Booklets", link: "/funeral-booklets" },
        {
          label: "Order of Service Booklets",
          link: "/order-of-service-booklets",
        },
      ],
    },
    {
      title: "Roller Banners",
      link: "/roller-banners",
      items: [
        {
          label: "Self Standing Roller Banners",
          link: "/self-standing-roller-banners",
        },
      ],
    },
    {
      title: "PVC Banners",
      link: "/pvc-banners",
      items: [
        {
          label: "Regular Sized PVC Banner",
          link: "/regular-sized-pvc-banner",
        },
        { label: "Custom Sized PVC Banner", link: "/custom-sized-pvc-banner" },
      ],
    },
    {
      title: "Signs and Panels",
      link: "/signs-panels",
      items: [
        { label: "Foam Boards", link: "/foam-boards" },
        { label: "Foamex Boards", link: "/foamex-boards" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
      ],
    },
    {
      title: "Business Cards",
      link: "/business-cards",
      items: [
        { label: "Classic Business Card", link: "/classic-business-card" },
      ],
    },
    {
      title: "Cards & Vouchers",
      link: "/cards-vouchers",
      items: [
        { label: "Name Cards", link: "/name-cards" },
        { label: "Reservation Cards", link: "/reservation-cards" },
      ],
    },
  ],
};
/**
 * ✅ Products sidebar context এর Cards (PDF-like single column)
 * - JSON untouched
 * - PDF-এর মতো: Business Cards + Cards & Vouchers + Flyers & Leaflets + Envelopes
 */
const PRODUCTS_CARDS_SINGLE_COLUMN = {
  id: "products-cards-single",
  sections: [
    {
      title: "Business Cards",
      link: "/business-cards",
      items: [
        { label: "Classic Business Card", link: "/classic-business-card" },
        { label: "Laminated Business Card", link: "/laminated-business-card" },
        { label: "Luxury Business Card", link: "/luxury-business-card" },
      ],
    },
    {
      title: "Cards & Vouchers",
      link: "/cards-vouchers",
      items: [
        { label: "Name Cards", link: "/name-cards" },
        { label: "Reservation Cards", link: "/reservation-cards" },
        { label: "Thank You Cards", link: "/thank-you-cards" },
        { label: "Wedding Cards", link: "/wedding-cards" },
        { label: "Post Cards", link: "/post-cards" },
        { label: "Cards & Invites", link: "/cards-invites" },
        { label: "Loyalty Cards", link: "/loyalty-cards" },
        { label: "Gift Vouchers", link: "/gift-vouchers" },
      ],
    },
    {
      title: "Flyers & Leaflets",
      link: "/flyers-leaflets",
      items: [
        { label: "A3 Flyers & Leaflets", link: "/a3-flyers-leaflets" },
        { label: "A4 Flyers & Leaflets", link: "/a4-flyers-leaflets" },
        { label: "A5 Flyers & Leaflets", link: "/a5-flyers-leaflets" },
        { label: "A6 Flyers & Leaflets", link: "/a6-flyers-leaflets" },
        { label: "A7 Flyers & Leaflets", link: "/a7-flyers-leaflets" },
        { label: "DL Flyers & Leaflets", link: "/dl-flyers-leaflets" },
        { label: "Custom Sized Leaflets", link: "/custom-sized-leaflets" },
      ],
    },
    {
      title: "Envelopes",
      link: "/envelopes",
      items: [
        { label: "C6 Envelopes", link: "/c6-envelopes" },
        { label: "C5 Envelopes", link: "/c5-envelopes" },
        { label: "C4 Envelopes", link: "/c4-envelopes" },
        { label: "DL Envelopes", link: "/dl-envelopes" },
      ],
    },
  ],
};

/* ✅ Posters (Products sidebar) — NEW (PDF-like single column) */
const PRODUCTS_POSTERS_SINGLE_COLUMN = {
  id: "products-posters-single",
  sections: [
    {
      title: "Posters",
      link: "/posters",
      items: [
        // PDF-এ আছে (routes assumed)
        { label: "A0 Poster", link: "/a0-poster" },
        { label: "A1 Poster", link: "/a1-poster" },
        { label: "A2 Poster", link: "/a2-poster" },
        { label: "A3 Poster", link: "/a3-poster" },

        // JSON-এ already আছে
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
        { label: "Wallpaper", link: "/wallpaper" },
        { label: "Custom Size Posters", link: "/custom-size-posters" },
      ],
    },
    {
      title: "Roller Banners",
      link: "/roller-banners",
      items: [
        {
          label: "Self Standing Roller Banners",
          link: "/self-standing-roller-banners",
        },
      ],
    },
    {
      title: "PVC Banners",
      link: "/pvc-banners",
      items: [
        {
          label: "Regular Sized PVC Banner",
          link: "/regular-sized-pvc-banner",
        },
        { label: "Custom Sized PVC Banner", link: "/custom-sized-pvc-banner" },
      ],
    },
    {
      title: "Signs and Panels",
      link: "/signs-panels",
      items: [
        { label: "Foam Boards", link: "/foam-boards" },
        { label: "Foamex Boards", link: "/foamex-boards" },
        { label: "Dibond Aluminium Boards", link: "/dibond-aluminium-boards" },
      ],
    },
    {
      title: "Vinyl Stickers & Labels",
      link: "/vinyl-stickers-labels",
      items: [
        { label: "Vinyl Stickers", link: "/vinyl-stickers" },
        { label: "Transparent Stickers", link: "/transparent-stickers" },
        { label: "Window Stickers", link: "/window-stickers" },
        { label: "Custom Shape Stickers", link: "/custom-shape-stickers" },
        { label: "Vinyl Letter Cutting", link: "/vinyl-letter-cutting" },
        { label: "Paper Stickers", link: "/paper-stickers" },
      ],
    },
  ],
};

/* ✅ Banners (Products sidebar) — PDF-like single column */
const PRODUCTS_BANNERS_SINGLE_COLUMN = {
  id: "products-banners-single",
  sections: [
    {
      title: "Roller Banners",
      link: "/roller-banners",
      items: [
        {
          label: "Self Standing Roller Banners",
          link: "/self-standing-roller-banners",
        },
      ],
    },
    {
      title: "PVC Banners",
      link: "/pvc-banners",
      items: [
        {
          label: "Regular Sized PVC Banner",
          link: "/regular-sized-pvc-banner",
        },
        { label: "Custom Sized PVC Banner", link: "/custom-sized-pvc-banner" },
        { label: "PVC Mesh Banner", link: "/pvc-mesh-banner" },
      ],
    },
    {
      title: "Signs and Panels",
      link: "/signs-panels",
      items: [
        { label: "Foam Boards", link: "/foam-boards" },
        { label: "Foamex Boards", link: "/foamex-boards" },
        { label: "Dibond Aluminium Boards", link: "/dibond-aluminium-boards" },
      ],
    },
    {
      title: "Vinyl Stickers & Labels",
      link: "/vinyl-stickers-labels",
      items: [
        { label: "Vinyl Stickers", link: "/vinyl-stickers" },
        { label: "Transparent Stickers", link: "/transparent-stickers" },
        { label: "Window Stickers", link: "/window-stickers" },
        { label: "Frosted Window Graphics", link: "/frosted-window-graphics" },
        { label: "Custom Shape Stickers", link: "/custom-shape-stickers" },
        { label: "Vinyl Letter Cutting", link: "/vinyl-letter-cutting" },
        { label: "Paper Stickers", link: "/paper-stickers" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "A0 Poster", link: "/a0-poster" },
        { label: "A1 Poster", link: "/a1-poster" },
        { label: "A2 Poster", link: "/a2-poster" },
        { label: "A3 Poster", link: "/a3-poster" },
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
        { label: "Wallpaper", link: "/wallpaper" },
      ],
    },
  ],
};

/* ✅ Sign & Display (Products sidebar) — PDF exact match */
const PRODUCTS_SIGN_DISPLAY_SINGLE_COLUMN = {
  id: "products-sign-display-single",
  sections: [
    {
      title: "Signs and Panels",
      link: "/signs-panels",
      items: [
        { label: "Foam Boards", link: "/foam-boards" },
        { label: "Foamex Boards", link: "/foamex-boards" },
        { label: "Dibond Aluminium Boards", link: "/dibond-aluminium-boards" },
      ],
    },
    {
      title: "Pavement Signs",
      link: "/pavement-signs",
      items: [
        { label: "A-Boards", link: "/a-boards" },
        { label: "(Waterproof Poster)", link: "/waterproof-posters" },
      ],
    },
    {
      title: "Roller Banners",
      link: "/roller-banners",
      items: [
        {
          label: "Self Standing Roller Banners",
          link: "/self-standing-roller-banners",
        },
      ],
    },
    {
      title: "PVC Banners",
      link: "/pvc-banners",
      items: [
        {
          label: "Regular Sized PVC Banner",
          link: "/regular-sized-pvc-banner",
        },
        {
          label: "Custom Sized PVC Banner",
          link: "/custom-sized-pvc-banner",
        },
        {
          label: "PVC Mesh Banner",
          link: "/pvc-mesh-banner",
        },
      ],
    },
    {
      title: "Vinyl Stickers & Labels",
      link: "/vinyl-stickers-labels",
      items: [
        { label: "Vinyl Stickers", link: "/vinyl-stickers" },
        {
          label: "Transparent Stickers",
          link: "/transparent-stickers",
        },
        { label: "Window Stickers", link: "/window-stickers" },
        {
          label: "Frosted Window Graphics",
          link: "/frosted-window-graphics",
        },
        {
          label: "Custom Shape Stickers",
          link: "/custom-shape-stickers",
        },
        {
          label: "Vinyl Letter Cutting",
          link: "/vinyl-letter-cutting",
        },
        { label: "Paper Stickers", link: "/paper-stickers" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        {
          label: "Blueback Posters Paper",
          link: "/blueback-posters",
        },
        {
          label: "Waterproof Posters",
          link: "/waterproof-posters",
        },
        { label: "Wallpaper", link: "/wallpaper" },
      ],
    },
  ],
};

/**
 * ✅ Products sidebar context এর Stickers (PDF-like single column data)
 * - Same Day Printing / All Products এ কোন impact নেই
 * - Stickers hover করলে right side এক কলামে এই exact order এ দেখাবে
 */
const PRODUCTS_STICKERS_SINGLE_COLUMN = {
  id: "products-stickers-single",
  sections: [
    {
      title: "Vinyl Stickers & Labels",
      link: "/vinyl-stickers-labels",
      items: [
        { label: "Vinyl Stickers", link: "/vinyl-stickers" },
        { label: "Transparent Stickers", link: "/transparent-stickers" },
        { label: "Window Stickers", link: "/window-stickers" },
        { label: "Frosted Window Graphics", link: "/frosted-window-graphics" },
        { label: "Floor Stickers", link: "/floor-stickers" },
        { label: "Wall Stickers", link: "/wall-stickers" },
        { label: "Custom Shape Stickers", link: "/custom-shape-stickers" },
        { label: "Vinyl Letter Cutting", link: "/vinyl-letter-cutting" },
        { label: "Paper Stickers", link: "/paper-stickers" },
      ],
    },

    {
      title: "Signs and Panels",
      link: "/signs-panels",
      items: [
        { label: "Foam Boards", link: "/foam-boards" },
        { label: "Foamex Boards", link: "/foamex-boards" },
        { label: "Dibond Aluminium Boards", link: "/dibond-aluminium-boards" },
      ],
    },

    {
      title: "Pavement Signs",
      link: "/pavement-signs",
      items: [
        { label: "A-Boards", link: "/a-boards" },
        { label: "Waterproof Poster", link: "/waterproof-posters" },
      ],
    },

    {
      title: "Personalised Clothing",
      link: "/personalised-clothing",
      items: [
        { label: "T-Shirts", link: "/t-shirts" },
        { label: "Hoodies & Sweatshirts", link: "/hoodies-sweatshirts" },
        { label: "Polo Shirts", link: "/polo-shirts" },
        { label: "Tote Bag", link: "/tote-bag" },
      ],
    },

    {
      title: "Booklets",
      link: "/booklets",
      items: [
        { label: "Stapled Booklets", link: "/stapled-booklets" },
        { label: "Wire-o Booklets", link: "/wire-o-booklets" },
        { label: "Comb Binding Booklets", link: "/comb-binding-booklets" },
        { label: "Funeral Booklet", link: "/funeral-booklets" },
      ],
    },
  ],
};

/**
 * ✅ Products sidebar context এর Envelopes (PDF-like single column data)
 * - Same Day Printing / All Products এ কোন impact নেই
 */
const PRODUCTS_ENVELOPES_SINGLE_COLUMN = {
  id: "products-envelopes-single",
  sections: [
    {
      title: "Envelopes",
      link: "/envelopes",
      items: [
        { label: "C6 Envelopes", link: "/c6-envelopes" },
        { label: "C5 Envelopes", link: "/c5-envelopes" },
        { label: "C4 Envelopes", link: "/c4-envelopes" },
        { label: "DL Envelopes", link: "/dl-envelopes" },
      ],
    },

    {
      title: "Cards & Vouchers",
      link: "/cards-vouchers",
      items: [
        { label: "Name Cards", link: "/name-cards" },
        { label: "Reservation Cards", link: "/reservation-cards" },
        { label: "Thank You Cards", link: "/thank-you-cards" },
        { label: "Wedding Cards", link: "/wedding-cards" },
        { label: "Post Cards", link: "/post-cards" },
        { label: "Cards & Invites", link: "/cards-invites" },
        { label: "Loyalty Cards", link: "/loyalty-cards" },
        { label: "Gift Vouchers", link: "/gift-vouchers" },
      ],
    },

    {
      title: "Calenders",
      link: "/calenders",
      items: [
        { label: "Wall Calendars", link: "/wall-calendars" },
        { label: "Desk Calendars", link: "/desk-calendars" },
        { label: "CD Calendars", link: "/cd-calendars" },
        { label: "Magnecote Calendars", link: "/magnecote-calendars" },
      ],
    },

    // ✅ এগুলো PDF-এ যেমন শুধু heading, তাই items ফাঁকা
    { title: "Letterheads", link: "/letterheads", items: [] },
    { title: "Notepads", link: "/notepads", items: [] },
    { title: "Compliment Slips", link: "/compliment-slips", items: [] },
  ],
};

const PRODUCTS_CALENDERS_SINGLE_COLUMN = {
  id: "products-calenders-single",
  sections: [
    {
      title: "Calenders",
      link: "/calenders",
      items: [
        { label: "Wall Calendars", link: "/wall-calendars" },
        { label: "Desk Calendars", link: "/desk-calendars" },
        { label: "CD Calendars", link: "/cd-calendars" },
        { label: "Magnecote Calendars", link: "/magnecote-calendars" },
      ],
    },

    {
      title: "Envelopes",
      link: "/envelopes",
      items: [
        { label: "C6 Envelopes", link: "/c6-envelopes" },
        { label: "C5 Envelopes", link: "/c5-envelopes" },
        { label: "C4 Envelopes", link: "/c4-envelopes" },
        { label: "DL Envelopes", link: "/dl-envelopes" },
      ],
    },

    {
      title: "Cards & Vouchers",
      link: "/cards-vouchers",
      items: [
        { label: "Name Cards", link: "/name-cards" },
        { label: "Reservation Cards", link: "/reservation-cards" },
        { label: "Thank You Cards", link: "/thank-you-cards" },
        { label: "Wedding Cards", link: "/wedding-cards" },
        { label: "Post Cards", link: "/post-cards" },
        { label: "Cards & Invites", link: "/cards-invites" },
        { label: "Loyalty Cards", link: "/loyalty-cards" },
        { label: "Gift Vouchers", link: "/gift-vouchers" },
      ],
    },

    {
      title: "Letterheads",
      link: "/letterheads",
      items: [],
    },

    {
      title: "Notepads",
      link: "/notepads",
      items: [],
    },

    {
      title: "Compliment Slips",
      link: "/compliment-slips",
      items: [],
    },
  ],
};

/**
 * ✅ Products sidebar context এর Photo (PDF-like single column data)
 * - JSON এ কিছু add করছি না
 * - Same Day Printing / All Products এ কোন impact নেই
 */
const PRODUCTS_PHOTO_SINGLE_COLUMN = {
  id: "products-photo-single",
  sections: [
    {
      title: "Photo and Picture Print",
      link: "/photo-print",
      items: [],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
        { label: "Wallpaper", link: "/wallpaper" },
        { label: "Custom Size Posters", link: "/custom-size-posters" },
      ],
    },
    {
      title: "Printing & Photocopying",
      link: "/printing-photocopying",
      items: [
        { label: "A4 Document Printing", link: "/a4-document-printing" },
        // ✅ Screenshot/PDF অনুযায়ী spelling EXACT রাখলাম
        { label: "A3 Documnet Printing", link: "/a3-document-printing" },
      ],
    },
    {
      title: "Personalised Clothing",
      link: "/personalised-clothing",
      items: [
        { label: "T-Shirts", link: "/t-shirts" },
        { label: "Hoodies & Sweatshirts", link: "/hoodies-sweatshirts" },
        { label: "Polo Shirts", link: "/polo-shirts" },
        { label: "Caps", link: "/caps" },
        { label: "Tote Bag", link: "/tote-bag" },
      ],
    },
    {
      title: "Personalised Mugs",
      link: "/personalised-mugs",
      items: [],
    },
    {
      title: "Scanning Service",
      link: "/scanning-service",
      items: [
        { label: "A4 Scanning (High Res)", link: "/a4-scanning" },
        { label: "A3 Scanning (High Res)", link: "/a3-scanning" },
        { label: "Document Scanning", link: "/document-scanning" },
      ],
    },
    {
      title: "Lamination & Encapsulation",
      link: "/lamination-encapsulation",
      items: [
        { label: "A5, A4, A3, A2, A1", link: "/lamination-standard-sizes" },
        { label: "Custom Sized", link: "/lamination-custom-sized" },
      ],
    },
  ],
};

// ✅ Products sidebar -> Lamination (PDF-like single column) [EXACT]
const PRODUCTS_LAMINATION_SINGLE_COLUMN = {
  id: "products-lamination-single",
  sections: [
    {
      title: "Lamination & Encapsulation",
      link: "/lamination-encapsulation",
      items: [
        { label: "A5, A4, A3, A2, A1", link: "/lamination-standard-sizes" },
        { label: "Custom Sized", link: "/lamination-custom-sized" },
      ],
    },
    {
      title: "Printing & Photocopying",
      link: "/printing-photocopying",
      items: [
        { label: "A4 Document Printing", link: "/a4-document-printing" },
        { label: "A3 Document Printing", link: "/a3-document-printing" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
        { label: "Wallpaper", link: "/wallpaper" },
        { label: "Custom Size Posters", link: "/custom-size-posters" },
      ],
    },
    {
      title: "Scanning Service",
      link: "/scanning-service",
      items: [
        { label: "A4 Scanning (High Res)", link: "/a4-scanning" },
        { label: "A3 Scanning (High Res)", link: "/a3-scanning" },
        { label: "Document Scanning", link: "/document-scanning" },
      ],
    },
    {
      title: "Printing & Binding",
      link: "/printing-binding",
      items: [
        { label: "Documents Printing", link: "/documents-printing" },
        { label: "Dissertation Printing", link: "/dissertation-printing" },
        { label: "Portfolio Printing", link: "/portfolio-printing" },
      ],
    },
    {
      title: "Binding Service",
      link: "/binding-service",
      items: [
        { label: "Staple Binding", link: "/staple-binding" },
        { label: "Plastic Comb Binding", link: "/plastic-comb-binding" },
        // ✅ PDF/Old menu EXACT typo
        { label: "Wire o Bindong", link: "/wire-o-binding" },
        { label: "Hard Cover Binding", link: "/hard-cover-binding" },
        { label: "Perfect Binding", link: "/perfect-binding" },
      ],
    },
  ],
};

const PRODUCTS_BINDING_SINGLE_COLUMN = {
  id: "products-binding-single",
  sections: [
    {
      title: "Printing & Binding",
      link: "/printing-binding",
      items: [
        { label: "Documents Printing", link: "/documents-printing" },
        { label: "Dissertation Printing", link: "/dissertation-printing" },
        { label: "Portfolio Printing", link: "/portfolio-printing" },
      ],
    },
    {
      title: "Binding Service",
      link: "/binding-service",
      items: [
        { label: "Staple Binding", link: "/staple-binding" },
        { label: "Plastic Comb Binding", link: "/plastic-comb-binding" },
        { label: "Wire o Binding", link: "/wire-o-binding" },
        { label: "Hard Cover Binding", link: "/hard-cover-binding" },
        { label: "Perfect Binding", link: "/perfect-binding" },
      ],
    },
    {
      title: "Printing & Photocopying",
      link: "/printing-photocopying",
      items: [
        { label: "A4 Document Printing", link: "/a4-document-printing" },
        { label: "A3 Document Printing", link: "/a3-document-printing" },
      ],
    },
    {
      title: "Lamination & Encapsulation",
      link: "/lamination-encapsulation",
      items: [
        { label: "A5, A4, A3, A2, A1", link: "/lamination-standard-sizes" },
        { label: "Custom Sized", link: "/lamination-custom-sized" },
      ],
    },
    {
      title: "Posters",
      link: "/posters",
      items: [
        { label: "Standard Posters", link: "/standard-posters" },
        { label: "Blueback Posters Paper", link: "/blueback-posters" },
        { label: "Waterproof Posters", link: "/waterproof-posters" },
        { label: "Wallpaper", link: "/wallpaper" },
        { label: "Custom Size Posters", link: "/custom-size-posters" },
      ],
    },
    {
      title: "Scanning Service",
      link: "/scanning-service",
      items: [
        { label: "A4 Scanning (High Res)", link: "/a4-scanning" },
        { label: "A3 Scanning (High Res)", link: "/a3-scanning" },
        { label: "Document Scanning", link: "/document-scanning" },
      ],
    },
  ],
};

const PRODUCTS_CLOTHING_SINGLE_COLUMN = {
  id: "products-clothing-single",
  sections: [
    {
      title: "Personalised Clothing",
      link: "/personalised-clothing",
      items: [
        { label: "T-Shirts", link: "/t-shirts" },
        { label: "Hoodies & Sweatshirts", link: "/hoodies-sweatshirts" },
        { label: "Polo Shirts", link: "/polo-shirts" },
        { label: "Caps", link: "/caps" },
        { label: "Tote Bag", link: "/tote-bag" },
      ],
    },
    {
      title: "Personalised Mugs",
      link: "/personalised-mugs",
      items: [],
    },
  ],
};

/**
 * ✅ Products sidebar context -> Restaurent Corner (PDF-like single column)
 * - Screenshot অনুযায়ী exact items (same order, same text)
 */
const PRODUCTS_RESTAURENT_CORNER_SINGLE_COLUMN = {
  id: "products-restaurent-corner-single",
  sections: [
    {
      title: "Restaurant Corner",
      link: "/restaurent-corner",
      items: [
        { label: "Takeaway Menus", link: "/takeaway-menus" },
        { label: "Flyers and Leaflets", link: "/flyers-leaflets" },
        { label: "Table Menus", link: "/table-menus" },
        { label: "NCR Receipt Pads", link: "/ncr-receipt-pads" },
        { label: "Opening Banner", link: "/opening-banner" },
        { label: "Outside A Boards", link: "/outside-a-boards" },
        { label: "Window Vinyl Sticker", link: "/window-vinyl-sticker" },
        { label: "Leather Menu Cover", link: "/leather-menu-cover" },
        { label: "Backlit Poster", link: "/backlit-poster" },
        { label: "Sign Board", link: "/sign-board" },
        { label: "Business Cards", link: "/business-cards" },
        { label: "Voucher", link: "/voucher" },
        { label: "Loyalty Cards", link: "/loyalty-cards" },
        { label: "Seasons Greetings Cards", link: "/seasons-greetings-cards" },
        { label: "Calenders", link: "/calenders" },
      ],
    },
  ],
};
/**
 * ✅ Products sidebar context -> Student Corner (PDF-like single column)
 * - Screenshot অনুযায়ী exact items (same order, same text)
 */
export const PRODUCTS_STUDENT_CORNER_TWO_COLUMNS = [
  {
    id: "student-corner-col-1",
    sections: [
      {
        title: "Printing & Photocopying",
        items: [
          {
            label: "A4 Document Printing",
            link: "/student-corner/a4-document-printing",
          },
          {
            label: "A3 Document Printing",
            link: "/student-corner/a3-document-printing",
          },
        ],
      },
      {
        title: "Printing & Binding",
        items: [
          {
            label: "Documents Printing",
            link: "/student-corner/documents-printing",
          },
          {
            label: "Dissertation Printing",
            link: "/student-corner/dissertation-printing",
          },
          {
            label: "Portfolio Printing",
            link: "/student-corner/portfolio-printing",
          },
        ],
      },
      {
        title: "Binding Service",
        items: [
          { label: "Staple Binding", link: "/student-corner/staple-binding" },
          {
            label: "Plastic Comb Binding",
            link: "/student-corner/plastic-comb-binding",
          },
          { label: "Wire o Binding", link: "/student-corner/wire-o-binding" },
          {
            label: "Hard Cover Binding",
            link: "/student-corner/hard-cover-binding",
          },
          { label: "Perfect Binding", link: "/student-corner/perfect-binding" },
        ],
      },
      {
        title: "Scanning Service",
        items: [
          {
            label: "A4 Scanning (High Res)",
            link: "/student-corner/a4-scanning",
          },
          {
            label: "A3 Scanning (High Res)",
            link: "/student-corner/a3-scanning",
          },
          {
            label: "Document Scanning",
            link: "/student-corner/document-scanning",
          },
        ],
      },
      {
        title: "Lamination & Encapsulation",
        items: [
          {
            label: "A5, A4, A3, A2, A1",
            link: "/student-corner/lamination-sizes",
          },
          { label: "Custom Sized", link: "/student-corner/custom-lamination" },
        ],
      },

      // section-level links
      {
        title: "Photo and Picture Print",
        link: "/student-corner/photo-picture-print",
        items: [],
      },
      {
        title: "Business Cards",
        link: "/student-corner/business-cards",
        items: [],
      },
      {
        title: "Flyers & Leaflets",
        link: "/student-corner/flyers-leaflets",
        items: [],
      },
    ],
  },

  {
    id: "student-corner-col-2",
    sections: [
      {
        title: "Posters",
        items: [
          { label: "A0 Poster", link: "/student-corner/a0-poster" },
          { label: "A1 Poster", link: "/student-corner/a1-poster" },
          { label: "A2 Poster", link: "/student-corner/a2-poster" },
          { label: "A3 Poster", link: "/student-corner/a3-poster" },
          {
            label: "Standard Posters",
            link: "/student-corner/standard-posters",
          },
          {
            label: "Blueback Posters Paper",
            link: "/student-corner/blueback-posters",
          },
          {
            label: "Waterproof Posters",
            link: "/student-corner/waterproof-posters",
          },
          {
            label: "Custom Size Posters",
            link: "/student-corner/custom-posters",
          },
        ],
      },
      {
        title: "Roller Banners",
        items: [
          {
            label: "Self Standing Roller Banners",
            link: "/student-corner/roller-banners",
          },
        ],
      },
      {
        title: "PVC Banners",
        items: [
          {
            label: "Regular Sized PVC Banner",
            link: "/student-corner/pvc-banner-regular",
          },
          {
            label: "Custom Sized PVC Banner",
            link: "/student-corner/pvc-banner-custom",
          },
        ],
      },
      {
        title: "Signs and Panels",
        items: [{ label: "Foam Boards", link: "/student-corner/foam-boards" }],
      },
      {
        title: "Vinyl Stickers & Labels",
        items: [
          { label: "Vinyl Stickers", link: "/student-corner/vinyl-stickers" },
          {
            label: "Transparent Stickers",
            link: "/student-corner/transparent-stickers",
          },
          {
            label: "Custom Shape Stickers",
            link: "/student-corner/custom-shape-stickers",
          },
          {
            label: "Vinyl Letter Cutting",
            link: "/student-corner/vinyl-letter-cutting",
          },
          { label: "Paper Stickers", link: "/student-corner/paper-stickers" },
        ],
      },
      {
        title: "Cards & Vouchers",
        items: [
          { label: "Name Cards", link: "/student-corner/name-cards" },
          {
            label: "Reservation Cards",
            link: "/student-corner/reservation-cards",
          },
          { label: "Thank You Cards", link: "/student-corner/thank-you-cards" },
        ],
      },
    ],
  },
];

export default function MegaMenu({
  initialCategory = "all-products",
  showLeft = true,
  allowLeftInteraction = true,
  dropdownMode = "anchored",
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const isQuotations = activeCategory === "quotations";

  // ✅ Products mega menu context detect
  const isProductsContext =
    initialCategory === "all-products" ||
    initialCategory === "same-day-printing";

  // ✅ Simple submenu only for TOP MENU items (NOT products sidebar)
  const isSimpleSubMenu =
    !isProductsContext && Boolean(SIMPLE_SUBMENUS?.[activeCategory]);

  const effectiveShowLeft = showLeft && !isQuotations;

  const Wrapper = ({ children }) =>
    dropdownMode === "container" ? (
      <div className="container">{children}</div>
    ) : (
      <>{children}</>
    );

  // ✅ Columns to render
  const columnsToRender = useMemo(() => {
    const { columns, categoryMap } = megaMenuData;

    // ✅ Products sidebar -> Flyers & Leaflets -> single column (PDF-like)
    if (isProductsContext && activeCategory === "flyers-leaflets") {
      return [
        {
          id: PRODUCTS_FLYERS_LEAFLETS_SINGLE_COLUMN.id,
          sections: PRODUCTS_FLYERS_LEAFLETS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Products sidebar -> Booklets -> single column (PDF-like)
    if (isProductsContext && activeCategory === "booklets") {
      return [
        {
          id: PRODUCTS_BOOKLETS_SINGLE_COLUMN.id,
          sections: PRODUCTS_BOOKLETS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Products sidebar -> Cards -> single column (PDF-like)
    if (isProductsContext && activeCategory === "cards") {
      return [
        {
          id: PRODUCTS_CARDS_SINGLE_COLUMN.id,
          sections: PRODUCTS_CARDS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Products sidebar -> Posters -> single column (PDF-like)
    if (isProductsContext && activeCategory === "posters") {
      return [
        {
          id: PRODUCTS_POSTERS_SINGLE_COLUMN.id,
          sections: PRODUCTS_POSTERS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ NEW: Banners (Products sidebar)
    if (isProductsContext && activeCategory === "banners") {
      return [
        {
          id: PRODUCTS_BANNERS_SINGLE_COLUMN.id,
          sections: PRODUCTS_BANNERS_SINGLE_COLUMN.sections,
        },
      ];
    }
    // ✅ Products sidebar -> Sign & Display -> single column (PDF-like)
    if (isProductsContext && activeCategory === "sign-display") {
      return [
        {
          id: PRODUCTS_SIGN_DISPLAY_SINGLE_COLUMN.id,
          sections: PRODUCTS_SIGN_DISPLAY_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Special override: Products sidebar -> Stickers -> single column (PDF-like)
    if (isProductsContext && activeCategory === "stickers") {
      return [
        {
          id: PRODUCTS_STICKERS_SINGLE_COLUMN.id,
          sections: PRODUCTS_STICKERS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Special override: Products sidebar -> Envelopes -> single column (PDF-like)
    if (isProductsContext && activeCategory === "envelopes") {
      return [
        {
          id: PRODUCTS_ENVELOPES_SINGLE_COLUMN.id,
          sections: PRODUCTS_ENVELOPES_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Products sidebar -> Calendars -> single column (PDF-like)
    if (isProductsContext && activeCategory === "calenders") {
      return [
        {
          id: PRODUCTS_CALENDERS_SINGLE_COLUMN.id,
          sections: PRODUCTS_CALENDERS_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Special override: Products sidebar -> Photo -> single column (PDF-like)
    if (isProductsContext && activeCategory === "photo") {
      return [
        {
          id: PRODUCTS_PHOTO_SINGLE_COLUMN.id,
          sections: PRODUCTS_PHOTO_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Products sidebar -> Lamination -> single column (PDF-like)
    if (isProductsContext && activeCategory === "lamination") {
      return [
        {
          id: PRODUCTS_LAMINATION_SINGLE_COLUMN.id,
          sections: PRODUCTS_LAMINATION_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Special override: Products sidebar -> Binding -> single column (PDF-like)
    if (isProductsContext && activeCategory === "binding") {
      return [
        {
          id: PRODUCTS_BINDING_SINGLE_COLUMN.id,
          sections: PRODUCTS_BINDING_SINGLE_COLUMN.sections,
        },
      ];
    }
    // ✅ Special override: Products sidebar -> Clothing -> single column (PDF-like)
    if (isProductsContext && activeCategory === "clothing") {
      return [
        {
          id: PRODUCTS_CLOTHING_SINGLE_COLUMN.id,
          sections: PRODUCTS_CLOTHING_SINGLE_COLUMN.sections,
        },
      ];
    }

    // ✅ Special override: Products sidebar -> Restaurent Corner -> single column (PDF-like)
    if (isProductsContext && activeCategory === "restaurent-corner") {
      return [
        {
          id: PRODUCTS_RESTAURENT_CORNER_SINGLE_COLUMN.id,
          sections: PRODUCTS_RESTAURENT_CORNER_SINGLE_COLUMN.sections,
        },
      ];
    }
    // ✅ Special override: Products sidebar -> Student Corner -> single column (PDF-like)
    // ✅ Student Corner: render EXACTLY 2 columns
    if (isProductsContext && activeCategory === "student-corner") {
      return PRODUCTS_STUDENT_CORNER_TWO_COLUMNS.map((col) => ({
        id: col.id,
        sections: col.sections,
      }));
    }

    if (activeCategory === "all-products") return columns;

    const colIds = categoryMap?.[activeCategory];
    if (!colIds || colIds.length === 0) return columns;

    return columns.filter((col) => colIds.includes(col.id));
  }, [activeCategory, isProductsContext]);

  return (
    <div className="mega-menu-bg">
      <Wrapper>
        {isQuotations ? (
          <QuotationsMegaPanel />
        ) : (
          <>
            {isSimpleSubMenu ? (
              <SimpleSubMenuPanel activeKey={activeCategory} />
            ) : (
              <>
                <div
                  className="mega-menu-container"
                  style={{
                    gridTemplateColumns: effectiveShowLeft
                      ? "230px 1fr"
                      : "1fr",
                  }}
                >
                  {effectiveShowLeft && (
                    <div className="mega-menu-left">
                      <ul>
                        {sideCategories.map((cat) => (
                          <li
                            key={cat.id}
                            className={
                              activeCategory === cat.id
                                ? "left-item active"
                                : "left-item"
                            }
                            onMouseEnter={() =>
                              allowLeftInteraction && setActiveCategory(cat.id)
                            }
                            onClick={() =>
                              allowLeftInteraction && setActiveCategory(cat.id)
                            }
                          >
                            <span>{cat.label}</span>
                            <FaChevronRight className="left-arrow" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mega-menu-right">
                    <div className="mega-columns">
                      {columnsToRender.map((column) => (
                        <div key={column.id} className="mega-column">
                          {column.sections.map((section) => (
                            <div key={section.title} className="mega-section">
                              {section.link ? (
                                <Link href={section.link}>
                                  <h4 className="mega-section-title linkable">
                                    {section.title}
                                  </h4>
                                </Link>
                              ) : (
                                <h4 className="mega-section-title">
                                  {section.title}
                                </h4>
                              )}

                              {section.items?.length > 0 && (
                                <ul className="mega-section-list">
                                  {section.items.map((item) => (
                                    <li key={item.label}>
                                      {item.link ? (
                                        <Link href={item.link}>
                                          {item.label}
                                        </Link>
                                      ) : (
                                        <span>{item.label}</span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {(activeCategory === "all-products" ||
                  activeCategory === "same-day-printing") && (
                  <div className="bottom-cta">
                    <div className="cta-content">
                      <div className="title">
                        <h4>
                          For urgent and high quality print with quick
                          turnaround, we will be happy to provide a personalised
                          quote.
                        </h4>
                      </div>

                      <div className="contact-action">
                        <a href="tel:02081234567" className="contact-link">
                          <span className="icon">
                            <FiPhoneCall />
                          </span>
                          <span className="text">Office Hours </span>
                          <span className="number">020 8123 4567</span>
                        </a>

                        <a href="tel:07589876543" className="contact-link">
                          <span className="icon">
                            <FiSmartphone />
                          </span>
                          <span className="text">Chat or Call (24/7)</span>
                          <span className="number">07589 876543</span>
                        </a>

                        <a
                          href="mailto:info@hrjmedia.com"
                          className="contact-link"
                        >
                          <span className="icon">
                            <FiMail />
                          </span>
                          <span className="text">Email us</span>
                          <span className="number">info@hrjmedia.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="btn">
                      <Link href="/get-a-quote" className="cta-btn">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </div>
  );
}

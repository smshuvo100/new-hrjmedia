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
      {
        title: "Pavement Signs",
        items: ["A-Boards", "Waterproof Poster"],
      },
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

  // ✅ IMPORTANT FIX: Products mega menu context detect
  const isProductsContext =
    initialCategory === "all-products" ||
    initialCategory === "same-day-printing";

  // ✅ Products MegaMenu Data (No change)
  const columnsToRender = useMemo(() => {
    const { columns, categoryMap } = megaMenuData;

    if (activeCategory === "all-products") return columns;

    const colIds = categoryMap?.[activeCategory];
    if (!colIds || colIds.length === 0) return columns;

    return columns.filter((col) => colIds.includes(col.id));
  }, [activeCategory]);

  // ✅ FIX: Simple submenu only for TOP MENU items (NOT products sidebar)
  const isSimpleSubMenu =
    !isProductsContext && Boolean(SIMPLE_SUBMENUS?.[activeCategory]);

  const effectiveShowLeft = showLeft && !isQuotations;

  const Wrapper = ({ children }) =>
    dropdownMode === "container" ? (
      <div className="container">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <div className="mega-menu-bg">
      <Wrapper>
        {/* ✅ QUOTATIONS */}
        {isQuotations ? (
          <QuotationsMegaPanel />
        ) : (
          <>
            {/* ✅ SIMPLE SUB MENU (Cards/Flyers/Posters etc) */}
            {isSimpleSubMenu ? (
              <SimpleSubMenuPanel activeKey={activeCategory} />
            ) : (
              <>
                {/* ✅ DEFAULT PRODUCTS STYLE MEGA MENU (No change) */}
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
                                      <Link href={item.link}>{item.label}</Link>
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

                {/* CTA ONLY IN PRODUCTS */}

                {/* ✅ CTA IN PRODUCTS + SAME DAY PRINTING */}
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

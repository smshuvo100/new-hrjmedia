// File: src/app/components/Header/MegaMenu/MegaMenu.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import "./mega-menu.css";
import { FaChevronRight } from "react-icons/fa";
import megaMenuData from "./megaMenuData.json";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiSmartphone } from "react-icons/fi";

const sideCategories = [
  { id: "all-products", label: "All Products" },
  { id: "print-scanning", label: "Print & Scanning" },
  { id: "flyers-leaflets", label: "Flyers & Leaflets" },
  { id: "booklets", label: "Booklets" },
  { id: "cards", label: "Cards" },
  { id: "posters", label: "Posters" },
  { id: "banners", label: "Banners" },
  { id: "sign-display", label: "Sign & Display" },
  { id: "stickers", label: "Stickers" },
  { id: "envelopes", label: "Envelopes" },
  { id: "calendars", label: "Calendars" },
  { id: "photo", label: "Photo" },
  { id: "lamination", label: "Lamination" },
  { id: "binding", label: "Binding" },
  { id: "clothing", label: "Clothing" },
  { id: "restaurant-corner", label: "Restaurant Corner" },
  { id: "student-corner", label: "Student Corner" },
  { id: "same-day-printing", label: "Same Day Printing" },
];

export default function MegaMenu({
  initialCategory = "all-products",
  showLeft = true,
  allowLeftInteraction = true,
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // when top hover changes, update activeCategory
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const columnsToRender = useMemo(() => {
    const { columns, categoryMap } = megaMenuData;

    if (activeCategory === "all-products") return columns;

    const colIds = categoryMap[activeCategory];
    if (!colIds || colIds.length === 0) return columns;

    return columns.filter((col) => colIds.includes(col.id));
  }, [activeCategory]);

  return (
    <div className="mega-menu-bg">
      <div className="container">
        <div
          className="mega-menu-container"
          style={{
            gridTemplateColumns: showLeft ? "230px 1fr" : "1fr",
          }}
        >
          {/* LEFT CATEGORY LIST */}
          {showLeft && (
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

          {/* RIGHT MULTI-COLUMN AREA */}
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
                        <h4 className="mega-section-title">{section.title}</h4>
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

        {/* CTA ONLY IN ALL PRODUCTS */}
        {activeCategory === "all-products" && (
          <div className="bottom-cta">
            <div className="cta-content">
              <div className="title">
                <h4>
                  For urgent and high quality print with quick turnaround, we
                  will be happy to provide a personalised quote.
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

                <a href="mailto:info@hrjmedia.com" className="contact-link">
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
      </div>
    </div>
  );
}

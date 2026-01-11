// File: src/app/components/Header/MainHeader.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu/MegaMenu";
import Link from "next/link";
import { FiGrid, FiChevronDown } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "all-products", label: "All products", href: "/products", icon: true },
  { id: "flyers-leaflets", label: "Flyers & Leaflets", href: "/flyers" },
  { id: "flyers-leaflets", label: "Folded Leaflets", href: "/folded-leaflets" },
  { id: "booklets", label: "Booklets", href: "/booklets" },
  { id: "cards", label: "Cards", href: "/cards" },
  { id: "cards", label: "Business Cards", href: "/business-cards" },
  { id: "posters", label: "Posters", href: "/posters" },
  { id: "posters", label: "Rollup", href: "/roller-banners" },
  { id: "banners", label: "Banners", href: "/banners" },
  { id: "sign-display", label: "Sign & Display", href: "/sign-display" },
  { id: "stickers", label: "Stickers", href: "/stickers" },
  { id: "clothing", label: "Clothing", href: "/clothing" },
];

export function MainHeader() {
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  const [open, setOpen] = useState(false);
  const [activeTopCategory, setActiveTopCategory] = useState("all-products");

  // dropdown position (anchored under hovered li)
  const [dropdownStyle, setDropdownStyle] = useState({ left: 0 });

  const showLeft = activeTopCategory === "all-products";

  const openAt = (catId, anchorEl) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    setActiveTopCategory(catId);
    setOpen(true);

    // position dropdown under the hovered li
    if (wrapperRef.current && anchorEl) {
      const wrapRect = wrapperRef.current.getBoundingClientRect();
      const itemRect = anchorEl.getBoundingClientRect();

      const left = itemRect.left - wrapRect.left;
      setDropdownStyle({ left });
    }
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // close on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="header-wrapper"
      style={{ position: "relative", zIndex: 50 }}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* TOP NAVBAR */}
      <div className="main-header">
        <div className="container">
          <nav className="nev-menu">
            <ul>
              {NAV_ITEMS.map((item) => {
                const showArrow = item.id !== "all-products";

                return (
                  <li
                    key={item.label}
                    onMouseEnter={(e) => openAt(item.id, e.currentTarget)}
                    onFocus={(e) => openAt(item.id, e.currentTarget)}
                    className="has-dropdown"
                  >
                    <Link href={item.href} className="menu-link">
                      {item.icon && (
                        <FiGrid size={16} style={{ marginRight: 6 }} />
                      )}

                      <span className="label">{item.label}</span>

                      {showArrow && (
                        <FiChevronDown
                          className="dropdown-arrow"
                          size={14}
                          aria-hidden
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="mega-menu-holder"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            top: "100%",
            left: dropdownStyle.left,
            zIndex: 60,
          }}
        >
          <MegaMenu
            initialCategory={activeTopCategory}
            showLeft={showLeft}
            allowLeftInteraction={showLeft}
          />
        </div>
      )}
    </div>
  );
}

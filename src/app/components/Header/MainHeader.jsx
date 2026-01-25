"use client";

import React, { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu/MegaMenu";
import Link from "next/link";
import { FiGrid, FiChevronDown } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "all-products", label: "Products", href: "/products", icon: true },
  {
    id: "same-day-printing",
    label: "Same Day Printing",
    href: "/same-day-printing",
  },
  { id: "cards", label: "Cards", href: "/cards" },
  {
    id: "flyers-leaflets",
    label: "Flyers & Leaflets",
    href: "/flyers-leaflets",
  },
  { id: "posters", label: "Posters", href: "/posters" },
  { id: "booklets", label: "Booklets", href: "/booklets" },
  { id: "banners", label: "Banners", href: "/banners" },
  { id: "stickers", label: "Stickers", href: "/stickers" },
  {
    id: "sign-display-board",
    label: "Sign & Display Board",
    href: "/sign-display-board",
  },
  { id: "clothing", label: "Clothing", href: "/clothing" },
  { id: "quotations", label: "Quotations", href: "/quotations" },
];

export function MainHeader() {
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  const [open, setOpen] = useState(false);
  const [activeTopCategory, setActiveTopCategory] = useState("all-products");

  const [dropdownStyle, setDropdownStyle] = useState({
    left: 0,
    width: "auto",
    mode: "anchored", // "anchored" | "container"
  });

  const showLeft = activeTopCategory === "all-products";

  const getNavbarContainerEl = () => {
    if (!wrapperRef.current) return null;
    return (
      wrapperRef.current.querySelector(".main-header .container") ||
      wrapperRef.current.querySelector(".container")
    );
  };

  const openAt = (catId, anchorEl) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    setActiveTopCategory(catId);
    setOpen(true);

    /**
     * ✅ IMPORTANT FIX:
     * Products + Same Day Printing + Quotations => mega menu container-এর ভেতরে aligned থাকবে
     */
    if (
      catId === "all-products" ||
      catId === "same-day-printing" ||
      catId === "quotations"
    ) {
      const containerEl = getNavbarContainerEl();
      const wrapRect = wrapperRef.current?.getBoundingClientRect();

      if (containerEl && wrapRect) {
        const containerRect = containerEl.getBoundingClientRect();
        const left = containerRect.left - wrapRect.left;
        const width = containerRect.width;

        setDropdownStyle({ left, width, mode: "container" });
      } else {
        setDropdownStyle({ left: 0, width: "100%", mode: "container" });
      }
      return;
    }

    /**
     * ✅ Others => hovered li এর নিচে anchored থাকবে
     */
    if (wrapperRef.current && anchorEl) {
      const wrapRect = wrapperRef.current.getBoundingClientRect();
      const itemRect = anchorEl.getBoundingClientRect();

      const left = itemRect.left - wrapRect.left;

      setDropdownStyle({
        left: Math.max(0, left),
        width: "auto",
        mode: "anchored",
      });
    } else {
      setDropdownStyle({ left: 0, width: "auto", mode: "anchored" });
    }
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

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
                const isActive = open && activeTopCategory === item.id;

                return (
                  <li
                    key={item.id}
                    onMouseEnter={(e) => openAt(item.id, e.currentTarget)}
                    onFocus={(e) => openAt(item.id, e.currentTarget)}
                    className="has-dropdown"
                  >
                    <Link
                      href={item.href}
                      className={`menu-link ${isActive ? "is-active" : ""}`}
                    >
                      <span className="label">{item.label}</span>
                      <FiChevronDown
                        className="dropdown-arrow"
                        size={14}
                        aria-hidden
                      />
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
            width: dropdownStyle.width,
            zIndex: 60,
          }}
        >
          <MegaMenu
            initialCategory={activeTopCategory}
            showLeft={showLeft}
            allowLeftInteraction={showLeft}
            dropdownMode={dropdownStyle.mode} // ✅ IMPORTANT
          />
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useState } from "react";
import MegaMenu from "./MegaMenu/MegaMenu";
import { FiGrid } from "react-icons/fi";

export function MainHeader() {
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  return (
    <div
      className="header-wrapper"
      style={{ position: "relative", zIndex: 50 }}
    >
      {/* TOP NAVBAR */}
      <div className="main-header">
        <div className="container">
          <nav className="nev-menu">
            <ul>
              {/* All products – hover অথবা click এ ওপেন */}
              <li
                onMouseEnter={() => setOpenMegaMenu(true)}
                onClick={() => setOpenMegaMenu((prev) => !prev)}
              >
                <a href="#">
                  <FiGrid size={16} style={{ marginRight: 6 }} />
                  All products
                </a>
              </li>

              <li>
                <a href="#">Flyers & Leaflets</a>
              </li>
              <li>
                <a href="#">Booklets</a>
              </li>
              <li>
                <a href="#">Business Cards</a>
              </li>
              <li>
                <a href="#">Posters</a>
              </li>
              <li>
                <a href="#">Banners</a>
              </li>
              <li>
                <a href="#">Signs</a>
              </li>
              <li>
                <a href="#">Flags</a>
              </li>
              <li>
                <a href="#">Stickers</a>
              </li>
              <li>
                <a href="#">Gifts</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Eco</a>
              </li>
              <li>
                <a href="#">Quotations</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* MEGA MENU – navbar এর ঠিক নিচে, ওভারল্যাপ করে */}
      {openMegaMenu && (
        <div
          className="mega-menu-holder"
          onMouseLeave={() => setOpenMegaMenu(false)}
        >
          <MegaMenu />
        </div>
      )}
    </div>
  );
}

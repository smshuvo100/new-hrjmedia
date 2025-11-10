"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({ open, onClose, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // prevent site scroll
      document.documentElement.style.overflow = "hidden";
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!isVisible && !open) return null;
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className={`modal-overlay ${open ? "show" : "hide"}`}
      onClick={onClose}
    >
      <div
        className={`modal-shell fullscreen ${open ? "slide-up" : "slide-down"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content-scroll">{children}</div>
      </div>
    </div>,
    document.body
  );
}

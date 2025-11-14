import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="container">
            <div className="flex-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/assets/logo.webp"
                    alt="products"
                    width={155}
                    height={37}
                  />
                </Link>
              </div>

              <div className="search-form">
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">
                    <IoMdSearch />
                  </button>
                </form>
              </div>

              <div className="header-right">
                <ul>
                  <li>
                    <a href="#">
                      <FaHeadset />
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* need react icon for about  */}
                      <IoMdInformationCircleOutline />
                      About us
                    </a>
                  </li>
                </ul>

                <div className="header-buttons">
                  <button className="cart-btn">
                    <IoCartOutline /> <span className="cart-icon">0</span>
                  </button>
                  <div className="btn btn2">
                    <button className="login-btn">
                      <FiLogIn /> Sign in / Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <nav className="nev-menu">
              <ul>
                <li>
                  <a href="#">All products</a>
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

        <div className="last-header">
          <div className="container">
            <div className="last-header-all">
              <div className="left-box">
                <div className="left-box-card1">
                  <a href="#">
                    🤑
                    <strong>Best price</strong> guaranteed
                  </a>
                </div>
                <div className="left-box-card2">
                  <a href="#">
                    🔥 Always a <strong>Perfect Design</strong>
                  </a>
                </div>
                <div className="left-box-card3">
                  <a href="#">
                    💯 100% <strong>satisfaction</strong>
                  </a>
                </div>
                <div className="left-box-card4">
                  <a href="#">
                    👍
                    <strong>Same day print</strong> service available
                  </a>
                </div>
              </div>
              <div className="right-box">
                {/* <div className="google-icon">
                  <Image
                    src="/images/assets/img5.webp"
                    alt="products"
                    width={280}
                    height={28}
                  />
                </div> */}
                <div className="info-box">
                  <div className="avatar">
                    <Image
                      src="/images/assets/img4.webp"
                      alt="products"
                      width={100}
                      height={43}
                    />
                  </div>

                  <div className="text-wrap">
                    <h4>Do you need help?</h4>
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          Chat with us
                        </a>
                      </li>
                      \
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import React from "react";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="newsletter">
          <div className="container">
            <div className="flex-box">
              <div className="newsletter-content">
                <h4>
                  Sign up for our newsletter and get a 10% discount on your
                  first order!
                </h4>
                <p>
                  You&apos;ll be the first to know about irresistible offers &
                  exclusive print deals!
                </p>
              </div>
              <div className="newsletter-form">
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="google-review">
          <div className="container">
            <div className="flex-box">
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
                        Write a review
                      </a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="mailto:tqBZU@example.com">Email us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="google-icon">
                <Image
                  src="/images/assets/img5.webp"
                  alt="products"
                  width={402}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer">
          <div className="container">
            <div className="flex-box">
              <div className="footer-item sm1">
                <h4>Our services</h4>
                <ul>
                  <li>
                    <a href="#">Business & Enterprise</a>
                  </li>
                  <li>
                    <a href="#">Paper sizes for printing</a>
                  </li>
                  <li>
                    <a href="#">Design online with Canva</a>
                  </li>
                  <li>
                    <a href="#">Fast delivery</a>
                  </li>
                  <li>
                    <a href="#">HelloPrint non profit</a>
                  </li>
                  <li>
                    <a href="#">VIP Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-item sm2">
                <h4>Our services</h4>
                <ul>
                  <li>
                    <a href="#">Business & Enterprise </a>
                  </li>
                  <li>
                    <a href="#">Paper sizes for printing</a>
                  </li>
                  <li>
                    <a href="#">Design online with Canva</a>
                  </li>
                  <li>
                    <a href="#">Fast delivery</a>
                  </li>
                  <li>
                    <a href="#">HelloPrint non profit</a>
                  </li>
                  <li>
                    <a href="#">VIP Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-item sm3">
                <h4>Our services</h4>
                <ul>
                  <li>
                    <a href="#">Business & Enterprise </a>
                  </li>
                  <li>
                    <a href="#">Paper sizes for printing</a>
                  </li>
                  <li>
                    <a href="#">Design online with Canva</a>
                  </li>
                  <li>
                    <a href="#">Fast delivery</a>
                  </li>
                  <li>
                    <a href="#">HelloPrint non profit</a>
                  </li>
                  <li>
                    <a href="#">VIP Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-item sm4">
                <h4>Our services</h4>
                <ul>
                  <li>
                    <a href="#">Business & Enterprise </a>
                  </li>
                  <li>
                    <a href="#">Paper sizes for printing</a>
                  </li>
                  <li>
                    <a href="#">Design online with Canva</a>
                  </li>
                  <li>
                    <a href="#">Fast delivery</a>
                  </li>
                  <li>
                    <a href="#">HelloPrint non profit</a>
                  </li>
                  <li>
                    <a href="#">VIP Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-item sm5">
                <h4>Our services</h4>
                <ul>
                  <li>
                    <a href="#">Business & Enterprise </a>
                  </li>
                  <li>
                    <a href="#">Paper sizes for printing</a>
                  </li>
                  <li>
                    <a href="#">Design online with Canva</a>
                  </li>
                  <li>
                    <a href="#">Fast delivery</a>
                  </li>
                  <li>
                    <a href="#">HelloPrint non profit</a>
                  </li>
                  <li>
                    <a href="#">VIP Program</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="flex-box">
              <p>
                © 2025 hrjmedia. Website developed by{" "}
                <a href="https://ssweb.online/">ssweb online</a>
              </p>

              <div className="payments-images">
                <Image
                  src="/images/assets/img6.webp"
                  alt="products"
                  width={303}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

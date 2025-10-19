import Image from "next/image";
import styles from "./page.module.css";
import { FaBeer } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

import HeroSlider from "./components/HeroSlider/HeroSlider";

import PrintingServices from "./components/PrintingServices/PrintingServices";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="container">
            <div className="flex-box">
              <div className="logo">
                <Image
                  src="/images/assets/logo.webp"
                  alt="products"
                  width={155}
                  height={37}
                />
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
                    <strong>B Corp & FSC</strong> Certified
                  </a>
                </div>
              </div>
              <div className="right-box">
                <div className="google-icon">
                  <Image
                    src="/images/assets/img5.webp"
                    alt="products"
                    width={280}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeroSlider />
      <PrintingServices />

      {/*  print-steps-section */}
      <section className="print-steps-section">
        <div className="container">
          <div className="header-center">
            <h2>Print in 3 Easy Steps</h2>
            <p>
              “Getting your high-quality prints has never been easier. At
              <strong>HRJ Media</strong>, we make the process simple, fast, and
              stress-free. Just follow these three steps and your prints will be
              ready in no time.”
            </p>
          </div>
          <div className="grid-box">
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="item-content">
                  <h4>Upload Your Design</h4>
                  <p>Simple file upload or design in minutes.</p>
                  <div className="btn btn2">
                    <button>Get a Quote</button>
                  </div>
                </div>
                <div className="item-image">
                  <Image
                    src="/images/assets/img1.webp"
                    alt="Upload Your Design"
                    width={70}
                    height={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* categories-section */}
      <section className="categories-section">
        <div className="container">
          <div className="header-center">
            <h2>Discover our categories</h2>
          </div>

          <div className="grid-box">
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img2.webp"
                alt="Event & Festival"
                width={243}
                height={150}
              />
              <h5>Event & Festival</h5>
            </div>
          </div>
        </div>
      </section>

      {/*  our-products-section */}
      <section className="our-products-section">
        <div className="container">
          <div className="header-center">
            <h2>The Best Weekly Products</h2>
          </div>
          <div className="grid-box">
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
            <div className="item">
              <Image
                src="/images/assets/img3.webp"
                alt="products"
                width={337}
                height={296}
              />
              <p>Event & Festival</p>
              <h4>Poster Printing</h4>
              <h4>$50.00 - $130.00</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/*  section */}

        {/*  section */}

        {/*  section */}
        <div className="header-center">
          <h2>Bring Your Brand to Life with Outdoor Printing That Lasts</h2>
          <p>
            Elevate your brand&apos;s presence with custom outdoor signage and
            banners from <strong>HRJ Media</strong>. Perfect for any occasion,
            our high-quality, weather-resistant materials ensure your message
            shines in any condition. Whether promoting an event, sale, or
            building your brand identity, HRJ Media offers premium products,
            easy ordering, and same-day or next-day delivery — so you’re always
            ready to stand out.
          </p>
        </div>
        {/*  section */}
        {/*  section */}
        {/*  section */}
        {/*  section */}
        {/*  section */}
        <h1>
          H1 <strong>Header</strong> text
        </h1>
        <h2>H2 Header text</h2>
        <h3>H3 Header text</h3>
        <h4>H4 Header text</h4>
        <h5>H5 Header text</h5>
        <h6>H6 Header text</h6>
        <p>
          This is a paragraph. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="btn-group">
          <div className="btn">
            <a href="#">This is a link</a>
          </div>
          <div className="btn">
            <a href="#">This is a link</a>
          </div>
        </div>
        <br />
        <div className="btn">
          <button>This is a link</button>
        </div>
        <form>
          <div className="form-2col">
            <div className="form-group">
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" name="fname" placeholder="John" />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" name="lname" placeholder="Doe" />
            </div>
          </div>
          <div className="form-2col">
            <div className="form-group">
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" name="fname" placeholder="John" />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" name="lname" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>
          </div>

          <div className="btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
        <Image
          src="/example.jpg"
          alt="Example Image"
          width={600}
          height={400}
          className={styles.image}
        />
      </div>

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  footer */}
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

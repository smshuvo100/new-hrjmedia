// src/app/page.js
import Image from "next/image";

import HeroSlider from "./components/HeroSlider/HeroSlider";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import PrintingServices from "./components/PrintingServices/PrintingServices";

import PrintSteps from "./components/PrintSteps/PrintSteps";

import ProductCategory from "./components/ProductCategory/ProductCategory";

import ProductsCard from "./components/ProductsCard/ProductsCard";

const slides1 = [
  {
    id: 1,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Same Day",
    titleRest: "Printing",
    subtitle: "Need urgent printing?",
    paragraph:
      "Fast, reliable same-day printing for your urgent business needs.",
    buttonText: "Order Now",
    buttonLink: "/quote/same-day",
  },
  {
    id: 2,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Digital / Litho",
    titleRest: "Printing",
    subtitle: "Professional and fast printing services.",
    paragraph:
      "High-quality digital and litho printing for marketing materials.",
    buttonText: "Get Started",
    buttonLink: "/quote/digital-printing",
  },
  {
    id: 3,
    bg: "/images/assets/hero1.webp",
    titleStrong: "Large Format",
    titleRest: "Print",
    subtitle: "High-quality banners and posters.",
    paragraph:
      "Get stunning large-format prints for exhibitions and promotions.",
    buttonText: "Get a Quote",
    buttonLink: "/quote/large-format",
  },
  {
    id: 4,
    bg: "/images/assets/hero1.webp",
    titleStrong: "T-Shirt and",
    titleRest: "Hi Vis Vest",
    subtitle: "Custom apparel printing on demand.",
    paragraph:
      "Personalized T-shirts and hi-vis vests for your brand or event.",
    buttonText: "Shop Now",
    buttonLink: "/quote/apparel-printing",
  },
];

const slides2 = [
  {
    id: 1,
    bg: "/images/assets/hero2.webp", // এখানে দাও তোমার নতুন ব্যাকগ্রাউন্ড ইমেজের path
    titleStrong: "Professional",
    titleRest: "Printing Services",
    subtitle: "Quality that speaks for your brand.",
    paragraph:
      "From design to delivery — we offer professional-grade printing that makes your brand stand out with stunning clarity and precision.",
    buttonText: "Discover More",
    buttonLink: "/services/printing",
  },
  {
    id: 2,
    bg: "/images/assets/hero2.webp",
    titleStrong: "Exclusive",
    titleRest: "10% Discount",
    subtitle: "Save big on all print orders this month!",
    paragraph:
      "Enjoy 10% off on flyers, brochures, and more. High-quality prints at unbeatable prices — offer valid for a limited time only.",
    buttonText: "Grab the Offer",
    buttonLink: "/offers/discount",
  },
  {
    id: 3,
    bg: "/images/assets/hero2.webp",
    titleStrong: "Business",
    titleRest: "Branding Essentials",
    subtitle: "Everything you need to look professional.",
    paragraph:
      "Get business cards, booklets, and posters designed to impress. Build a consistent visual identity with HRJ Media.",
    buttonText: "Start Branding",
    buttonLink: "/services/branding",
  },
  {
    id: 4,
    bg: "/images/assets/hero2.webp",
    titleStrong: "Eco-Friendly",
    titleRest: "Printing",
    subtitle: "Sustainable printing for a greener planet.",
    paragraph:
      "We use eco-conscious inks and recyclable materials to create vibrant prints that care for the environment.",
    buttonText: "Learn More",
    buttonLink: "/services/eco-printing",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <HeroSlider slides={slides1} />

      <PrintingServices />

      <PrintSteps />

      {/* categories-section ProductCategory */}
      <ProductCategory />

      <div className="space-top-60"></div>
      <HeroSlider slides={slides2} />

      {/*  our-products-section  */}
      <ProductsCard />

      <div className="space-bottom-60"></div>

      {/* <div className="container">
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
      </div> */}

      {/*  
      ================
      step-form
      ===========




      Step 1 - Product
      ============

      Product Type* ( A4 Print, A3 Print, Banner, Roll up banner with stand, Brochure/Booklet, Business Cards, Dissertation/Thesis Bind Service, Flyers, Folded Flyers & Leaflets, Posters, Printing, Binding & Finishing Service, Stickers & Labels, Tickets, Other)  - dropdown
      ----------------

      A4 Print - if selected A4 Print
      ........................
        Sides* (Single sided, Double sided) - radio button
        Colour?* (Full Colour, Black & White) - radio button
        Paper?* ( 70-80 gsm uncoated paper, 130-170 gsm gloss, 170-250 gsm gloss, 250-350 gsm gloss, 130-170 gsm matt, 170-250 gsm matt, 250-350 gsm matt ) - radio button
        Bind?* ( Loose sheets, Staple bound in the top corner, Comb Bound, Saddle stitched booklet ) - radio button
        

      A3 Print
      ........................
        Sides* (Single sided, Double sided) - radio button
        Quantity* () - input number min 1 max 10000
        Paper Thickness?* [ 130 GSM (Thin), 170 GSM (Medium), 250 GSM (Moderately Thick), 300 GSM (Thick) ] - radio button
        


      Banner
      ..................
        Is this a roll up banner with a stand?* (Yes, No) - radio button
        Quantity* () - input number min 1 max 1000


        

      Roll up banner  with stand
      ........................
        Quantity* () - input number min 1 max 1000


      Brochure/Booklet
      ..................
        Quantity* () - input number min 1 max 1000
        Booklet/Brochure Type* [Saddle Stitched (Staple Bound), Perfect Bound (1-2 days), Comb Bound] - radio button
        Orientation* [Portrait, Landscape] - radio button
        How many pages ? Must be multiple of 4 such as 4, 8, 12 , 16 etc.* - input number min 4 max 200
        Finished Size* ( A6, A5, A4, Custom Size ) - radio button
        Cover Thickness?* ( 130 gsm, 170 gsm, 250 gsm, 300 gsm, 350 gsm ) - radio button
        Inner Pages Thickness?* ( 130 gsm, 170 gsm, 250 gsm, 300 gsm, 350 gsm ) - radio button
        Paper Type* [ Silk (Matt), Gloss ] - radio button



      Business Cards
      ..................
      Size* [85 x 55 mm (Standard), 85 x 25 mm (Mini), 55 x 55 mm (Square), 89 x 51 mm (American), 80 x 50 mm (Small), 90 x 55 mm (Long) ] - radio button
      Printed Sides* ( Single Sided, Double Sided ) - radio button
      Quantity* () - input number min 100 max 10000
      Paper thickness* ( 300 gsm, 350 gsm ) - radio button



      Dissertation/Thesis Bind Service
      ................................
      Sides* ( Single Sided, Double Sided ) - radio button
      Colour?* ( Full Colour, Black & White ) - radio button
      Paper?* ( 70-80 gsm uncoated paper, 130-170 gsm gloss, 170-250 gsm gloss, 250-350 gsm gloss, 130-170 gsm matt, 170-250 gsm matt, 250-350 gsm matt ) - radio button
      Bind?* ( Loose sheets, Staple bound in the top corner, Comb Bound, Saddle stitched booklet ) - radio button




      Flyers
      ........
      Sides* (Single sided, Double sided) - radio button
      Quantity* () - input number min 1 max 10000
      Orientation* ( Portrait, Landscape ) - radio button
      Paper Thickness?* [ 130 GSM (Thin), 170 GSM (Medium), 250 GSM (Moderately Thick), 300 GSM (Thick) ] - radio button
      Finished Size* ( A6, A5, A4, Custom Size ) - radio button
      Paper Type* [ Silk (Matt), Gloss ] - radio button
    



      Folded Flyers & Leaflets
      ..........................
      Folded leaflet type* [ Half Fold Flyers & Leaflets, Roll Fold Flyers & Leaflets, Z-Fold Flyers & Leaflets, Tri Fold Flyers & Leaflets ] - radio button
      Unfolded size* ( A5 (210 x 148 mm), A4 (297 x 210 mm), A3 (420 x 297 mm) ) - radio button
      Folded size* ( A6 (105 x 148 mm), A5 (148 x 210 mm), A4 (210 x 297 mm), DL (99 x 210 mm) ) - radio button
      Sides* ( Single Sided, Double Sided ) - radio button
      Paper Thickness?* [ 130 GSM (Thin), 170 GSM (Medium), 250 GSM (Moderately Thick), 300 GSM (Thick), 350 GSM (Extra Thick) ] - radio button
      Paper Type* [ Silk (Matt), Gloss ] - radio button





      Posters
      ................
      Quantity* () - input number min 1 max 1000
      Poster Size* ( A1, A2, A3, A4, Custom Size ) - radio button
      Poster Material* [ 200 gsm satin (this is paper), PVC vinyl poster material (most common), PVC vinyl sticky back (can stick to a glass surface), Sticky wallpaper (can stick to a wall), PVC vinyl banner material ( a bit rough texture to be used outside), PVC mount on 5mm foamex board ] - radio button


      Printing, Binding & Finishing Service
      .................................
      Sides* ( Single Sided, Double Sided ) - radio button
      Quantity* () - input number min 1 max 10000
      Paper Thickness?* [ 130 GSM (Thin), 170 GSM (Medium), 250 GSM (Moderately Thick), 300 GSM (Thick), 350 GSM (Extra Thick) ] - radio button
      Finished Size* ( A6, A5, A4, Custom Size ) - radio button
      Paper Type* [ Silk (Matt), Gloss ] - radio button




      Stickers & Labels
      .........................
      Quantity* () - input number min 1 max 10000
      Sticker Type* [ Vinyl Stickers (most economical), Window Stickers, Die Cut Stickers - individual hand-outs (suitable for non-urgent orders), Letter Cuts (just the letters and no background), Paper Stickers (suitable for non-urgent orders), Sticker Sheets (multiple stickers on a single sheet) ] - radio button
      Background* [ White (this includes all colours, including white), Clear (transparent) ] - radio button
      Sticker Shape* [ Rectangular, Circle, Custom Shape ] - radio button
      Sticker Size Unit?* [ mm, cm, inch ] - radio button
      Sticker height?* () - input number min 1 max 1000
      Sticker width?* () - input number min 1 max 1000
      Print specifications:* ( Printed on sheets ( most economical option), Tickets, Other (provide details below) ) - checkbox



    
      Tickets
      ..................
      Quantity* () - input number min 1 max 10000
      Paper Thickness?* [ 130 GSM (Thin), 170 GSM (Medium), 250 GSM (Moderately Thick), 300 GSM (Thick), 350 GSM (Extra Thick) ] - radio button




      Other (provide details below)
      ..........................
      Please provide details of the printing service you require:* - textarea




      Step 2 - Delivery Details
      ============

      When would you like to receive your item?* - radio button
      ................
      To receive express same-day delivery, please continue to fill out the form and let us know your preferred delivery time in the comment section
      Priority service tomorrow
      Super Express Same Day Delivery ( by 6 pm today) *£££ express charges may apply
      Super Express Night Delivery (by 11:59 pm today) *£££ express charges may apply
      Express Delivery Tomorrow by 10:30 am *£££ express charges may apply
      Express Delivery Tomorrow by 1 pm *£££ express charges may apply
      Express Delivery Tomorrow by 6 pm *££ express charges may apply
      Priority Delivery Tomorrow by 11:59 pm
      Standard 2 Working Days Delivery
      Standard 3 Working Days Delivery
      Standard 4 Working Days Delivery
      Standard (3-5 working days)
      I have a custom delivery deadline


      Delivery Address* - input text
      .................
      Enter postcode and click the Lookup button.
      Postcode



      Step 3 - Upload Design File (Optional)
      ============

      Do you have your design file/ document/ artwork ready?* - radio button
      .........................
        Yes
        No

      Upload Design File (multiple files allowed)** - file upload
      .................................
      PDF format is most desirable. We can still work with other format but can't guarantee quality. If size is too large too be uploaded here please send it via an online tool such as DropBox or WeTransfer. If it's an illustration file (i. vector file with .ai, .eps extension) please send them to us at


      How many copies of each of the attached document do you need to print?* - textarea
      .........................



      Step 4 - Your Details (Final Step)
      ============

      Your Name* - input text
      Your email* - input email
      Confirm Email - input email
      Your phone number* - input text
      Who will receive the order?* - radio button
      .........................
        Myself
        Someone else
        
      Any further instructions or details? (optional) - textarea
      ...................................













      */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  section */}

      {/*  footer */}
      <Footer />
    </>
  );
}

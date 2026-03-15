import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/SubHero/SubHero";
import FooterCta from "../components/FooterCta/FooterCta";

import "./Artwork.css";

export default function Page() {
  return (
    <>
      <Header />

      <SubHero
        bgImage="/images/assets/sub-header.webp"
        title="Supplying Your Artwork"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            <p>
              There are specific things you need to remember when creating
              artwork. We provide guidelines that will help you create perfect
              artwork files. Our guideline explains colour settings, file sizes,
              formats, line thickness, margins and image resolution.
            </p>

            <p>
              Following these guidelines will help ensure that your artwork is
              produced correctly and your final printed product looks perfect.
            </p>

            {/* FILE SIZE */}

            <div className="terms-block">
              <h2>File Size</h2>

              <p>
                Design your files in their final trim size. If possible your
                files will be automatically scaled to fit the order format
                without bleed.
              </p>

              <p>
                Please note that scaling a smaller format to a larger one may
                reduce image resolution. For example, scaling an A6 flyer to an
                A4 flyer can affect the final print quality.
              </p>

              <p>
                A lack of bleed on the outer edges may also cause white edges
                around your printed product.
              </p>
            </div>

            {/* COLOUR */}

            <div className="terms-block">
              <h2>Document Colour</h2>

              <p>
                Prepare your files using <strong>CMYK colour mode</strong>
                rather than RGB.
              </p>

              <p>
                When saving files select an appropriate CMYK colour profile.
              </p>

              <p>
                Avoid using 4 colour black for text. Instead set text colour to
                <strong>100% K</strong>.
              </p>

              <p>
                One colour backgrounds should use CMYK with 100% of the desired
                colour and a maximum of 15% of another colour.
              </p>

              <p>
                When using special colours such as Pantone or HKS, enter the
                correct values within the colour channel.
              </p>

              <p>
                If ordering greyscale products, the artwork file must also be
                created in greyscale.
              </p>

              <p>
                We recommend creating grey areas using shades of black to ensure
                the best print quality.
              </p>
            </div>

            {/* TRIM */}

            <div className="terms-block">
              <h2>Trim / Bleed</h2>

              <p>
                To allow margin for cutting differences in production always
                include trim marks.
              </p>

              <p>
                Standard trim size: <strong>3 mm</strong>
              </p>

              <p>
                Envelopes require <strong>1 mm</strong> bleed.
              </p>

              <p>
                Textile stretcher frames require <strong>15 mm</strong>.
              </p>

              <p>
                Avoid placing borders around the edges of the page. Due to
                cutting tolerance borders may appear uneven in the final print.
              </p>
            </div>

            {/* SAFETY MARGIN */}

            <div className="terms-block">
              <h2>Safety Margin</h2>

              <p>
                Keep all important content at least <strong>6 mm</strong> away
                from the edge of the finished size.
              </p>

              <p>
                Calendar and brochure content should be at least
                <strong>20 mm</strong> from the binding edge.
              </p>

              <p>
                Folders should maintain at least <strong>5 mm</strong> margin
                from fold lines.
              </p>

              <p>
                Background colours and images should extend into the bleed area
                to avoid white lines caused by cutting tolerance.
              </p>
            </div>

            {/* PAGE NUMBER */}

            <div className="terms-block">
              <h2>Page Number</h2>

              <p>
                For multi-page templates create pages in consecutive order
                starting from page 1 (front page) through to the last page.
              </p>

              <p>
                Please remove any unnecessary pages before submitting your
                artwork.
              </p>
            </div>

            {/* RESOLUTION */}

            <div className="terms-block">
              <h2>Resolution</h2>

              <p>
                Images and graphics: <strong>300 dpi</strong>
              </p>

              <p>
                Greyscale and colour images: <strong>300 dpi</strong>
              </p>

              <p>
                Line artwork: <strong>1200 dpi</strong>
              </p>

              <p>
                Advertising posters and print graphics: <strong>300 dpi</strong>
              </p>
            </div>

            {/* LINE WEIGHT */}

            <div className="terms-block">
              <h2>Line Weight</h2>

              <p>
                Lines should be at least <strong>0.125 pt</strong>.
              </p>

              <p>
                Lines that are too thin may be automatically increased to a
                printable weight.
              </p>

              <p>
                Avoid placing borders around the full page as cutting tolerance
                may affect the final appearance.
              </p>
            </div>

            {/* FILE FORMAT */}

            <div className="terms-block">
              <h2>File Format</h2>

              <p>Always save files in print-ready formats such as:</p>

              <p>
                <strong>PDF, JPG (300 dpi), TIFF (300 dpi)</strong>
              </p>

              <p>
                EPS and AI files must include embedded fonts or converted paths
                and all linked images.
              </p>

              <p>
                Avoid using multiple layers inside PDF files and keep natural
                transparencies to prevent colour conversion issues.
              </p>
            </div>

            {/* FONTS */}

            <div className="terms-block">
              <h2>Embedded Fonts or Paths</h2>

              <p>
                Convert fonts to outlines or embed them to prevent missing font
                issues.
              </p>

              <p>
                Use fonts without licence restrictions and ensure font encoding
                is correct within the PDF.
              </p>

              <p>
                Ensure there is enough contrast between background colours and
                text colours for the best print result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCta />
      <Footer />
    </>
  );
}

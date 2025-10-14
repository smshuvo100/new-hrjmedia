import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
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
          <input type="text" placeholder="This is a text input" />
          <br />
          <input type="email" placeholder="This is an email input" />
          <br />
          <input type="password" placeholder="This is a password input" />
          <br />
          <textarea placeholder="This is a textarea"></textarea>
          <br />
          <div className="btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>

        <form>
          <input type="text" placeholder="This is a text input" />
          <br />
          <input type="email" placeholder="This is an email input" />
          <br />
          <input type="password" placeholder="This is a password input" />
          <br />
          <textarea placeholder="This is a textarea"></textarea>
          <br />
          <div className="btn">
            <input type="submit" className="btn" value="Submit" />
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
    </>
  );
}

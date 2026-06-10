import { FiMail, FiPhone, FiMapPin, FiCopy } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-logo">Praveen Raju</h3>
          <p className="footer-desc">
            Passionate about building web applications and continuously learning
            new technologies.
          </p>
          <div>
            <a
              href="/resume.pdf"
              download="Praveen_Raju_Resume.pdf"
              className="resume-download"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <FiMail />
              <a href="mailto:praveenraju0011@gmail.com">
                praveenraju0011@gmail.com
              </a>
              <span
                onClick={() =>
                  navigator.clipboard.writeText("praveenraju0011@gmail.com")
                }
                className="copy-icon"
                role="button"
                tabIndex={0}
              >
                <FiCopy />
              </span>
            </li>
            <li>
              <FiPhone /> <a href="tel:+919066784510">+91 9066784510</a>{" "}
              <span
                onClick={() => navigator.clipboard.writeText("9066784510")}
                className="copy-icon"
                role="button"
                tabIndex={0}
              >
                <FiCopy />
              </span>
            </li>
            <li>
              <FiMapPin /> Bengaluru, KA
            </li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="quick-links">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#basic-projects">Basic Projects</a>
            </li>
            <li>
              <a href="#advanced-projects">Advanced Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Praveen Raju. Crafted with ❤️ and React
          JS.
        </p>
      </div>
    </footer>
  );
}

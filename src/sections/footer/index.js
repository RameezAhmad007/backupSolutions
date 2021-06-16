import React from "react";
import "./styles.scss";
const FooterSection = () => {
  return (
    <section className="footer">
      <div className="footer__content">
        <p class="copyright">
          © Copyright{" "}
          <strong>
            <span>Backup Solutions.</span>
          </strong>
          . All Rights Reserved
        </p>
        <p class="credits">
          Designed by{" "}
          <a className="credits__a" href="#">
            Backup Solutions
          </a>
        </p>
      </div>
    </section>
  );
};

export default FooterSection;

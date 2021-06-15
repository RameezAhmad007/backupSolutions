import React from "react";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import "./style.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <h1 className="contact__heading">Contact Us</h1>
        <div className="contact__info">
          <div className="info__card">
            <div className="info__icon">
              <BsEnvelope />
            </div>
            <div className="info__content">
              <p className="info__heading">Email:</p>
              <p className="info__desc">Support@backupsolutions.org</p>
            </div>
          </div>
          <div className="info__card">
            <div className="info__icon">
              <BsPhone />
            </div>
            <div className="info__content">
              <p className="info__heading">Call:</p>
              <p className="info__desc">1800-978-2725</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

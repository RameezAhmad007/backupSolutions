import React from "react";
import "./styles.scss";
const MoreInfo = () => {
  return (
    <section className="more">
      <div className="more__content">
        <div className="more__contact">
          <p className="more__heading">Contact Us</p>
          <p className="more__detail">
            <strong>Phone:</strong> 1800-978-2725
            <br />
            <strong>Email:</strong> Support@backupsolutions.org
            <br />
          </p>
        </div>
        <div className="more__contact">
          <p className="more__heading">Backup Solutions</p>
          <p className="more__detail">
            Here at Backup Solutions we are the best of the best in the direct
            marketing and sales arena and have the clientelle and the
            credentials to back our multi-million dollar operation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;

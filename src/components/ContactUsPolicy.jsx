import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./ContactUsPolicy.module.css";

const ContactUsPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.contactPolicy}>
      <div className={styles.container}>
        {/* Back Button */}
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1 className={styles.title}>Contact Us</h1>

        <p className={styles.text}>
          You may contact us using the information below:
        </p>

        <div className={styles.infoBox}>
          <p className={styles.infoItem}>
            <strong>Merchant Legal Entity Name:</strong> VEDANT DADASAHEB SHELAR
          </p>

          <p className={styles.infoItem}>
            <strong>Registered Address:</strong> <br />
            A 208 2nd FLR Shree Sati Aasara CHS, <br />
            Swapna Safalya New Prabhadevi Road, <br />
            Opp Samana Press, Mumbai, <br />
            Mumbai City, Maharashtra - 400025
          </p>

          <p className={styles.infoItem}>
            <strong>Telephone No:</strong> 9321677312
          </p>

          <p className={styles.infoItem}>
            <strong>E-Mail ID:</strong> vedantshelar871@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPolicy;

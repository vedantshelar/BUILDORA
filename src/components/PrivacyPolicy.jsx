import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.privacy}>
      <div className={styles.container}>
        {/* Back Button */}
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1 className={styles.title}>Privacy Policy</h1>

        <p className={styles.text}>
          This privacy policy sets out how <strong>VEDANT DADASAHEB SHELAR</strong>{" "}
          uses and protects any information that you give when you visit this
          website and/or agree to purchase from us. We are committed to ensuring
          that your privacy is protected.
        </p>

        <p className={styles.text}>
          Should we ask you to provide certain information by which you can be
          identified when using this website, you can be assured that it will
          only be used in accordance with this privacy statement. This policy may
          be updated from time to time, and you should check this page
          periodically to ensure that you are aware of any changes.
        </p>

        <h3 className={styles.subheading}>Information We May Collect</h3>

        <ul className={styles.list}>
          <li>Name</li>
          <li>Contact information including email address</li>
          <li>
            Demographic information such as postcode, preferences, and interests
          </li>
          <li>
            Other information relevant to customer surveys and/or offers
          </li>
        </ul>

        <h3 className={styles.subheading}>What We Do With the Information</h3>

        <p className={styles.text}>
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>

        <ul className={styles.list}>
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other information which we think you may find interesting
          </li>
          <li>
            Contacting you for market research purposes via email, phone, or
            other means
          </li>
          <li>Customizing the website according to your interests</li>
        </ul>

        <p className={styles.text}>
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in suitable
          physical, electronic, and managerial procedures to safeguard and
          secure the information we collect online.
        </p>

        <h3 className={styles.subheading}>How We Use Cookies</h3>

        <p className={styles.text}>
          A cookie is a small file which asks permission to be placed on your
          computer’s hard drive. Cookies help analyze web traffic and allow web
          applications to respond to you as an individual by remembering your
          preferences.
        </p>

        <p className={styles.text}>
          We use traffic log cookies to identify which pages are being used. This
          helps us analyze webpage traffic data and improve our website. This
          information is used for statistical analysis purposes only and then
          removed from the system.
        </p>

        <p className={styles.text}>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          settings to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>

        <h3 className={styles.subheading}>
          Controlling Your Personal Information
        </h3>

        <ul className={styles.list}>
          <li>
            You may choose to restrict the collection or use of your personal
            information when filling out forms on the website.
          </li>
          <li>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by contacting us.
          </li>
        </ul>

        <p className={styles.text}>
          We will not sell, distribute, or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so.
        </p>

        <p className={styles.text}>
          If you believe that any information we are holding on you is incorrect
          or incomplete, please write to:
        </p>

        <p className={styles.address}>
          A 208 2nd FLR Shree Sati Aasara CHS, <br />
          Swapna Safalya New Prabhadevi Road, <br />
          Opp Samana Press, Mumbai, <br />
          Mumbai City, Maharashtra - 400025
        </p>

        <p className={styles.text}>
          Or contact us at <strong>9321677312</strong> or{" "}
          <strong>vedantshelar871@gmail.com</strong>. We will promptly correct any
          information found to be incorrect.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

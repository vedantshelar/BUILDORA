import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <section className={styles.terms}>
      <div className={styles.container}>
                {/* Back Button */}
                <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <p className={styles.text}>
          For the purpose of these Terms and Conditions, the term “we”, “us”,
          “our” used anywhere on this page shall mean{" "}
          <strong>VEDANT DADASAHEB SHELAR</strong>, whose registered/operational
          office is A 208 2nd FLR Shree Sati Aasara CHS, Swapna Safalya New
          Prabhadevi Road, Opp Samana Press, Mumbai, Mumbai City, Maharashtra -
          400025.
        </p>

        <p className={styles.text}>
          “You”, “your”, “user”, “visitor” shall mean any natural or legal person
          who is visiting our website and/or agreed to purchase from us.
        </p>

        <p className={styles.text}>
          Your use of the website and/or purchase from us are governed by the
          following Terms and Conditions:
        </p>

        <ul className={styles.list}>
          <li>The content of the pages of this website is subject to change without notice.</li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee as
            to the accuracy, timeliness, performance, completeness or suitability
            of the information and materials found or offered on this website.
          </li>
          <li>
            You acknowledge that such information and materials may contain
            inaccuracies or errors, and we expressly exclude liability for any
            such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on our website is entirely
            at your own risk.
          </li>
          <li>
            It is your responsibility to ensure that any products, services or
            information available through our website meet your requirements.
          </li>
          <li>
            Our website contains material which is owned by or licensed to us,
            including design, layout, look, appearance, and graphics.
          </li>
          <li>
            Unauthorized use of information may give rise to a claim for damages
            and/or be a criminal offense.
          </li>
          <li>
            You may not create a link to our website from another website without
            prior written consent.
          </li>
          <li>
            Any dispute arising out of the use of our website is subject to the
            laws of India.
          </li>
          <li>
            We shall not be liable for any loss or damage arising from declined
            transactions due to cardholder limits.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TermsAndConditions;

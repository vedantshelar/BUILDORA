import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./CancellationAndRefund.module.css";

const CancellationAndRefund = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.cancellation}>
      <div className={styles.container}>
        {/* Back Button */}
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1 className={styles.title}>Cancellations and Refunds</h1>

        <p className={styles.text}>
          <strong>VEDANT DADASAHEB SHELAR</strong> believes in helping its customers
          as far as possible and has therefore adopted a liberal cancellation
          policy. Under this policy:
        </p>

        <ul className={styles.list}>
          <li>
            Cancellation requests will be considered only if the request is made
            within <strong>Not Applicable</strong> of placing the order. However,
            the cancellation request may not be entertained if the order has
            already been communicated to vendors or merchants and the process
            has been initiated.
          </li>

          <li>
            We do not accept cancellation requests for perishable items such as
            flowers, eatables, etc. However, a refund or replacement may be made
            if the customer establishes that the quality of the product delivered
            is not satisfactory.
          </li>

          <li>
            In case of receipt of damaged or defective items, please report the
            same to our Customer Service team. The request will be entertained
            once the merchant has verified and determined the issue. This must
            be reported within <strong>Not Applicable</strong> of receiving the
            product.
          </li>

          <li>
            If the product received is not as shown on the website or does not
            meet your expectations, you must notify our Customer Service team
            within <strong>Not Applicable</strong> of receiving the product. The
            team will review the complaint and take an appropriate decision.
          </li>

          <li>
            For complaints regarding products that come with a manufacturer’s
            warranty, please refer the issue directly to the manufacturer.
          </li>

          <li>
            In case any refund is approved by <strong>VEDANT DADASAHEB SHELAR</strong>,
            it will take <strong>Not Applicable</strong> for the refund to be
            processed to the end customer.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CancellationAndRefund;

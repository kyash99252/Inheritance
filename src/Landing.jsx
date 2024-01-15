import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Research,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./component";
import "./idx.css";

const Landing = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Clients /> <Research /> <Billing /> <CardDeal />{" "}
          <Testimonials /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import styles from "../index.module.css";
import HRBorder from "../../components/hr-border";
import CirdanTorch from "../../components/cirdan-torch";
import Gate from "../../components/gate";

const IndexPage = () => (
  <Layout>
    <SEO title="Valhalla" />
    <Container>
      <div className={styles.content}>
        <HRBorder />
        <h1 className={styles.header}>Welcome!</h1>
        <div className={styles.message}>
          <div className={styles.left}>
            <CirdanTorch />
          </div>
          <div className={styles.center}>
            <p>valhalla coming soon</p>
          </div>
          <div className={styles.right}>
            <CirdanTorch />
          </div>
        </div>
        <div className={styles.gateContainer}>
          <Gate />
        </div>
        <HRBorder />
      </div>
    </Container>
  </Layout>
);

export default IndexPage;

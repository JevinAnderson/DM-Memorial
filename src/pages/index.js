import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import styles from "./index.module.css";
import HRBorder from "../components/hr-border";
import CirdanTorch from "../components/cirdan-torch";
import Gate from "../components/gate";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className={styles.content}>
        <HRBorder />
        <h1 className={styles.header}>Welcome!</h1>
        <div className={styles.message}>
          <div className={styles.left}>
            <CirdanTorch />
          </div>
          <div className={styles.center}>
            <p>
              DM maybe gone, but the memories remain. This site is a homage to
              the past-time that has consumed so many of us over the years.
            </p>
            <p>I hope you enjoy it.</p>
          </div>
          <div className={styles.right}>
            <CirdanTorch />
          </div>
        </div>
        <Link to="/valhalla/">
          <div className={styles.gateContainer}>
            <Gate />
          </div>
        </Link>
        <HRBorder />
      </div>
    </Container>
  </Layout>
);

export default IndexPage;

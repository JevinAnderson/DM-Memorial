import React from "react";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const House = () => (
  <SurveyLayout>
    <SEO title="House" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>What was your favorite house in the game?</h1>
        <p>Outlaw!!</p>
        <p>Valor</p>
        <p>Conclave</p>
        <p>Valor</p>
        <p>Depraved</p>
        <p>Crusader</p>
        <p>Ancient. Loved the anonymity</p>
        <p>Covenant</p>
        <p>Outlaw</p>
        <p>Yeesh. Marauder or Brethren, Don't make me pick.</p>
        <p>Crusader though i never made it</p>
        <p>Outlaw</p>
        <p>Marauder</p>
        <p>Marauder/Syndicate</p>
        <p>Enforcer/Justicar</p>
        <p>Crusader - Always a constant in the game</p>
        <p>Valor</p>
        <p>Light</p>
        <p>crusader</p>
        <p>Syndicate - loved the black market and 'evading' the law</p>
        <p>
          The only housed character I ever played was in Light, so my
          perspective is probably somewhat limited. The house I always thought
          was the coolest (and the one I always wanted to join in my early days
          of playing DM) was Ancient.
        </p>
        <p>
          Brethren. I had a blast playing in and against the Brethren. The hells
          were amazing. Always hoped Segoir would come back with the rest of
          that last group.
        </p>
        <p>Life/Light</p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default House;

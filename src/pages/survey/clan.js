import React from "react";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const Clan = () => (
  <SurveyLayout>
    <SEO title="Clan" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>What was your favorite clan in the game?</h1>
        <p>The Horde... lol</p>
        <p>Golden Leaf Society</p>
        <p>none really</p>
        <p>
          I wish I could have had more experience with clans, as it is, I never
          joined or really interacted "on a level" with someone who was. I
          really only knew about 2 anyway, Drakontas Sporos and Guild of
          Alchemical Research.
        </p>
        <p>
          dr'Rhillzznae, thought it's the only one I had any interactions with.
        </p>
        <p>[DRE]</p>
        <p>Drow Clan</p>
        <p>dr’Rhilzznae</p>
        <p>Oryth'Eldaer</p>
        <p>None</p>
        <p>
          I refuse to answer. there were so many good ones. Drakontos Sporos,
          Golden Leaf Society, Cult of Worm amongst them.
        </p>
        <p>Blue beards</p>
        <p>Can we PLEASE at least start a gofundme?</p>
        <p>DS</p>
        <p>Cult of the Worm</p>
        <p>Wasn't into clans so much</p>
        <p>
          Dark Alliance - Completely player run clan that came out of nowhere
          and fought Houses, then fizzled out due to lack of any support.
        </p>
        <p>GAR</p>
        <p>N/A</p>
        <p>HRD ;)</p>
        <p>
          Didn't do a lot of Clan RP outside of the old draconian clan, Darkotos
          Soros or something?
        </p>
        <p>
          Never joined any clans... I always thought the dark-elf clan had a
          cool history/premise.
        </p>
        <p>Knights of the Lemniscate</p>
        <p>GML</p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default Clan;

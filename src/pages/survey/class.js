import React from "react";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const Class = () => (
  <SurveyLayout>
    <SEO title="Class" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>What was your favorite class to play?</h1>
        <p>Ninja</p>
        <p>Channeler</p>
        <p>Elementalists</p>
        <p>
          Aquamancer 10/10 Beastmaster 9/10 Highwayman 6/10 Barbarian 6/10 Nosub
          Warrior 5/10 Alchemist 5/10 Snake Monk: 5/10 Played every other class,
          but they're also really low scores. 4/10 at best.
        </p>
        <p>Dead tie between thief and cleric.</p>
        <p>Aquamancer</p>
        <p>Mantis Monk</p>
        <p>Nightwalker</p>
        <p>Ranger-Hunter</p>
        <p>Anti-paladins</p>
        <p>
          Illusionist. It was niche, and nobody liked it much for a long long
          time, which led to a lot of fun.
        </p>
        <p>Thief swashy or warrior defender</p>
        <p>unsub Thief, blackjack / dual backstab! Fun for everyone!</p>
        <p>Melee classes warriors to be more specific</p>
        <p>AP's / Clerics</p>
        <p>Anti-paladin</p>
        <p>Geomancer - Lots of potential for fighting</p>
        <p>Enchanter</p>
        <p>AP of War</p>
        <p>barbarian</p>
        <p>Zealot - couldn't play another class without gate after that</p>
        <p>
          Probably a three way toss-up between Zealot, AP of War, and
          Bladedancer (with an 'honorable mention' for Aeromancer)
        </p>
        <p>Nightwalker</p>
        <p>Warrior, Channeler, Elementalist</p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default Class;

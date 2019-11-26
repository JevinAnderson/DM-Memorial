import React from "react";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const Area = () => (
  <SurveyLayout>
    <SEO title="Area" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>What was your favorite area in the game?</h1>
        <p>Glyndane; social circle</p>
        <p>Tarot</p>
        <p>
          Underwater in the vastness of the Southern Sea, I found an underwater
          shipwreck randomly. Which was definitely lethal to non-water
          breathers.
        </p>
        <p>
          I always liked the Tower of Magic, but Glyndane was probably where I
          (we?) had the best interactions.
        </p>
        <p>The Shrine of Memories</p>
        <p>Drow City/First House</p>
        <p>Ruins of Veridien</p>
        <p>Thraccus</p>
        <p>Dragon Tower</p>
        <p>
          Veridien, hands down. It went thru numerous incarnations during the
          years I played, and though the gear didn't age great, the area itself
          was always challenging, right up to shut down day.
        </p>
        <p>Quite a few but spent most in glyndane.</p>
        <p>All of it</p>
        <p>Morkoth temple</p>
        <p>
          Anywhere between Glyndane/Ethshar/Ofcol because many many fights
          happened there
        </p>
        <p>Myth drannor</p>
        <p>
          nightmare tunnels beneath the stones of g'harne - So many lowbie pk
          battles while trying to rank back in the day.
        </p>
        <p>Necro tunnels, just because I seem to land there a lot</p>
        <p>Dragon Tower</p>
        <p>isle of dead</p>
        <p>
          Legion tower east of arkham, lots of neat quest stuff there and the
          scepter of undead
        </p>
        <p>
          Dragon Tower - I just couldn't resist the challenge of trying to solo
          the ancient dragons with pretty much every character I played. Lots of
          epic battles - sometimes ending in great victories, and sometimes
          humiliating defeats, but always fun.
        </p>
        <p>
          The crystal caverns. You could do it solo, lots of good gear, and just
          a really cool area.
        </p>
        <p>Drow City, Tarot Tower, Underdark</p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default Area;

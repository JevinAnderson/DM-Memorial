import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const DiplomaticImpunity = () => (
  <Layout>
    <SEO title="Diplomatic Impunity" />
    <Room>
      <h2>
        (Deep Blue Aura)A long, sharp serrated blade formed from pure diamond
        lies here.
      </h2>
      <p>
        This long and very sharp blade was cut from an unusually large and
        powerful diamond. It glitters in the light, its sharp, serrated edges
        drawing the eye's focus and making all else look dull or blurry. This
        fine weapon was made for Thrakyr of the Neverending Crusades for his use
        against mages and those who abuse the Weave.
        <br />
        <br />
        While diamonds are the hardest substance on Thera, they are also
        brittle, and as such this diamond sword might appear to be easily
        shattered. Not so. Made by the Goddess of Nature, this sword is imbued
        with Her strength to keep it from shattering in the middle of battle.
      </p>
      <Exits>
        <Link to="/characters/thrakyr">Thrakyr</Link>
      </Exits>
    </Room>
  </Layout>
);

export default DiplomaticImpunity;

import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Burulli = () => (
  <Layout>
    <SEO title="Burulli" />
    <Room>
      <h1>Burulli Tekin</h1>
      <p>
        You see a six foot tall human with black hair and green eyes. He's a
        very strong looking man, with more muscle than an ordinary human.
        Despite his bulging arms, his fingers are slender and thin, capable of
        fast strikes with well-learned agility. He carries a scar on his right
        cheek, from a deep and old wound. He wears light clothing and his black
        hair comes down to his shoulders in messy bundles. He does not seem to
        care much about his looks. Both his arms are covered by tattoos.
        Completely encircling the arms in spirals, from shoulders to wrists, are
        vipers painted in exquisite detail. There is an odd aroma of fresh herbs
        around him, contradicting with his general looks. Between the coils of
        the snake on his right arm, you see the tattoo of a dagger, dripping
        dark poison from its tip. Between the next set of coils, you see the
        tattoo of a broadsword, coated with crimson poison. Between the next set
        of coils, you see the tattoo of a spiked warhammer, coated with purple
        poison. Between the next set of coils, you see the tattoo of a
        battleaxe, coated with green poison.
      </p>
      <Exits>
        <Link to="/valhalla/keep/intersection">An intersection</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Burulli;

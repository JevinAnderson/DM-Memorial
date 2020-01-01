import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Brand } from "../../components/equipment";

const Quenton = () => (
  <Layout>
    <SEO title="Quenton" />
    <Room>
      <h1>
        Quenton "Candy Dragon" Beck, Master of the Tower, Leader of The Knights
        of the Lemniscate
      </h1>
      <p>
        Quenton has assumed the form of a prismatic dragon. Sort of. This
        dragon's body is composed entirely out of various candies and
        confectioneries. His multicolored torso, limbs, and lengthy tail
        resemble a large wyrm made of some sort of sticky gelatinous material.
        Prismatically colored rock candy scales encase the entirety of his body.
        When he moves, the scales refract the light and the tones continually
        shift, giving his scales a rainbow colored look. His scales once
        unblemished beauty have been marred by some sort of wild beast. Claw and
        bite marks seem to have scratched his hard candy scales. His limbs
        extend at most a foot from his torso and end in sharply formed
        peppermint shards for claws. The tail of his body ends with a large
        candy cane spike. Upon the dragons back, two taffy wings with licorice
        tendons seem to keep the creature aloft. The creature's skull is formed
        entirely of the same hardened rock candy as his scales. Two gumdrops
        take the place of its eyes. More peppermint shards form his teeth. His
        tongue is licorice. He smells delicious.
      </p>
      <p>
        <Equipment name="Quenton">
          <Brand god="Xyza" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/tower">The Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Quenton;

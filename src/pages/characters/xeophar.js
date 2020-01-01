import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Xeophar = () => (
  <Layout>
    <SEO title="Xeophar" />
    <Room>
      <h1>Xeophar, Master of the Tower</h1>
      <p>
        Xeophar floats in the air before you. Tentacles protrude from its
        clothing at irregular intervals. In some places they emerge from
        sleeves, in others, they emerge from holes torn into its garments to
        accommodate these strange appendages. Its black skin is oily and slick
        in a few sporadic patches covered with slime. The rest of it has dried
        and taken on the look and feel of rubber. There is a faint odor to it
        that, while difficult to place, will be quite memorable for its pungent
        stench. Its writhing mass of limbs seem to pulse with chaotic motion
        that contrasts with Xeophar's purposeful movements. At the same time
        some of Xeophar's limbs deftly wield wands and weapons, others lazily
        brush nearby objects seemingly without intent or reason. Two of these
        tentacles lay lifeless and limp as though dead. A third tentacle moves
        sluggishly and occasionally spasms as though it will soon join the dead
        limbs in their quiet slumber. The last thing one might notice, is
        Xeophar's rather large and bulbous eye. It has a single eye that glows
        with a reddish hue, and seems to sparkle with energy. The clear liquid
        coating that might cover such an eye seems to have dried up. This does
        not appear to bother Xeophar, and the material of the eye itself seems
        to have hardened into some sort of glass like substance.
      </p>
      <Exits>
        <Link to="/valhalla/tower">The Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Xeophar;

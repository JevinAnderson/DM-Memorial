import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Kelemeth = () => (
  <Layout>
    <SEO title="Kelemeth" />
    <Room>
      <h1>Kelementh Throuessuth</h1>
      <p>
        A humaniod creature stands before you, blending almost perfectly into a
        shadow . The bits of armor you can see under his over emcompasing cloak,
        are made of well fitted leather and cloth, almost to promote movement.
        The small bits of skin you can see, seems to be made of rough leather,
        with bits of crimson scales flaking off. On his back you can see a small
        bag, made of dark leather and bits of cloth. This bag seems to be filled
        with small odds and ends he might need. A flash of sapphire blue can
        been seen on his right fore-arm. Uppon inspection you see images
        tattoo'd into his scales. The largest image is a cresent bladed dagger.
        On his left arm, on the inner portain, you see a single bladed
        broadsword in the most brilliant sapphire blue. Across his knuckles you
        see, a large blue warhammer, outlined in emerald green. Starting at his
        ineer wrist and wrapping around the cresant bladed dagger, is the word
        Warlord in deep sapphire blue.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northwest-tower-top">The Northwest Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Kelemeth;

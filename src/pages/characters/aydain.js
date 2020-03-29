import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Aydain = () => (
  <Layout>
    <SEO title="Aydain" />
    <Room>
      <h1>Aydain Lechium-Stonefist</h1>
      <p>
        Lightly tanned from spending time outdoors in the sunlight, this elvish
        lady stands about 6' tall. Her icy blue eyes sparkle with a hint of
        amusement while her mouth curls upward in a slight smile. It might echo
        the amusement in her eyes. Long golden hair cascades in tresses down her
        back, beyond her waist, allowed to flow freely without the bond of a
        pretty ribbon or leather strap. Clothing fit for one of the rangers
        guild graces her slim, muscular form. She wears little in the way of
        fancy jewelry and no color added to her face at all, preferring an all
        natural look. Along her right forearm is a tattoo of a dagger, its blade
        softly glowing with a white light, signifying her rank in the Never-
        ending Crusades. Spanning the length of her left forearm is a freshly
        healing wound in the shape of a broadsword, as though carved with a
        knife and fashioned of her blood and healing flesh.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">The Green Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Aydain;

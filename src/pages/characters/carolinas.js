import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Carolinas = () => (
  <Layout>
    <SEO title="Carolinas" />
    <Room>
      <h1>Carolinas StonHurk, the weaponsmith</h1>
      <p>
        This giant stands nearly fourteen feet tall, from head to toe. His body
        is composed with layers of hard muscle; enormous veins budge out across
        the tanned and blemished skin. The chin is kept clean -- yet rough with
        small growth. A scar starts at the farthest end of the large left
        eyebrow and travels up the temple to where it disappears into the unruly
        mass of short- cropped, blonde curls. Bright, vibrantly green eyes are
        deep set within his skull, and are framed by heavy cheekbones. An apron
        is worn on his chest, created by several different materials. His left
        hand holds a rather large, iron hammer, wielding it with ease to do his
        workmanship. Tattooed on the surface of his left bicep is a Broadsword,
        crossed by a hammer. Surrounding the pictures are tiny burn marks.
      </p>
      <Exits>
        <Link to="/valhalla/keep/forge">The Crusader Forge</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Carolinas;

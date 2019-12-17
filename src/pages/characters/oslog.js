import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

import { Equipment, Shield, Wielded } from "../../components/equipment";

const Oslog = () => (
  <Layout>
    <SEO title="Oslog" />
    <Room>
      <h1>Oslog the combat master</h1>
      <p>
        Oslog is a master in combats. He is a large greenish troll who reaks of
        blood and sweat. He offers a grin of blackened and brown teeth. His
        frame is very large and muscles seem to bulge to the point they might
        explode. In every round of combat you see his eyes widen with
        excitement, and he grunts loudly. This gladiator's strength has whipped
        many an aspiring warrior into shape.
      </p>
      <Equipment>
        <Shield>a metal shield</Shield>
        <Wielded>(Sticky) a gladiator's sword</Wielded>
      </Equipment>
      <Exits>
        <Link to="/valhalla/keep/battle-room">The Battle Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Oslog;

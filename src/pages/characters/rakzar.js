import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Rakzar = () => (
  <Layout>
    <SEO title="Rakzar" />
    <Room>
      <h1>Rakzar Lechium</h1>
      <p>
        Massive and yet handsome the creature before you appears human-like yet
        amplified in scale. He has long, shoulder length black hair that has a
        slightly greasy look as though it has not been washed. His eyes are a
        sade of dark emerald and appear to have a hidden intelligence. His neck
        is strong and roped with thick cords. It is obvious from his being and
        swagger than he is very powerful. His face is creased with lines that
        show his mouth has experience both in a scowl and a smile. His broad
        shoulders look ready for any physical task. A finely etched dagger can
        be seen running the length of his right forearm. Upon his vast neck
        there is the last fourth of so of a mighty blade. The remainder of the
        deadly broadsword spans the length of his massive chest. On the back of
        his neck, the head of a great spiked warhammer, with the rest of its
        golden shaft running down then length of his back. The warhammer appears
        encrusted with jewels.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">The Northeast Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Rakzar;

import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Krazar = () => (
  <Layout>
    <SEO title="Krazar" />
    <Room>
      <h1>Lord Krazar</h1>
      <p>
        Before you stands a huge creature of ungodly proportions. His long,
        black, hair streams down his massive shoulders and flows down his back.
        You notice that his skin is thick and leathery as if the tension of many
        a battle hath beaten his skin into a calloused armor. Though he does not
        look as though he is the most intelligent being, he still looks as
        though he could handle himself in a fight. His legs are as thick as tree
        trunks. While his arms look to be wrought of V iron. Across his sinewy
        chest you see a tattoo of ^ an eagle soaring over an enraged viper. You
        also notice a carved tattoo of a DAGGER on his forearm. Directly above
        the dagger is a finely etched BROADSWORD that runs the rest of the span
        of his well muscled arm. On the opposite arm you notice a large
        WARHAMMER deeply engraved in his calloused flesh As his tunic parts you
        see that across his broad chest is a well etched BATTLEAXE
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower-top">
          The Top of the Northeast Tower
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Krazar;

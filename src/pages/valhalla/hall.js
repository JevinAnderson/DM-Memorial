import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Hall = () => (
  <Layout>
    <SEO title="The main hall" />
    <Room>
      <h1>The main hall</h1>
      <p>
        You find yourself in an enormous corridor. Purple torches light the area
        as you walk along the golden floor. The hall is silent, save for your
        footsteps, as you travel its length. Golden doorways can occasionally be
        seen on either side of the marble walls. The nearest door on the eastern
        wall is inscribed with the word, "Justice". Opposite it on the western
        wall is a door marked, "Freedom".
      </p>
      <Exits>
        <Link to="/valhalla/hall-2">north</Link>
        <Link to="/valhalla/parliament">east</Link>
        <Link to="/valhalla/valhalla">south</Link>
        <Link to="/valhalla/casino">west</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Hall;

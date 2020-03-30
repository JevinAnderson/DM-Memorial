import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const NorthWestTowerTop = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Northwest Tower</h1>
      <p>
        A howling whistle of wind and the draft of cool air welcomes you as you
        enter the northwest tower of the castle. Strong granite stones masoned
        with exceptional skill form the cone that makes up the tower. Tall
        stairs lead upwards, each step just below an average human's knee spiral
        to the top. Along the tower walls murder holes give a field of
        observation to that side of the castle. Green moss grows between the
        grooves of the fine stone. A damp cool breeze of air blows through the
        tower.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northwest-tower">down</Link>
      </Exits>
      <Characters>
        <Link to="/characters/danduran">Danduran is here.</Link>
        <Link to="/characters/kelementh">Kelementh is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default NorthWestTowerTop;

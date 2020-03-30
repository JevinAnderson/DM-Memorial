import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const SoutheastTower = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Southeast Tower</h1>
      <p>
        A howling whistle of wind and the draft of cool air welcomes you as you
        enter the southeast tower of the castle. Strong granite stones masoned
        with exceptional skill form the cone that makes up the tower. Tall
        stairs lead upwards, each step just below an average human's knee spiral
        to the top. Along the tower walls murder holes give a field of
        observation to that side of the castle. Green moss grows between the
        grooves of the fine stone. A damp cool breeze of air blows through the
        tower.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">west</Link>
        <Link to="/valhalla/keep/southeast-tower-top">up</Link>
      </Exits>
      <Characters>
        <Link to="/characters/dohgin"></Link>
      </Characters>
    </Room>
  </Layout>
);

export default SoutheastTower;

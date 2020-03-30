import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const LargeBarracks = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>A large Crusader Barracks</h1>
      <p>
        You enter a large Crusader barracks. Oversized cots, bunks, and storage
        trunks line the walls. All look large enough to be comfortable to the
        larger races. Any Troll, Giant, or Minotaur would find the size of
        things compatible. To the north side of the barracks stalls have been
        constructed with hay for the centaur race's needs. A large fireplace to
        the east radiates heat enough to warm the whole barracks.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further">west</Link>
      </Exits>
      <Spaces />
      You see a row of large zebrawood bedframes.
      <Characters>
        <Link to="/characters/bleyard">Bleyard is here.</Link>
        <Link to="/characters/schrader">Schrader is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default LargeBarracks;

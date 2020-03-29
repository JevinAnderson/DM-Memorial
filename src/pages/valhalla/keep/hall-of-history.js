import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const HallOfHistory = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Hall of History</h1>
      <p>
        As you enter the hall of history you are forced to sneeze from the dust
        gathered about. Shelves, cases, storage bins, and racks of every sort
        litter the room. Relics, ancient weapons, shields, figurines, old maps,
        cloaks, armor, anything old that relates to war or Crusader history
        seems to be collected here. Brass, steel, iron, stone, different woods,
        gems, myriad piles of material glimmer in the light. Layers of dust pile
        on many of the items. You wonder how many treasures are hidden about in
        this room.
      </p>
      <Exits>
        <Link to="/valhalla/keep/east-side">east</Link>
        <Link to="/valhalla/keep/chamber-of-decisions">south</Link>
        <Link to="/valhalla/keep/northwest-tower">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/tyberius">Tyberius is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default HallOfHistory;

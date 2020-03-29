import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const InnerKeep = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Inner Keep</h1>
      <p>
        This is the heart of the Castle Balkra. The massive stone ceiling of the
        inner keep arches overhead. Oversized Roman arches are formed from large
        granite stones, allowing entrance or exit in all the cardinal
        directions. Suits of various armors decorate this well traveled hall at
        various spots. The grey stone floor is polished to a near mirror shine.
        Along the floor toward the west, running north and south along the walls
        in the passages to the north and south, is a marble pipe.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further">north</Link>
        <Link to="/valhalla/keep/foyer">east</Link>
        <Link to="/valhalla/keep/further-2">south</Link>
        <Link to="/valhalla/keep/hall-of-memory-2">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/gharmyr">Gharmyr is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default InnerKeep;

import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";

const LargeBarracks = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Chamber of Decisions</h1>
      <p>
        A huge mass of red oak forms a circle table that takes up half of the
        room. Oversized solid oak chairs with tall backs line the edge of the
        giant table. One chair dwarfs the rest, its size large enough for a
        titan to sit in. Battle maps and charts are pinned to various points of
        the walls. This seems to be the room where many of the important
        decisions take place. Near one of the many maps on the wall is a framed
        leather scroll. Below it is a second framed leather scroll, this one
        sealed with green and adorned with a green ribbon. In one corner is a
        rock bearing the likenesses of a centaur, a dwarf, and a canine which
        strongly resembles a wolf. There are small words chiseled in the bottom
        corner of the rock.
      </p>
      <Exits>
        <Link to="/valhalla/keep/hall-of-history">north</Link>
        <Link to="/valhalla/keep/library">west</Link>
      </Exits>
      <Spaces />A carving of a giant warrior and a large red dragon doing battle
      is set into the wall, serving as a fountain.
    </Room>
  </Layout>
);

export default LargeBarracks;
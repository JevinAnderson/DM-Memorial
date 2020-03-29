import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const EastSide = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>East side of the Keep</h1>
      <p>
        This is the far eastern side of the keep. As with the rest of Castle
        Balkra, the craftsmanship of stone here is the finest in the land.
        Torches hung to the solid stone walls cast a creepy shadow as you make
        your way through this room. The stone keep seems to offer little comfort
        as a chill of cool air blows through the hall. To the west, east, and
        south a large Roman arch leads to other parts of the castle. Along the
        floor to the west, a marble pipe runs north and south, and at the
        northern wall turns toward the east, running along the base of the wall.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">east</Link>
        <Link to="/valhalla/keep/further">south</Link>
        <Link to="/valhalla/keep/hall-of-history">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/lazaron">
          Lazaron, a big, beefy, muscular dwarf with long black hair, is here.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default EastSide;

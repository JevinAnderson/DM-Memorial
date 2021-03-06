import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const SouthWestTowerTop = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Top of the Southwest Tower</h1>
      <p>
        The cross winds blow you slightly about on top of the tower. From this
        height all around the castle can be more than clearly viewed. A sign
        carved of red- wood hangs on one of the walls. Upon another wall is a
        huge golden plaque with names engraved upon it. A honeysuckle vine grows
        along the walls, its leaves and flowers reaching out over just about
        every inch of the walls, its roots dug into the floor beneath the
        plaque, a few roots reaching upward and acting as the source of a steady
        flow of honeysuckle nectar which falls into a shining golden basin.
        Amidst the splendor of the flowering vines are trophies of mage heads,
        beneath which a great weapon hangs in honor. The floor is covered with a
        thick coating of orange moss.
      </p>
      <Exits>
        <Link to="/valhalla/keep/southwest-tower">down</Link>
      </Exits>
      <Characters>
        <Link to="/characters/debashe">
          A powerfully built, muscular man is here to help with your training.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default SouthWestTowerTop;

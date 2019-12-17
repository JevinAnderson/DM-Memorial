import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const SoutheastTowerTop = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Top of the Southeast Tower</h1>
      <p>
        The cross winds blow you slightly about on top of the tower. From this
        height all around the castle can be more than clearly viewed. The tower
        top is constructed by smaller cut stones than the rest of the castle. It
        circles around with large stones placed to allow an opening for sight
        and a block to take cover behind. Green moss grows from the cracks of
        stone and a mildew scent is carried in the air.
      </p>
      <Exits>
        <Link to="/valhalla/keep/southeast-tower">down</Link>
      </Exits>
    </Room>
  </Layout>
);

export default SoutheastTowerTop;

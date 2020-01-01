import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Banquet = () => (
  <Layout>
    <SEO title="Lemniscate" />
    <Room>
      <h1>The Lemniscate</h1>
      <p>
        Lady Xyza, The One True Spell, floats in the air here. The weave is all
        around you here, visible to your eyes as infinite miniscule threads of
        energy intertwining with each other forming complex patterns. In the
        center a large lemniscate hovers, occasionally pulsing with white power.
        Lady Xyza attends to the weave occasionally, out of habit more than
        anything. Mostly she looks down upon her children and smiles. They've
        all come home. Her work complete, she beams with pride upon what she has
        wrought.
      </p>
      <Exits>
        <Link to="/valhalla/banquet">down</Link>
      </Exits>
      Lady Xyza, The One True Spell is here.
    </Room>
  </Layout>
);

export default Banquet;

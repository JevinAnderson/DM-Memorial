import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Fortress = () => (
  <Layout>
    <SEO title="The Fortress" />
    <Room>
      <h1>The Fortress</h1>
      <p>
        You have entered the war room of a large obsidian fortress. Maps of
        Thera hang on the walls everywhere. Points of strategic value are
        marked, and notes describing weaknesses can be found in the margins.
        Armor clad soldiers circle around a dias in the middle of the room.
        Blueprints of the halls of Valhalla and the sanctuaries of the noble
        houses are laid out upon the dias. Lord Styx, Lord Xeonauz, and Lady
        Drinlinda speak with scouts and make plans for their conquest of the
        afterlife. Members of the Legion and the Covenant listen with rapt
        attention to their immortals brilliant tactical plans. Even in death,
        their armies will not stop until they have conquered all.
      </p>
      <Exits>
        <Link to="/valhalla/hall-2">west</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Fortress;

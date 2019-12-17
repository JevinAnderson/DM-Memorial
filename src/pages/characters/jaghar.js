import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Jaghar = () => (
  <Layout>
    <SEO title="Jaghar" />
    <Room>
      <h1>Jaghar the ranger</h1>
      <p>
        Jaghar was once an avid Crusader who hunted magics from the Dead
        Forests. Now since he was ambushed by a group of nagas he has become the
        upkeeper for Castle Balkra. He has a massive upper frame, three of his
        legs strong and powerful, save his broken leg in splint and bandages. A
        smile greets you if no magical aura glows from your body. If one who has
        taken the oath of the Crusade says, 'Aid me, ranger' he will use his
        herbal knowledge to heal.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">The green room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Jaghar;

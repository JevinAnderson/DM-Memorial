import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Kug = () => (
  <Layout>
    <SEO title="Kug" />
    <Room>
      <h1>Kug the bartender</h1>
      <p>
        This eight foot tall minotaur quietly serves the orders for drinks. His
        right eye has a patch over it. His right horn is also slightly chipped
        while his left is long and sharp. He grunts and says no more than three
        words at a time. Every so often he clenches his fist and smashes
        something on the bar as he yells 'Chargem!'. Soon after he goes off in a
        daze for a moment before working the bar again.
      </p>
      <Exits>
        <Link to="/valhalla/keep/bar">The Crusader Bar</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Kug;

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
      <h1>An intersection</h1>
      <p>
        You stand on the far west side of the castle. The stone structure offers
        little warmth. A cool breeze blows through the halls. This point of the
        keep intersects west, north, and east. A stone stairway also decends in
        the southern section of the hall.
      </p>
      <Exits>
        <Link to="/valhalla/keep/battle-room">north</Link>
        <Link to="/valhalla/keep/green-room">east</Link>
        <Link to="/valhalla/keep/southwest-tower">west</Link>
        <Link to="/valhalla/keep/armory">down</Link>
      </Exits>
      <Characters>
        <Link to="/characters/burulli">
          A muscular human with a scar on his right cheek regards you with
          penetrating green eyes.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default InnerKeep;

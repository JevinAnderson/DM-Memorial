import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const Canteen = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Crusader Canteen</h1>
      <p>
        This is the Crusader Canteen. Behind the thick oak counter stands the
        giant shopkeeper. Various goods are stacked in an orderly way on shelves
        behind the counter. Crates of all shapes and sizes lie stacked all
        about. Torches on the south and north walls provide this room with a dim
        lighting. An exit lies to the west, from which direction you smell the
        scent of alcohol.
      </p>
      <Exits>
        <Link to="/valhalla/keep/bar">west</Link>
      </Exits>
      <Link to="/characters/yaburg">
        Yaburg goes about, fumbling and bumping into everything.
      </Link>
      <br />
    </Room>
  </Layout>
);

export default Canteen;

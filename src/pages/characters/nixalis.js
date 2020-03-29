import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Nixalis = () => (
  <Layout>
    <SEO title="Nixalis" />
    <Room>
      <h1>Lord Nixalis</h1>
      <p>
        Before you stands a slender figure dressed in deep grey robes. He stands
        a little under six feet in height, and through he is not large in the
        way of warriors, he is obviously not frail. His robes are cinched at the
        waist with an old belt, black in color, and very frayed at the edges.
        <br />A heavy cowl obscures this elf's features in shadows.
      </p>
      <Exits>
        <Link to="/valhalla/keep/southeast-tower-top">
          The Top of the Southeast Tower
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nixalis;

import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const Cave = () => (
  <Layout>
    <SEO title="The Brethren" />
    <Room>
      <h1>The Brethren</h1>
      <p>
        You stand upon a raised rock dais, in the middle of a lake of fire. 
      </p>
      <Exits>
        <Link to="/valhalla/cave">up</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Cave;

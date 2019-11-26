import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="The mists" />
    <Room>
      <h1>The mists</h1>
      <p>
        What remains of the mists lies before you. What was once a gatway and
        training ground to the young adventurers of Thera, is now a desolate
        graveyard. Dieing bushes littered with the remains of snakes, spiders,
        and such are all that remain. Even the surrounding mountains are
        crumbling. There is no more entrance into the lands, only the blasted
        remnants of a dead world. But all is not lost. A glowing golden path
        lies before you.
      </p>
      <Exits>
        <Link to="/valhalla/valhalla">north</Link>
      </Exits>
    </Room>
  </Layout>
);

export default IndexPage;
